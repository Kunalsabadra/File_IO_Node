import {readFile , writeFile}  from 'fs/promises';
import { dirname } from 'path';
const filePath = new URL ('./index.html', import.meta.url);



let contents = await readFile(filePath , {encoding: 'utf-8'});

console.log(contents);

const data = {
     name: "Kunal Sabadra",
     job: "Software Engineer at Google",
     age : 25
}
// /Users/kunal/Desktop/File_IO_Node/Read_File_In_Node
// console.log(Object.entries(data));
// console.log(Object.keys(data));
// console.log(Object.values(data));


for(const[key , value] of Object.entries(data)){
      
      contents = contents.replace(`{${key}}` , value);
}

//replacing the exitisting file content with new content
await writeFile(filePath , contents)

//creating new file and writting content 
await writeFile(new URL('./newIndex.html' , import.meta.url) , contents);

console.log(contents);