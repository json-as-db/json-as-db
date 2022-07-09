# JAD db

Una base de datos en formato JSON.

[![NPM Version][npm-version-image]][npm-version-url]
[![NPM Install Size][npm-install-size-image]][npm-install-size-url]
[![NPM License][license-image]][license-url]

```js
import db from 'jad-db'

const Products = db({
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

[npm-version-url]: https://www.npmjs.com/package/jad-db
[npm-version-image]: https://badgen.net/npm/v/jad-db
[npm-install-size-image]: https://packagephobia.com/badge?p=jad-db
[npm-install-size-url]: https://packagephobia.com/result?p=jad-db
[license-image]: https://badgen.net/npm/license/jad-db
[license-url]: https://github.com/json-as-db/json-as-db/blob/master/LICENSE
