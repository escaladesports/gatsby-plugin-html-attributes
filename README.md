# gatsby-plugin-html-attributes

A Gatsby plugin to easily add HTML attributes like `lang` or `xmlns`.

## Installation

With npm:

```bash
npm install --save gatsby-plugin-html-attributes
```

Or with Yarn:

```bash
yarn add gatsby-plugin-html-attributes
```

## Usage

In your `gatsby-config.js` file, load in the plugin along with an object of any `<html>` attributes you want to add. Example:

```javascript
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    }
  ]
}
```