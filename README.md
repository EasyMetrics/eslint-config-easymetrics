<div align="center">
  <img width="200" height="200"
    src="https://cdn.worldvectorlogo.com/logos/eslint.svg">
  <a href="https://github.com/easymetrics">
    <img width="200" height="200" vspace="" hspace="25"
      src="https://worldvectorlogo.com/logos/easymetrics.svg">
  </a>
  <h1>EasyMetrics ESLint Configuration</h1>
  <p>Provides EasyMetrics's .eslintrc as an extensible shared config.<p>
</div>

<h2 align="center">Install</h2>

```bash
npm i -D @easymetrics/eslint-config-easymetrics
```

<h2 align="center">Usage</h2>

EasyMetrics's eslint configuration contains all of our ESLint rules, including ECMAScript 6+ and is similar to [Airbnb's ESLint base rules](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base). It requires `eslint` and `eslint-plugin-import`.

<h2 align="center">eslint setup</h2>

_In your .eslintrc.js || .yml || .json add ..._

```js
// Add to your .eslintrc

"extends": "webpack"
```
