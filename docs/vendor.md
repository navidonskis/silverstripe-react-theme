# Vendor `build:vendor` task

task are the same like `build:js`, but this one can be add a set of collections of 
dependencies. In the `configs/default.config.js`:

```
{
  vendor: {
    // include dependencies
    dependencies: [
      './node_modules/some-thirdparty/directory/some-plugin.js',
      './node_modules/some-thirdparty/some-plugin.js',
      './or-your-project/script.js'
    ],
    // name of the bundle to be combined all dependencies into one file
    bundleName: 'vendor.js'
  }
}
```

Then run `gulp build:vendor` to build `assets/js/vendor.js` file with combined all 
dependencies which are at array.