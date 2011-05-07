function removeChars(element, index, array) {
    return (element !== "**");
}

var charSet = new Array("**", "bb", "cd", "**", "cc", "**", "dd", "**");

var newArray = charSet.filter(removeChars);
print(newArray);

Array.prototype.myfilter = function (fun) {
    var len = this.length >>> 0;
    if (typeof fun != "function") {
        throw new TypeError();
    }

    var res = new Array();
    var thisp = arguments[1];

    for (var i = 0; i < len; i++) {
        if (i in this) {
            var val = this[i];
            if (fun.call(thisp, val, i, this)) {
                res.push(val);
            }
        }
    }

    return res;
};

newArray = charSet.myfilter(function (element, index, array){
    if (typeof element != "string") {
        return false;
    }

    return element.match(/c/);
});


print(newArray);
