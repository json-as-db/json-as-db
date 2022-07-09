module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: ['standard', 'eslint-config-prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'no-tabs': 'off',
		'no-trailing-spaces': 'off',
		indent: 'off',
		'space-before-function-paren': 'off',
	},
}
