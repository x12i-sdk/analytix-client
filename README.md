# @x12i/analytix-client usage example

Typed HTTP client for Analytix analytics, dashboard execution, and mock or live endpoint selection.

This consuming application demonstrates **run an analytic through an offline http client fixture** using the published npm package, pinned to `1.1.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Run an analytic from a service that does not embed the runtime.
- Switch a consuming application between local mock and live API modes.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/analytix-client)
- [Implementation monorepo](https://github.com/x12i/analytix)
- [Reviewed package source](https://github.com/x12i/analytix/tree/cf2ed708652df6f853af877340acc385d17c76f2/packages/analytix-client)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
