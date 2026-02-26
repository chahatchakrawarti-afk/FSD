// const http=require('http');
// const { DefaultDeserializer } = require('v8');

// const myserver = http.createServer((req, res)=>{

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

   /* if(req.url=='/home'){
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
// })*/
// myserver.listen(8000,()=> console.log('server is run'));

//const fs = require('fs');
//fs.writeFileSync("./cse-c.txt", "this is cse c branch");
//const result = fs.readFileSync("./cse-c.txt", "utf-8");
//console.log(result);
const fs = require('fs');

fs.readFile("./cse-c.txt", "utf-8", (err, data) => {

    if (err) {
        console.log("Error aa gaya:", err);
        return;
    }

    console.log(data);
});

console.log("Ye pehle print hoga (Async ka proof)");

//fs.appendFileSync("./a.txt",'good')
fs.cpSync("./a/txt","./b.txt");

