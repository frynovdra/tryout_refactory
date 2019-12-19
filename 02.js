const grade = prompt("Masukan nilai : " , 0);
                     
switch (true) {
  case grade >= 90:
    console.log("Input : " + grade);
    console.log("Output : A");
    break;
  case grade >= 80:
    console.log("Input : " + grade);
    console.log("Output : B");
    break;
  case grade >= 70:
    console.log("Input : " + grade);
    console.log("Output : C");
    break;
  case grade >= 60:
    console.log("Input : " + grade);
    console.log("Output : D");
    break;
  default:
    console.log("Input : " + grade);
    console.log("Output : E");
}
