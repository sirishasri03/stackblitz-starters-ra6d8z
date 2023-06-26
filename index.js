function amazon(num) {
  let numArr=[];

  for( let i=1 ;i<=num ;i++) {
    if(i % 3 == 0 && i % 5 == 0) {
      numArr.push("amazon");
    } else if(i % 3 == 0) {
      numArr.push("google");
    } else if(i % 5 == 0) {
      numArr.push("facebook");
    } else {numArr.push(i)}   
  }
  return numArr;
}
console.log(amazon(100));
