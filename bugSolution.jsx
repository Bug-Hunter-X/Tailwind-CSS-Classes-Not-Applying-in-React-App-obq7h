The issue was resolved by correctly configuring the `postcss.config.js` file to include the Tailwind and Autoprefixer plugins. The previous configuration was missing the required plugins, and thus, Tailwind's directives were not being processed in the build pipeline.  By adding these plugins with appropriate options, the Tailwind classes are correctly applied.

Here's the corrected `postcss.config.js` file:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Ensure that you've also installed the necessary packages:
```bash
npm install -D postcss autoprefixer tailwindcss
```

In addition, make sure that your build process correctly utilizes this `postcss.config.js` file.