const express = require("express");
const app = express();
app.use(express.static(__dirname + "/shintoCoinAngular/dist/shintoCoinAngular"));
app.get("*", function(req, res) {
    res.sendFile(__dirname + "/shintoCoinAngular/dist/shintoCoinAngular/index.html");
});
app.listen(8000);