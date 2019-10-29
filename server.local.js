
const server = require('./dist/server');
const PORT = process.env.PORT || 4000;

server.app.listen(PORT, () => {
    console.log(`Node Express server listening on http://localhost:${PORT}`);
  });
  