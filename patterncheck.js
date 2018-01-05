var string = "jeevan";
var string1 = new RegExp("[a-z][0-9]");
if (string1.test(string))
 {
    console.log("Valid");
} else
 {
    console.log("Invalid");
}