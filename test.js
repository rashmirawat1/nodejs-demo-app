// very simple smoke test; CI will run this
const http = require('http');

const options = { method: 'GET', host: 'localhost', port: 3000, path: '/' };
const req = http.request(options, res => {
  console.log('STATUS:', res.statusCode);
  process.exit(0); // success (for simple demo)
});
req.on('error', () => process.exit(1));
req.end();
