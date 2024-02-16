const express = require('express');
const app = express();
const port = 8081;

//app.use('/static', express.static('public'))
app.use(express.static('public'))
app.listen(port, () => console.log(`listening on port ${port}!`));
console.log("hwllo");
console.log("hwllo");
console.log("hwllo");
console.log("hwllo");
console.log("hwllo");