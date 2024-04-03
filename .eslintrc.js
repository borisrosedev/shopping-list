module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es2021": true,
        "jest": true // Ajout de Jest à l'environnement
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module" // Indiquer que vous utilisez des modules
    },
    "extends": "eslint:recommended",
    "ignorePatterns": [".eslintrc.js","babel.config.js","jest.config.js"],
    "rules": {
        "curly": "error",
        "quotes": ["error", "double"]
    },
    "overrides": [
        {
            "files": ["*.test.js", "*.spec.js"],
            "rules": {
                "no-unused-expressions": "off",
                "no-undef": "off"
            },
            "env": {
                "browser": true,
                "jest": true // Ajout de Jest à l'environnement dans l'override
            }
        }
    ]
}
