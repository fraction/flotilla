const flotilla = require("./");

const ssb = flotilla();

ssb.whoami((err, res) => {
  if (err) throw err;
  console.log(res.id);

  // Apparently ssb.close() throws errors now?!
  process.exit(0);
});
