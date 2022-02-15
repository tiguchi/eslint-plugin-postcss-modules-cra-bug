module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "plugins": [
        "react",
        "react-hooks"
    ],
    "extends": [
        "plugin:react/recommended",
        "plugin:import/recommended",
        "plugin:postcss-modules/recommended"
    ],
    "settings": {
        "react": {
            "version": "detect"
        },
        "postcss-modules": {
            "include": "**/*.module.scss",
            "exclude": "**/node_modules/**/*"
        }
    }
};
