var count = 0;

function cc(card) {
  // Only change code below this line
switch(card)
{
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count++;
  break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
   count--;
   break

}
// console.log(count);
if (count>=1)
{
  return count+" Bet";
}
else{
  return count+" Hold";
}
  // Only change code above this line
}

cc(2); cc('J'); cc('9'); cc('2'); cc('7');