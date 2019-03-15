function calc(){
	
	var a=parseInt(document.querySelector("#value1").value);
	var b=parseInt(document.querySelector("#value2").value);
	var opet=document.querySelector("#operator").value;
var calculate;

if (opet=="Add") {
	calculate=a+b;
}
else if (opet=="Min") {
	calculate=a-b;
}
	else if (opet=="Multiply") {
	calculate=a*b;
}
else if (opet=="Divide") {
	calculate=a%b;
	}
console.log(calculate);
document.querySelector("#result").innerHTML=calculate;

}