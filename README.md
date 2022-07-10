# JAD db

<img src="https://i.ibb.co/Hzdn1RP/JAD.png" width="300">

Una base de datos en formato JSON.

[![NPM Version][npm-version-image]][npm-version-url]
[![NPM Install Size][npm-install-size-image]][npm-install-size-url]
[![NPM License][license-image]][license-url]

```js
import db from 'jad-db'

const Products = db({
	filePath: 'src/data',
	tableName: 'products',
	name: 'products',
})
```

## Instalación

```console
$ npm i jad-db
```

## Uso

Es fácil solo tienes que crear el archivo json y unas propiedades como tablas de lo contrario lo hará por ti también viene incluido un id por defecto.

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
const Products = db('./src/db/database.json', 'products')

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
- deleteById()

[npm-version-url]: https://www.npmjs.com/package/jad-db
[npm-version-image]: https://badgen.net/npm/v/jad-db
[npm-install-size-image]: https://packagephobia.com/badge?p=jad-db
[npm-install-size-url]: https://packagephobia.com/result?p=jad-db
[license-image]: https://badgen.net/npm/license/jad-db
[license-url]: https://github.com/json-as-db/json-as-db/blob/master/LICENSE
