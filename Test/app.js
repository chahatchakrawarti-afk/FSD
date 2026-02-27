const express=require('express');
const app=express();
const port=8006;
//create data base(json)

    const students =[
   { id: 1,
    name: "Dr Aditya",
    class:"Postdoc"
   },
    { id: 2,
    name: "Dr Suhani",
    class:"12"
   }
]
//create read API(R)
app.get('/read',(req,res)=>{
    try{
        res.status(200).json({message:"show all data",students})

    }
    catch(err){
        res.status(500).json({message:"can not read student detail",error:err.message})
    }
})

app.get('/',(req,res)=>{
    res.send("this is my first page");
})

app.listen(port, () =>{
    console.log(`server is run at: http://localhost:${port}`);
})
app.get('/about',(req,res)=>{
    res.send("this is my about page");
})