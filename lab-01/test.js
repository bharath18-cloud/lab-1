// test.js
// Simple test script for Lab 01 Express server
// Makes requests to all endpoints and logs status & response

const base = 'http://localhost:3000';
const endpoints = [
  '/',
  '/about',
  '/time',
  '/invalid'
];

async function testEndpoint(path) {
  try {
    const res = await fetch(base + path);
    const text = await res.text();
    console.log(`GET ${path} -> ${res.status}`);
    console.log('Response:', text.trim());
    console.log('---');
  } catch (err) {
    console.error(`Error fetching ${path}:`, err);
  }
}

(async () => {
  for (const ep of endpoints) {
    await testEndpoint(ep);
  }
})();
