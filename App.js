const express = require("express")

let app = express()

app.get("/numbers", (req,res) => {

	let numbers = ""
	for(let i=0; i<=100;i++){
		numbers += i + " _ ";
	}

res.send(`numbers:${numbers}`);
});


app.get("/mahmoud", (req,res) => {
	res.sendfile(mahmoud"")
});

app.post("/addcomment",(req,res) => {
	res.send("add comment")
});

app.listen(3000, () =>{

	console.log("yes im listening in port 3000")
});
