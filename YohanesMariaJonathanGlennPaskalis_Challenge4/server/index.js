import http from 'http';
import fs, { write } from 'fs';
import path from 'path';

const port = 3000;

http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      req.url = "/index.html";
      break;
    case "/search-cars":
      req.url = "/search-cars.html"
      break;
  }
  const filePath = "public" + req.url;
    fs.readFile(filePath, (err, data) => {
      console.log(filePath);
      if (err)
        res.writeHead(404);
      else if (path.extname(filePath)==='.svg')
        res.writeHead(200, {'Content-Type': 'image/svg+xml'});
      else
        res.writeHead(200);
      res.end(data);
    });
})
.listen(port, 'localhost', () => {
  console.log(`Local: http://localhost:${port}`);
})

// const renderHTML = (path, res) => {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.write('Error: file not found');
//     } else {
//       res.writeHead(200, {
//         'Content-Type': 'text/html',
//       });
//       res.write(data);
//     }
//     res.end();
//   })
// }

// http
//   .createServer((req, res) => {
//     const url = req.url;

//     if (url === '/' || url === '/index') {
//       renderHTML('public/index.html', res);
//     } else {
//       if (url!=='favicon.ico') renderHTML(`public/${url}.html`, res);
//     }

//   })
//   .listen(port, () => {
//     console.log(`Local: http://localhost:${port}`);
//   })