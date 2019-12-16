var numbers=[1,2,3,2,4,6,'a','a','b','c']
document.write(numbers.filter((item,index) => numbers.indexOf(item) == index))
