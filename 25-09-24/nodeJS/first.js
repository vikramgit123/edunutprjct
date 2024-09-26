const os=require("os");

var freememory=os.freemem();
var totalmem=os.totalmem();

console.log(totalmem +"  "+freememory);
var name="vaagdevi"
console.log("Hello"+ name);
console.warn("danger $(name)! Danger!");

console.assert(true, "does nothing");
console.assert(false,"whoops %s work","didn't");
console.error("this is an error msg");

