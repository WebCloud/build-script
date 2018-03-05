# About this script

The [release.js](release.js) which is exposed as `release:npm`. The script uses [`npm version`] in conjunction with [`npm publish`] under the hood, and those use the [semver](https://semver.org/) scheme.
So with that you can use `yarn release:npm --major|minor|patch`. It also includes the optional flag `--rc` which can be used to bump an existing pre-release version, or create a new one in conjunction of one of the semver.

* **--major**: New major release
* **--minor**: New minor release
* **--patch**: New patch release
* **--rc**: It can do one of two options
    * By passing `--rc` by itself you can bump an existing pre-release version. Example:
        * *from* ~~`0.3.2-1`~~ *to* `0.3.2-2`
    * By passing it in conjuntion with one of the version options you can create a new pre-release version. Example:
        * Given that current version is `0.9.3` and you run `yarn release:npm --major --rc` it will result the following change: *from* ~~`0.9.3`~~ *to* `1.0.0-0`


Notice that in order to release to NPM you need to be logged in via `npm login`. Or have a `.npmrc` with the details of your credentials/private registry if that's desired.
