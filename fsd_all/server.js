const http = require('http');
const fs = require('fs');

const DATA_FILE = './data.json';

// Helper functions
const readData = () => JSON.parse(fs.readFileSync(DATA_FILE));
const writeData = (data) => fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/users') {
    // READ
    const users = readData();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  }

  else if (req.method === 'POST' && req.url === '/users') {
    // CREATE
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const users = readData();
      const newUser = { id: Date.now(), ...JSON.parse(body) };
      users.push(newUser);
      writeData(users);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newUser));
    });
  }

  else if (req.method === 'PUT' && req.url.startsWith('/users/')) {
    // UPDATE
    const id = parseInt(req.url.split('/')[2]);
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const users = readData();
      const index = users.findIndex(u => u.id === id);
      if (index !== -1) {
        users[index] = { ...users[index], ...JSON.parse(body) };
        writeData(users);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users[index]));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'User not found' }));
      }
    });
  }

  else if (req.method === 'DELETE' && req.url.startsWith('/users/')) {
    // DELETE
    const id = parseInt(req.url.split('/')[2]);
    const users = readData();
    const filtered = users.filter(u => u.id !== id);
    if (users.length !== filtered.length) {
      writeData(filtered);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'User deleted' }));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ message: 'User not found' }));
    }
  }

  else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

server.listen(3000, () => console.log('Server running on port 3000'));