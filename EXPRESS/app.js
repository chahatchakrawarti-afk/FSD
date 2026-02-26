const express = require('express');
 const app = express();
 const port = 8004;

app.get('/', (req, res) => {
    res.send(`
         <h1>This is my first server</h1>
         <img src="https://image-static.collegedunia.com/public/college_data/images/logos/1587463140logo.jpeg?h=71.7&w=71.7&mode=stretch" alt="ABES Logo" width="200">
     `);
 });

// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });

const student = [
    {
        id: 1,
        name: "arvind",
        class: "B.Tech",   // quotes ke saath likhna best practice hai
    },
    {
        id: 2,

        name: "ashwin",
        class: "MCA",
    }
];

app.get('/read', (req, res) => {
  try{
    res.status(200).json({message: "show all data", data: student});
  }
  catch (error){
    res.status(500).json({message: "student data not found", error: error.message});
  }
});
// data read for id
app.get('/read/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const studentData = student.find((s) => s.id === id);

        if (!studentData) {
            return res.status(404).json({ message: "student data not found" });
        }

        res.status(200).json({ message: "student data found", data: student });
    } catch (err) {
        res.status(500).json({ message: "internal server error", error: err.message });
    }
});

// data create(C)
app.post('/add', (req, res) => {
    try{
        const newstudent = {
            id:student.length + 1, // auto increment id
            ...req.body
        };
        student.push(newstudent);
        res.status(201).json({message: "student added successfully", data: newstudent});
    }
    catch(error){
        res.status(500).json({message: "error adding student", error: error.message});
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});