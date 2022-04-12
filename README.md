# gatsby-plugin-convert-js

A Gatsby plugin to add an [Convert JS Snippet](https://support.convert.com/hc/en-us/articles/4411731640973) to your site.


## Install

`$ npm install --save @crometrics/gatsby-plugin-convert-js`

## How to use

### Setup

In your gatsby-config.js file:

```javascript
plugins: [
  {
    resolve: `@crometrics/gatsby-plugin-convert-js`,
    options: {
      // This is the number that appears in the snippet.
      convertId: '123456789-123456789',
    }
  }
];
```
