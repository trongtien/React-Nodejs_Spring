let capitalize = (str) => {
    var strArr = str.split(" ");
    for (var i = 0; i < strArr.length; i++) {
        var charArr = strArr[i].split("");
        charArr[0] = charArr[0].toUpperCase();
        strArr[i] = charArr.join("");

    }
    return strArr.join(" ");
}

module.exports = {
    capitalize: capitalize
}



