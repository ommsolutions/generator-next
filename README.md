# Generator-NExT [![NPM version][npm-image]][npm-url]
> Generator that provides a basic setup for a **N**ode project with **Ex**press and **T**ypescript.

## Installation

First, install [Yeoman](http://yeoman.io) and Generator-NExT using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-next
```

Then generate your new project:

```bash
yo next <root directory>
```

Feel free to [learn more about Yeoman](http://yeoman.io/).

## Documentation

### Used frameworks, libraries and tools:
 
#### Language:
 - [Typescript](https://github.com/Microsoft/TypeScript)
 
#### Runtime:
 - [Node](https://github.com/nodejs/node)
 - [Nodemon](https://github.com/remy/nodemon)

#### Build:
 - [Gulp](https://github.com/gulpjs/gulp)
 - ... check the gulpfile.js in generators/app/templates for all used plugins
 
#### Web Framework:
 - [Express](https://github.com/expressjs/express)

#### Logging:
 - [Morgan](https://github.com/expressjs/morgan)
 - [Winston](https://github.com/winstonjs/winston)

#### Test:
 - [Istanbul](https://github.com/gotwarlost/istanbul)
 - [Remap-istanbul](https://github.com/SitePen/remap-istanbul)
 - [Mocha](https://github.com/mochajs/mocha)
 
#### Others:
 - [Tslint](https://github.com/palantir/tslint)
 - [Typedoc](https://github.com/TypeStrong/typedoc)


## Roadmap

 Version 0.3.x:   Implement sub generator which adds [pug](https://github.com/pugjs/pug)  
 Version 0.4.x:   Implement sub generator which adds [mongoose](https://github.com/Automattic/mongoose)  
 Version 1.x.x:   Combine all sub generators on demand.
## License

MIT

[npm-image]: https://badge.fury.io/js/generator-next.svg
[npm-url]: https://npmjs.org/package/generator-next
[coveralls-image]: https://coveralls.io/repos/enenkel/generator-next/badge.svg
[coveralls-url]: https://coveralls.io/r/enenkel/generator-next
