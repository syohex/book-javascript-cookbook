function convertToHex(element, index, array) {
    return element.toString(16);
}

var decArray = new Array(23, 255, 122, 5, 16, 99);

var hexArray = decArray.map(convertToHex);
print(hexArray);

Array.prototype.mymap = function (fun) {
    var len = this.length >>> 0;

    if (typeof fun != 'function') {
        throw new TypeError();
    }

    var res = new Array(len);
    var thisp = arguments[1];

    for (var i = 0; i < len; i++) {
        if (i in this) {
            res[i] = fun.call(thisp, this[i], i, this);
        }
    }

    return res;
}

var appleArray = decArray.mymap(function (element, index, array) {
    return element + "りんご";
});

print(appleArray);
