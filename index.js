

const userInformation = require('./information');
console.log(userInformation.user);

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `${userInformation.name} ${userInformation.campus}`,
    e : "oO",
    T : "U "
}));