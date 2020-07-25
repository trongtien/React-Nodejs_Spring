const passport = require("./passport");
const { request } = require("../app");

const bcrypt = require('bcrypt')


let capitalize = (str) => {
    var strArr = str.split(" ");
    for (var i = 0; i < strArr.length; i++) {
        var charArr = strArr[i].split("");
        charArr[0] = charArr[0].toUpperCase();
        strArr[i] = charArr.join("");

    }
    return strArr.join(" ");
}

let checkPassword = (userPassword, requestPassword) => {
    let statusCheck = bcrypt.compareSync(userPassword, requestPassword)
    return statusCheck
}

module.exports = {
    capitalize: capitalize,
    checkPassword: checkPassword
}



