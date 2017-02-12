# BBPack Examples

This is a collections of simple demos of bbpack.

These demos are purposely writtern in a simple and clear style. You will find no difficulty in following them to learn the convenient tool.

## Related Projects

- [BBPack](https://github.com/wujohns/bbpack)
- [Browserify](https://github.com/substack/node-browserify)
- [Babelify](https://github.com/babel/babelify)
- [LessModulesify](https://github.com/wujohns/less-modulesify)

## How to use

First copy the repo or directily download into your disk.

```
$ git clone https://github.com/wujohns/bbpack.git
```
Run `npm install` to install the dependencies

Then play with the source files under the repo's demo* directories.

## Index

1. [Basic Usage](#demo1-basic-usage)
1. [Use Libs Pack Feature](#demo2-use-libs-pack-feature)
1. [Sourcemap, Uglify And Watch Files' Change](#demo3-sourcemap-uglify-and-watch-files-change)
1. [Custom Browserify's transforms or plugins](#demo4-custom-browserifys-transforms-or-plugins)
1. [Use With Browsersync (custome afterPipes)](#demo5-use-with-browsersync-custome-afterpipes)

---

## Demo1: Basic Usage

[source](https://github.com/wujohns/bbpack-examples/tree/master/demo1)

Change your path to `demo1`. Run `node build`, it will create `dist/bundle.js` which is build from `src/src1.js`, `src/src2.js` and `src\style.less`.

Then you can open the `demo1/index.html` in the browser.

The core method in this build process is the `bbpack.pagesPack` in `demo1/build.js`, this method has a param named `pages` which is an `Array`. Each element in param `pages` is an object, an the object structure's detail is blow:
```
path: After build the target file is saved in this path
parts: The entry files(the files you want to build from)
```

You also can build multi target file in once by add object like above

## Demo2: Use Libs Pack Feature

In many pages, we use the same node_modules or common js-file (here we call it `lib`). If using the demo1's directly pack, the different target file will pack the lib repeatly. Using `libsPack` method can resolve this problem. the `libsPack` will pack the libs into a file(ex: libs.js) and what you need do for pages is just set the externals in `pagesPack` method.

like that:
```
bbpack.libsPack({
	libs: [
		...
		{ src: 'react', expose: 'react' }
		...
	],
	savePath: './dist/libs.js'
});

bbpack.pagesPack({
	pages: [
		...
	],
	externals: [... 'react', ...]
});
```

## Demo3: Sourcemap, Uglify And Watch Files' Change

If you want to use some convenient feature for develope of product(like sourcemap, uglify, auto build), just set it when init the `bbpack` object:
```
const BBPack = require('bbpack');
const bbpack = new BBPack({
	sourceMap: true,		// sourceMap support, default false
	uglify: true,			// uglify support, default false
	watch: true				// auto build when file change, default false
});
...
```

Then using `libsPack` or `pagesPack` for your project

## Demo4: Custom Browserify's transforms or plugins

Default `bbpack` use the [babelify](https://github.com/babel/babelify) and [less-modulesify](https://github.com/wujohns/less-modulesify) for browserify's transfroming. If you want to custom it or using other browserify's transforms or plugins, you need to set the `transfroms` params when init the bbpack object:
```
const BBPack = require('bbpack');
const babelify = require('babelify');
const lessModulesify = require('less-modulesify');
const bbpack = new BBPack({
	transforms: [
		{
            plugin: lessModulesify,		// If it is a browserify plugin the key will be 'plugin'
            config: {					// transform's config
                sourceMap: true,
                lessCompileOption: {}
            }
        },
        {
            transform: babelify,		// If it is a browserify transform the key will be 'transform'
            config: {
                presets: ['es2015', 'react', 'stage-3']
            }
        }
	]
	...
});
```
For more detail you can see [babelify](https://github.com/babel/babelify), [less-modulesify](https://github.com/wujohns/less-modulesify) and [browserify transforms List](https://github.com/substack/node-browserify/wiki/list-of-transforms)

## Demo5: Use With Browsersync (custome afterPipes)

This is a example of using the `bbpack`'s afterPipes feature. And It's very useful for development.
Using BrowserSync need a web server. So I write a script for it(server.js).

First run `node server` to start the static web server.

Then change dirctionary to `demo5` and run `node build` will start the building process and the browsersync service it will auto open the site you set in you default browser.

For more detail just see [browsersync site](https://browsersync.io/)

## Useful links

- [Browserify Transforms List](https://github.com/substack/node-browserify/wiki/list-of-transforms)
- [Browserify With Gulp](https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md)

## License

MIT