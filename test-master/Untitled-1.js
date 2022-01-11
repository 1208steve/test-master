const readline = require('readline-sync');

var weight = readline.question('請輸入您的體重(kg)?');
if (weight < 60 || weight > 200)
{
    console.log("請輸入正確的體重(kg")
}
var height = readline.question('請輸入您的身高(cm)?');  
if (weight < 80 || weight > 200)
{
    console.log("請輸入正確的身高(cm)");
}