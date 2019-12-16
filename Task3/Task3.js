var colors=['red','blue','green']
document.write('<h3>'+'Before Upadated'+'</h3>')
document.write(colors[0] +'<br>')
document.write(colors[1] +'<br>')
document.write(colors[2] +'<br>')
var updatecolor=prompt('enter color you want to add at top of the list')
colors.unshift(updatecolor)
document.write('<h3>'+'After Add color at add of the list'+'</h3>')
document.write(colors +'<br>')


var updatecolor1=prompt('enter color you want to add at bottom of the list')
colors.push(updatecolor1)
document.write('<h3>'+'After Add color at end of the list'+'</h3>')
document.write(colors +'<br>')

var addcolor1=prompt('enter first color to the beginning of the list')
var addcolor2=prompt('enter  second color to the beginning of the list')
colors.unshift(addcolor1)
colors.unshift(addcolor2)
document.write('<h3>'+'After Add color to the beginning of the list'+'</h3>')
document.write(colors +'<br>')

colors.shift(colors[0])
document.write('<h3>'+'After delete the first color of the list'+'</h3>')
document.write(colors +'<br>')

colors.pop(colors[5])
document.write('<h3>'+'After delete the last color of the list'+'</h3>')
document.write(colors +'<br>')

var index=prompt('At which specific index you want to add color')
var addcolor3=prompt('Enter color name you wnt to add ')
document.write('<h3>'+'After Add color on specific position'+'</h3>')
colors.splice(index,0,addcolor3)

document.write(colors +'<br>')



