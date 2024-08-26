import {readFile}  from 'fs/promises';
const filePath = new URL ('./index.html' , import.meta.url);

let contents = await readFile(filePath , {encoding: 'utf-8'});

console.log(contents);

const data = {
     name: "Kunal Sabadra",
     job: "Software Engineer at Google",
     age : 25
}

// console.log(Object.entries(data));
console.log(Object.keys(data));
console.log(Object.values(data));


for(const[key , value] of Object.entries(data)){
      
      contents = contents.replace(`{${key}}` , value);
}

console.log(contents);