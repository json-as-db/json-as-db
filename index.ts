import { promises, existsSync, readFileSync } from 'fs'
import { v4 as uuidv4 } from 'uuid'
import path from 'path'
import {
	Jad,
	JadOptions,
	JadGetData,
	JadCreate,
	JadDatabase,
	JadGet,
	JadGetById,
	JadUpdate,
	JadDeleteById,
	JadConfig,
} from './types/jad'

function jad({ tableName }: JadOptions): Jad {
	if (!tableName) {
		throw new Error('tableName is required')
	}

	function getConfigJson() {
		try {
			const configPath = path.join('./', 'jad.config.json')
			if (existsSync(configPath)) {
				return JSON.parse(readFileSync(configPath, 'utf8')) as JadConfig
			}

			return {
				jadDbPath: './',
				jadDbName: 'jad.db.json',
			}
		} catch (err) {
			throw new Error('Could not read jad.config.json')
		}

	}

	const { jadDbPath, jadDbName } = getConfigJson()!

	const dbPath = path.join(jadDbPath, jadDbName || 'jad.db.json')

	async function getData(): JadGetData {
		try {
			if (!existsSync(dbPath)) {
				await promises.mkdir(jadDbPath, { recursive: true })
				await promises.writeFile(dbPath, '{}')
			}

			const jsondata = await promises.readFile(dbPath, 'utf8')
			const data: JadDatabase = JSON.parse(jsondata)

			if (!data[tableName]) data[tableName] = []

			return data
		} catch (err: any) {
			throw new Error(err)
		}
	}

	async function create(object: object): JadCreate {
		try {
			const _id = uuidv4()

			const data = await getData()

			const _createdAt = new Date().toISOString()
			const _updatedAt = new Date().toISOString()

			const newObject = { _id, ...object, _createdAt, _updatedAt }
			data[tableName].push(newObject)

			await promises.writeFile(dbPath, JSON.stringify(data, null, 4))

			return _id
		} catch (err: any) {
			throw new Error(err)
		}
	}

	async function get(): JadGet {
		try {
			const data = await getData()
			return data[tableName]
		} catch (err: any) {
			throw new Error(err)
		}
	}

	async function getById(id: string): JadGetById {
		try {
			const data = await getData()
			const item = data[tableName].find(item => item._id === id)!
			return item
		} catch (err: any) {
			throw new Error(err)
		}
	}

	async function update(id: string, object: object): JadUpdate {
		try {
			const data = await getData()
			const item = data[tableName].find(item => item._id === id)!
			const _updatedAt = new Date().toISOString()

			const newObject = { ...item, ...object, _updatedAt }
			data[tableName] = data[tableName].map(item => (item._id === id ? newObject : item))

			await promises.writeFile(dbPath, JSON.stringify(data, null, 4))
		} catch (err: any) {
			throw new Error(err)
		}
	}

	async function deleteById(id: string): JadDeleteById {
		try {
			const data = await getData()
			data[tableName] = data[tableName].filter(item => item._id !== id)

			await promises.writeFile(dbPath, JSON.stringify(data, null, 4))
		} catch (err: any) {
			throw new Error(err)
		}
	}

	return {
		create,
		get,
		getById,
		update,
		deleteById,
	}
}

export default jad
