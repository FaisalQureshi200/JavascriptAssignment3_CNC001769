document.write('<h3>'+'Counting:'+'</h3>')
for(var c=1;c<=15;c++){
    document.write('&emsp;'+c)
};
document.write('<br>')
document.write('<h3>'+'Reverse Counting:'+'</h3>')
for(var r=15;r>=1;r--){
    document.write('&emsp;'+r)
}
document.write('<h3>'+'Even Number:'+'</h3>')

var number=2
for(var e=0;e<=20;e++){
    var result=e%number
    if(result==0){
        document.write('&emsp;'+e)
    } 
   }
   document.write('<h3>'+'Odd Number:'+'</h3>')

   var number=2
for(var e=0;e<=20;e++){
    var result=e%number
    if(result !==0){
        document.write('&emsp;'+e)
    } 
   }
   document.write('<h3>'+'Series:'+'</h3>')
   var number=2
for(var e=2;e<=20;e++){
    var result=e%number
    if(result==0){
        document.write('&emsp;'+e+'k')
    } 
   }


 