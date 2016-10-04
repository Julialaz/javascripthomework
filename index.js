var a=Number(prompt("Please enter value a"));
var b=Number(prompt("Please enter value b"));
var c=Number(prompt("Please enter value c"));

var x,x1,x2;
var d=Math.pow(b,2)-4*a*c;

if (d<0) 
{document.writeln("No roots");
} 
if (d===0); 
{2*a*x+b===0; 
x=-b/(2*a);
document.writeln(x);}
if (d>0);
{var x1=(-b+Math.sqrt(d))/(2*a);
var x2=(-b-Math.sqrt(d))/(2*a);
document.writeln(x1);document.writeln(x2)}





