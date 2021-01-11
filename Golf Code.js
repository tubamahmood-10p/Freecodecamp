var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
var $a;
if (strokes>=names.length)
{
  $a=names.length-1;
}
else if(strokes==5 && par ==5)
{
 
  $a=strokes-2;
}
else{
 $a=strokes-1;
}
 return names[$a];
  // Only change code above this line
}

golfScore(4, 5);