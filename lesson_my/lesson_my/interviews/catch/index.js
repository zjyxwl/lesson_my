const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    if (path.normalize(decodeURI(req.url)) !== decodeURI(req.url)) {
        res.statusCode = 403;
        res.end();
        return;
    }
    // console.log(req.url)
    if (req.url === '/') {
        // // 首页内容 index.html
        // fs.readFile('./index.html', 'utf8', (err, data) => {
        //     // node 异步无阻塞
        //     // 默认第一个参数err
        //     if (err) {
        //         res.end('出错了')
        //         return
        //     }
        //     res.end(data);
        // })
        // Async 异步  Sync 同步 阻塞
        // const data = fs.readFileSync('./index.html', 'utf8')
        // console.log(data);
        // res.end(data)
        fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res)
        return
    }
    // console.log(req.url);
    let abs = path.join(__dirname, req.url)
    // 文件或目录的头部信息
    fs.stat(abs, (err, stat) => {
        if (err) {
            res.statusCode = 404
            res.end('Not Found')
            return
        }
        // linux 文件和文件夹都是fs 一样的 区别是头部信息 是否是文件
        if (stat.isFile()) {
            // res.setHeader('Expires', new Date(Date.now() + 200000).toGMTString())
            res.setHeader('Cache-Control', 'max-age=20')
            fs.createReadStream(abs).pipe(res)
        }
    })
    // console.log(abs);
    // res.end('hello')
    
})

server.listen(3000)