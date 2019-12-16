var items=["cake", "apple pie", "cookie", "chips", "patties"]
var askitems=prompt('Welcome To our Bakery! What do you want to order sir/Mam')
var isavailable=false
for(var i=0;i<items.length;i++){
    if(items[i]==askitems){
        alert(askitems+' is available at index '+i+' in our bakery')
        isavailable=true
        break;
        
}

}
if(!isavailable){
alert('We are Sorry.'+askitems+' is not available in our bakery')
}
