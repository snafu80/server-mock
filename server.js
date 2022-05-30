const http = require('http') 
const fs = require('fs') 
const url = require('url')



const server = http.createServer((req,res)=>{
    let urlObj=url.parse(req.url)

    if(urlObj.path==='/getWeather'){
        res.end(JSON.stringify({data: '晴'}))
    }else{
        res.end(fs.readFileSync(__dirname + '/demo.html'))
    }
    
})

server.listen(8888)