const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const arquivos = {'/':['index.html','text/html; charset=utf-8'],'/index.html':['index.html','text/html; charset=utf-8'],'/style.css':['style.css','text/css; charset=utf-8'],'/script.js':['script.js','text/javascript; charset=utf-8']};
http.createServer((req,res) => {
  const arquivo = arquivos[new URL(req.url,'http://localhost').pathname];
  if (!arquivo) { res.writeHead(404); res.end('Não encontrado'); return; }
  fs.readFile(path.join(__dirname,arquivo[0]),(erro,conteudo) => {
    if (erro) { res.writeHead(500); res.end('Erro ao ler arquivo'); return; }
    res.writeHead(200,{'Content-Type':arquivo[1]}); res.end(conteudo);
  });
}).listen(3000,'0.0.0.0',() => console.log('Aplicação disponível na porta 3000'));
