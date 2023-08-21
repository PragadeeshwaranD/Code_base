function Load(){
var a=prompt("Review the app");

if(a==5){
    alert("Its have some fun");
}else if(a==4){
    alert("Thanks of ranking");
}else if(a==3){
    var b=prompt("Tell some feedback");
    alert("Thanks of ranking"+" "+b);
}else if(a==2){
    alert("We try to improve our services");
}else if(a==1){
    alert("Try next one");
    alert("https://www.w3schools.com/")
}else{
    alert("please enter one to five");
}
}

export default Load;