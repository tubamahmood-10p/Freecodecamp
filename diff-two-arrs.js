function diffArray(arr1, arr2) {
  var newArr = [];
  var $counter=0;
 
  for (var i=0;i<arr2.length;i++)
  {
    if(arr1.includes(arr2[i]))
    {
    }
    else{
    newArr[$counter]=arr2[i];
      $counter++;
    }
  }
  for (var i=0;i<arr1.length;i++)
  {
    if(arr2.includes(arr1[i]))
    {
    }
    else{
    newArr[$counter]=arr1[i];
      $counter++;
    }
  }
  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3,5], [1, 2, 3, 4, 5]);