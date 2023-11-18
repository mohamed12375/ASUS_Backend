const fs = require("fs");

// reading
// fs.readFile("./docs/reading",(err,data) =>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data.toString());
// });

//writing
// fs.writeFile("./docs/writing","Hello Girls",(err) =>{
//     if(err){
//         return;
//     }

// });

//Make a folder and delete
// if(!fs.existsSync("./folder")){
//     fs.mkdir("./folder",(err) => {
//         if(err)
//             console.log(err);
//     });
// } else{
//     fs.rmdir("./folder",(err) => {
//         if(err)
//             console.log(err);
//     });
// }

//delete files
if(fs.existsSync("./delete")){
    fs.unlink("./delete",() => {
        
    });
}else{
    fs.writeFile("./delete","gg",() =>{

    })
}