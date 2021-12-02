module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "airbnb-base",
    // "parserOptions": {
    //     "ecmaVersion": 13
    // },
    "rules": {
      'array-callback-return': ["warn", { allowImplicit: true }],
      'new-cap': ["warn"]
    }
};
