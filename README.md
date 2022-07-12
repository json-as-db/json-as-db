<p align="center">
<img src="https://i.ibb.co/jyQxXBb/JAD.png" width="300">
</p>
<p align="center">
Una base de datos en formato JSON.
</p>
<div align="center">

[![NPM Version][npm-version-image]][npm-version-url]
[![NPM Install Size][npm-install-size-image]][npm-install-size-url]
[![NPM License][license-image]][license-url]

</div>

## Inicio rapido

**1. Instalar el paquete**

```shell
$ npm i jad-db
```

**2. Usar la configuracion**

Crea un archivo `jad.config.json` en tu directorio de trabajo de lo contrario se creara el archivo `jad.db.json` en tu directorio de trabajo.

```json
{
  "jadDbPath": "src/db/", // Ruta de la base de datos
  "jadDbName": "jad.db.json" // Nombre de la base de datos
}
```

**3. Crear el modelo de tabla** (ES6 module syntax)

```js
import jad from 'jad-db'

const Products = jad({
  tableName: 'products',
})

export default Products
```

o en CommonJS

```js
const jad = require('jad-db')

const Products = jad({
  tableName: 'products',
})

module.exports = Products
```

## Uso del modelo

```js
import Products from './src/models/Products'

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
