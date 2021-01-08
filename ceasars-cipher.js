function rot13(str) {
var j=[];
var $new;
var str=str.toUpperCase()
var res=  str.split("");
// var res = String.fromCharCode(65);
for (var i = 0; i < str.length; i++) {
  if (res[i].charCodeAt(0)>64 && res[i].charCodeAt(0)<91)
  {
    if((res[i].charCodeAt(0)+13)>90)
    {
      j[i]=String.fromCharCode(res[i].charCodeAt(0)-13);  
    }
    else
    {
      j[i]=String.fromCharCode(res[i].charCodeAt(0)+13);
    }
 }
 else
  {
    j[i] = res[i];
  }
 }

return j.join("");
}

console.log(rot13("SERR PBQR PNZC?"));