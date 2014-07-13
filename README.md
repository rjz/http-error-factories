# HTTP error factories

Wraps [jproulx](https://github.com/jproulx)'s
[`http-custom-errors`](https://github.com/jproulx/node-http-error) with
friendly-named factory functions. All credit there--this extension is a matter
of syntactic preference only.

### Install

    npm install http-error-factories

### Usage

Factories are defined for each error name, using the lower camelcased name of
the corresponding error object. Each factory takes a single (optional) argument
representing a description of the error.

    var errors = require('http-error-factories');

    var error = errors.internalServer('Something went horribly wrong');

    error instanceof errors.HTTPError           // true
    error instanceof errors.InternalServerError // true

