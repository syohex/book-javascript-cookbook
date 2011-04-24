var name = "Syohei Yoshida";
var re   = /^(\w+)\s(\w+)$/;
var newname = name.replace(re, "$2 $1");

print(newname);
