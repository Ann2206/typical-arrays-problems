
exports.min = function min (arr) {
  if (typeof arr === 'undefined' || arr.length == 0){
    return 0;
  }else{
    let minimal = arr[0];
    for (let i=0; i<arr.length; i++){
      if(arr[i]<minimal){
        minimal = arr[i];
  }
}
return minimal;
}
}

exports.max = function max (arr) {
  if (typeof arr === 'undefined' || arr.length == 0){
    return 0;
  }else{
  let maximal = arr[0];
  for (let i=0; i<arr.length; i++){
    if(arr[i]>maximal){
      maximal = arr[i];
    }
  }
  return maximal;
}
}

exports.avg = function avg (arr) {
  if (typeof arr === 'undefined' || arr.length == 0){
    return 0;
  }else{
  let sum = 0;
  for (let i=0; i<arr.length; i++){
    sum +=arr[i];
  }
  return (sum/arr.length);
}
}
