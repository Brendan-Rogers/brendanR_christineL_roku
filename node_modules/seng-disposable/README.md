[![Travis](https://img.shields.io/travis/mediamonks/seng-disposable.svg?maxAge=2592000)](https://travis-ci.org/mediamonks/seng-disposable)
[![Code Climate](https://img.shields.io/codeclimate/github/mediamonks/seng-disposable.svg?maxAge=2592000)](https://codeclimate.com/github/mediamonks/seng-disposable)
[![Coveralls](https://img.shields.io/coveralls/mediamonks/seng-disposable.svg?maxAge=2592000)](https://coveralls.io/github/mediamonks/seng-disposable?branch=master)
[![npm](https://img.shields.io/npm/v/seng-disposable.svg?maxAge=2592000)](https://www.npmjs.com/package/seng-disposable)
[![npm](https://img.shields.io/npm/dm/seng-disposable.svg?maxAge=2592000)](https://www.npmjs.com/package/seng-disposable)

# seng-disposable

seng-disposable provides a basic framework for disposable classes and objects. Disposable is used as a basis for
many Seng libraries because it provides a common interface which can be passed around to be disposed at a later time.


## Installation

### yarn / npm

```sh
yarn add seng-disposable
```

```sh
npm i -S seng-disposable
```

### other

We also have browser, amd, commonjs, umd, systemjs and es6 versions of
this module available attached to the [Github Releases](https://github.com/mediamonks/seng-disposable/releases).

<!---

Note: The below cannot be used yet, as there is no way to link to a
specific version yet without updating this readme manually after each
new version.


### browser

```html
<script src="http://mediamonks-development.s3.amazonaws.com/seng/libs/seng-disposable/1.2.0/seng-disposable.min.js"></script>
```
```js
console.log(window.SengDisposable)
```

### other

Besides the browser version, there are other versions available for
download as well:

- [browser](http://mediamonks-development.s3.amazonaws.com/seng/libs/seng-disposable/1.2.0/seng-disposable.js) (and [minified](http://mediamonks-development.s3.amazonaws.com/seng/libs/seng-disposable/1.2.0/seng-disposable.min.js))
- [umd](http://mediamonks-development.s3.amazonaws.com/seng/libs/seng-disposable/1.2.0/seng-disposable.js) (and [minified](http://mediamonks-development.s3.amazonaws.com/seng/libs/seng-disposable/1.2.0/seng-disposable-umd.min.js))
- [amd](http://mediamonks-development.s3.amazonaws.com/seng/libs/seng-disposable/1.2.0/seng-disposable-amd.js)
- [commonjs](http://mediamonks-development.s3.amazonaws.com/seng/libs/seng-disposable/1.2.0/seng-disposable-commonjs.js)
- [systemjs](http://mediamonks-development.s3.amazonaws.com/seng/libs/seng-disposable/1.2.0/seng-disposable-system.js)
- [es6](http://mediamonks-development.s3.amazonaws.com/seng/libs/seng-disposable/1.2.0/seng-disposable-es6.zip)

-->

### manual

Check the **build** section below to see your you can build for all the
targets yourself.

## Usage

```ts
import Disposable from 'seng-disposable';

class AsyncThinger extends Disposable {
	interval:number;

	start() {
		this.interval = setInterval(() => console.log('hello world!'));
	}
	
	dispose() {
		if (this.interval !== void 0) {
			clearInterval(this.interval);
			this.interval = void 0;
		}
		
		super.dispose();
	}
}

// since all objects implementing IDisposable provide the same way to dispose it, we can simply create an array
// that contains IDisposable objects, without having to care about what they actually are.
let disposables:Array<IDisposable> = [];

disposables.push(new AsyncThinger());
disposables.push(new AsyncThinger());
disposables.push(new AsyncThinger());
disposables.push(new AsyncThinger());

disposables.forEach(disposable => disposable.dispose());

```


## Documentation

View the [generated documentation](http://mediamonks.github.io/seng-disposable/).


## Building

In order to build seng-disposable, ensure that you have [Git](http://git-scm.com/downloads)
and [Node.js](http://nodejs.org/) installed.

Clone a copy of the repo:
```sh
git clone https://github.com/mediamonks/seng-disposable.git
```

Change to the seng-disposable directory:
```sh
cd seng-disposable
```

Install dev dependencies:
```sh
yarn
```

Use one of the following main scripts:
```sh
yarn build           # build this project
yarn dev             # run dev-watch mode, serving example/index.html in the browser
yarn generate        # generate all artifacts (compiles ts, webpack, docs and coverage)
yarn typings         # install .d.ts dependencies (done on install)
yarn test:unit       # run the unit tests
yarn validate        # runs validation scripts, including test, lint and coverage check
yarn lint            # run tslint on this project
yarn doc             # generate typedoc documentation
```

When installing this module, it adds a pre-push hook, that runs the `validate`
script before committing, so you can be sure that everything checks out.

If you want to create the distribution files yourself, you can run the
`build-dist` script, and the following files will get generated in the
`dist` folder:

- **/dist/seng-disposable.js**: bundled with webpack, can be loaded from
	a script tag, available as `window.SengDisposable`
- **/dist/seng-disposable.min.js**: same as above, but minified
- **/dist/seng-disposable-amd.js**: bundled with webpack, can be used
	with e.g. requirejs
- **/dist/seng-disposable-commonjs.js**: bundled with webpack, can be
	used in systems that support commonjs, but you should just use npm
- **/dist/seng-disposable-umd.js**: bundled with webpack, works in the
	browser, with requirejs, and in a commonjs system
- **/dist/seng-disposable-umd.min.js**: same as above, but minified
- **/dist/seng-disposable-system.js**: bundled with typescript, can be
	used in systems	that support systemjs
- **/dist/seng-disposable-es6.zip**: transpiled with typescript, only
	types are removed from the source files

## Contribute

View [CONTRIBUTING.md](./CONTRIBUTING.md)


## Changelog

View [CHANGELOG.md](./CHANGELOG.md)


## Authors

View [AUTHORS.md](./AUTHORS.md)


## LICENSE

[MIT](./LICENSE) © MediaMonks
