var a = [10,20,4,40,60,70,1,2,3,4]
var b = [1,2,3,4,5,6,7,8,9,10]
var numbers=a.concat(b)
document.write(numbers.filter((item,index)=> numbers.indexOf(item) == index))



