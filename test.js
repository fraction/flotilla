const flotilla = require("./");
const pull = require('pull-stream')

const ssb = flotilla();

ssb.whoami((err, res) => {
  if (err) throw err;
  console.log(res.id);

  pull(
    ssb.createLogStream({live: false, limit:5, reverse: true}),
    pull.collect((err, msgs) => {
      if (err) throw err;
      console.log(msgs);

      // Apparently ssb.close() throws errors now?!
      process.exit(0);
    })
  )
});
