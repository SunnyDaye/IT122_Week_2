let http = require("http");
let fs = require("fs");

const page = fs.readFileSync('index.html', 'utf8');

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(page);
})
.listen(3000);