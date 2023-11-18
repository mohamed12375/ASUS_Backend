const fs = require("fs");

const readstream = fs.createReadStream("./docs/reading", {encoding: "utf8"});
const writestream = fs.createWriteStream("./docs/writing");

// readstream.on('data',(chunk) =>{
//     writestream.write(chunk);
// })

readstream.pipe(writestream);
