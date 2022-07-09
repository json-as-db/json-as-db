import { promises, existsSync } from 'fs'
import { v4 as uuidv4 } from 'uuid'

function JAD({ filePath, tableName }) {
	if (!filePath && !tableName) {
		throw new Error('filePath and tableName are required')
	}

	const getData = async () => {
		try {
			if (!existsSync(filePath)) await promises.writeFile(filePath, '{}')

			const jsondata = await promises.readFile(filePath, 'utf8')
			const data = JSON.parse(jsondata)

			if (!data[tableName]) data[tableName] = {}

			return data
		} catch (err) {
			throw new Error(err)
		}
	}

	const create = async object => {
		try {
			const data = await getData()
			const id = uuidv4()
			data[tableName][id] = object
			await promises.writeFile(filePath, JSON.stringify(data))
			return id
		} catch (err) {
			throw new Error(err)
		}
	}

	const get = async () => {
		try {
			const data = await getData()
			return data[tableName]
		} catch (err) {
			throw new Error(err)
		}
	}

	const getById = async id => {
		try {
			const data = await getData()
			return data[tableName][id]
		} catch (err) {
			throw new Error(err)
		}
	}

	const update = async (id, object) => {
		try {
			const data = await getData()
			data[tableName][id] = object
			await promises.writeFile(filePath, JSON.stringify(data))
		} catch (err) {
			throw new Error(err)
		}
	}

	const deleteById = async id => {
		try {
			const data = await getData()
			delete data[tableName][id]
			await promises.writeFile(filePath, JSON.stringify(data))
		} catch (err) {
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

export default JAD
