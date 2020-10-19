console.log("I'm ready!");
const hacker1 = "Milena";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Franck';
console.log(`The navigator's name is ${hacker2}`);
if(hacker1.length > hacker2.length){
  console.log(`hacker1 has the longest name with ${hacker1.length} characters`);
} else if(hacker1.length < hacker2.length) {
  console.log(`hacker2 has the longest name with ${hacker2.length} characters`);
} else {
  console.log (`They both have equality long names, ${hacker1.length} characters`);
}
console.log(hacker1.toUpperCase());
let hackerUpperCase = hacker1.toUpperCase();

let upperCase = hackerUpperCase.split("").join(" ");
console.log(upperCase);

let finalString = "";
for(let i =  0 ; i < hackerUpperCase.length; i++ ){
  const letter = hackerUpperCase[i];
  finalString += `${letter} `
}
console.log(finalString);

let reverse = hacker2.split("").reverse("").join("");
console.log(reverse);

if (hacker1 > hacker2){
  console.log("The driver's name goes first");
}else  if (hacker2 > hacker1){
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

let paragraph = "Quisque ultrices felis libero. Nunc vehicula volutpat leo, sed consequat arcu porta eget. Vivamus quis turpis imperdiet, mattis neque at, rhoncus sapien. Vestibulum tristique risus id augue auctor, a euismod orci vehicula. Nam ligula est, vehicula quis quam laoreet, dapibus auctor lorem. Ut ante nunc, rhoncus laoreet tempus ac, auctor ultricies metus. Quisque hendrerit iaculis nunc in sagittis. Fusce at tellus est. Integer fermentum ante et nisi iaculis ullamcorper. Nullam vitae euismod libero. Donec gravida, enim quis tempus pellentesque, nibh nibh efficitur est, finibus placerat enim sapien ac eros. Suspendisse molestie pretium augue, ut mattis elit feugiat sagittis. Fusce mollis tempus sapien sed maximus. Donec dapibus ac nisl eu ultricies. Proin vitae erat nec sem pretium dictum.Pellentesque euismod libero non elit efficitur efficitur id vitae arcu. Morbi et accumsan arcu, et consequat sem. Fusce et nulla augue. Curabitur fringilla porttitor ex, et pellentesque mauris ullamcorper nec. Praesent sit amet libero dui. Phasellus tempor lacus nec mi maximus sollicitudin. Nulla scelerisque eros in elementum scelerisque. Nam quis rutrum nisi, vitae luctus eros. Cras ac fringilla odio. Morbi quis aliquet leo. Cras non eros urna. Duis vel ligula fermentum, consectetur lectus vitae, semper diam. Etiam semper, elit a blandit mattis, massa justo facilisis massa, et eleifend risus augue nec quam. Mauris facilisis finibus libero. Nullam semper bibendum lacus, a sodales nibh condimentum ut. Ut ut interdum ligula. Phasellus euismod magna enim, sed tincidunt turpis iaculis sed. Nam tempus, tellus ac elementum accumsan, augue velit interdum odio, sit amet bibendum justo tortor et sapien. Nunc id ex vitae diam consequat tempus vitae a urna. Suspendisse ornare facilisis malesuada." ;

console.log(paragraph.split("").length);
console.log(paragraph.split("et").length);
