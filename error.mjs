import { readFile } from "fs";

/* 
Error handling with callbacks
readFile(new URL("appss.mjs", import.meta.url), "utf-8", (err, data) => {
  if (err) {
    //handle the error
    //throw err
    // console.error(err);
  } else {
  }
});
 */

try {
  const test = await readFile(new URL("app.mjs", import.meta.url), "utf-8");
  console.log(test);
} catch (error) {
  console.log(error);
}
