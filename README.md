# JSON as db

Una base de datos en formato JSON.

[![NPM Version][npm-version-image]][npm-version-url]
[![NPM Install Size][npm-install-size-image]][npm-install-size-url]
[![NPM License][license-image]][license-url]

```js
import db from 'json-as-db'

const Products = new db({
	filePath: './src/data/products.json',
	tableName: 'products',
})
```

## Instalación

```console
$ npm i json-as-db
```

## Uso

Es facil solo tienes que crear el archivo json y poner las tablas que desees recuerda que si no existe la tabla llamada en la clase dara un error no te preocupes por un id esta ya lo genera por ti.

```json
{
	"products": {
		"uuid": {
			"name": "",
			"price": 0,
			"description": ""
		}
	}
}
```

```js
const Products = new db('./src/db/database.json', 'products')

async function getProducts() {
	return await Products.get()
}
```

## Metodos

Estos son lo metodos que tiene la clase

- get()
- getById()
- create()
- update()
- delete()

[npm-version-url]: https://www.npmjs.com/package/json-as-db
[npm-version-image]: https://badgen.net/npm/v/json-as-db
[npm-install-size-image]: https://packagephobia.com/badge?p=json-as-db
[npm-install-size-url]: https://packagephobia.com/result?p=json-as-db
[license-image]: https://badgen.net/npm/license/json-as-db
[license-url]: https://github.com/siCasta/db-json/blob/main/LICENSE
