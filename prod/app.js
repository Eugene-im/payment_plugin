const http = require("http");
const express = require("express");
const app = express();
const fs = require("fs");

app.use("/js", express.static(__dirname + "/js"));
app.use("/css", express.static(__dirname + "/css"));

http.createServer(app).listen(9000);

app.get("/*", function(req,res){
	console.log(req.url);
		let filePath = req.url.substr(1);
		fs.readFile(filePath, function(error, data) {
			if (error) {
				console.log(error);
				console.log(req.url);
			} else {
				res.end(data);
			}
		})
});