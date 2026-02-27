const http=require('http');
const { DefaultDeserializer } = require('v8');

const myserver = http.createServer((req, res)=>{

  /*  if(req.url=='/'){
        res.end('this is home page');
    }
    else if(req.url=='/about'){
        res.end('this is about us page');

    }
    else{
        res.end('404 page is not found');
    }
        */

    if(req.url=='/home'){
        res.end('ABES engineering college');
    }
    else if(req.url=='/about'){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<img src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/c9871dcb-2d7f-49c5-87c5-35378854556f.png"></img>`);

    }
    else if(req.url=='/contact us'){
        res.end('this is my phone number');

    }
    else{
        res.end('404 page is not found');
    }
})
myserver.listen(8000,()=> console.log('server is run'));
