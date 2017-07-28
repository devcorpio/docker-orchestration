const http = require('http');
const url = require('url');
const redis = require('redis');

const client = redis.createClient(6379, 'redis');

client.set('/', 'Welcome to Docker-Compose helper. Enter the docker-compose command in the URL for help', redis.print);
client.set('/build', 'Build or rebuild services', redis.print);
client.set('/kill', 'Kill containers', redis.print);

const server = http.createServer(function (request, response) {
  const href = url.parse(request.url, true).href;
  response.writeHead(200, {'Content-Type': 'text/plain'});

  client.get(href, function (err, reply) {
    if (reply === null) {
      response.write(`Command: ${href.slice(1)} not supported`);
    } else {
      response.write(reply);
    }

    response.end();
  })
});

console.log('Listening on port 80');
server.listen(80);