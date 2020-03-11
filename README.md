# Flotilla

Flotilla is a quick and easy SSB service that provides common plugins without
any of the usual configuration hassles.

## Example

After installing, launch Oasis from the command line by running:

```javascript
const flotilla = require("@fraction/flotilla");

const ssb = flotilla();

ssb.whoami((err, res) => {
  if (err) throw err;
  console.log(res.id);
  ssb.close();
});
```

You can pass an object to `flotilla()` to override SSB-Config.

## Installation

First, you'll need Node.js and npm on your computer. Run `node --version` to see if you have it. If not, or if it's older than the [**current** or **active LTS** version](https://nodejs.org/en/about/releases/), you should [download Node.js](https://nodejs.org/en/about/releases/) first.

Then, install Flotilla:

```shell
npm install @fraction/flotilla
```

## Resources

- [Help](https://github.com/fraction/flotilla/issues/new)
- [Source Code](https://github.com/fraction/flotilla.git)

## See Also

- [Oasis](https://github.com/fraction/oasis)
- [SSB-Server](https://github.com/ssbc/ssb-server)

## License

AGPL-3.0
