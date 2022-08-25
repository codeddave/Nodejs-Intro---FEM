import fs from "fs/promises";
/* 
commonjs module implementation, you don't get access to __dirname or filename if not using commonjs
import path from "path"
const template1 =  await fs.readFile(path.join(__dirname, "template.html")) */

const template = await fs.readFile(new URL("template.html", import.meta.url));
//Generates a buffer, can be converted to a string with a .toString method
