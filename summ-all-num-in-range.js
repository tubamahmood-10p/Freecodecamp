function sumAll(arr) {
var $start = arr[0] < arr[1] ? arr[0] : arr[1];
var $end   = arr[0] > arr[1] ? arr[0] : arr[1];
var $sum=0;
  for (var i=$start ;i<=$end ;i++)

  {
    $sum =i+$sum;
  }e:
  
  return $sum;
}

sumAll([1, 4]);