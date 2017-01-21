# generator-NExT [![NPM version][npm-image]][npm-url]  [![Coverage percentage][coveralls-image]][coveralls-url]
> Generator that provides a basic setup for a Node project with Express and Typescript.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-next using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-next
```

Then generate your new project:

```bash
yo next
```

Feel free to [learn more about Yeoman](http://yeoman.io/).

## Documentation

### Used frameworks, libraries and tools:
 
#### Language:
 - [typescript](https://github.com/Microsoft/TypeScript)
 
#### Runtime:
 - [Node](https://github.com/nodejs/node)
 - [nodemon](https://github.com/remy/nodemon)

#### Build:
 - [gulp](https://github.com/gulpjs/gulp)
 - ... check the gulpfile.js in generators/app/templates for all used plugins
 
#### Web Framework:
 - [Express](https://github.com/expressjs/express)

#### Logging:
 - [morgan](https://github.com/expressjs/morgan)
 - [winston](https://github.com/winstonjs/winston)

#### Test:
 - [istanbul](https://github.com/gotwarlost/istanbul)
 - [remap-istanbul](https://github.com/SitePen/remap-istanbul)
 - [mocha](https://github.com/mochajs/mocha)
 
#### Others:
 - [tslint](https://github.com/palantir/tslint)
 - [typedoc](https://github.com/TypeStrong/typedoc)


## License

BSD-3-Clause © [Andreas Enenkel]()

[npm-image]: https://badge.fury.io/js/generator-next.svg
[npm-url]: https://npmjs.org/package/generator-next
[coveralls-image]: https://coveralls.io/repos/enenkel/generator-next/badge.svg
[coveralls-url]: https://coveralls.io/r/enenkel/generator-next
