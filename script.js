let topic = 'Frontend Animation'
let name = 'by Akande Temitope'


function live(){
let colorBox = document.querySelector('.first') 
colorBox.innerHTML = ''
colorBox.style.cssText = 'display:block;margin:0px 20px;padding:50px' 
colorBox.style.backgroundColor = randomRGBColor()
let colorBox1 = document.createElement('div')
colorBox1.style.cssText = 'display:flex;flex-flow:wrap;background-color:#bb6a65;justify-content:center'
let colorBox2 = document.createElement('div')
colorBox2.style.cssText = 'display:flex;flex-flow:wrap;justify-content:center'
colorBox.appendChild(colorBox1)
colorBox.appendChild(colorBox2)

for(i =0; i<topic.length ; i++){
 let text = document.createElement('div')
if (topic[i] == ' '){text.style.cssText = 'margin-right:25px;margin-left:10px;width:5px;height:5px'}
text.innerHTML = topic[i]
text.style.color = randomRGBColor()
//text.style.opacity = randomOpacity()
colorBox1.appendChild(text)}

for(i =0; i<name.length ; i++){
    let text = document.createElement('div')
   if (name[i] == ' '){text.style.cssText = 'margin-right:25px;margin-left:10px;width:5px;height:5px'}
   text.innerHTML = name[i]
   text.style.color = randomRGBColor()
   //text.style.opacity = randomOpacity()
   colorBox2.appendChild(text)}

return colorBox}


function randomRGBColor(){
let x = Math.round(Math.random()*255)
let y = Math.round(Math.random()*255)
let z = Math.round(Math.random()*255)
let color ='RGB(a,b,c)'
let colorr = color.replace('a',x)
let colorrr = colorr.replace('b',y)
let colorrrr = colorrr.replace('c',z)
return colorrrr}
function randomOpacity(){
return Math.random()}

setInterval(live,3000)


const HexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]}
    return '#' + color}

let Box = document.querySelector('.second') 
Box.style.cssText = 'display:flex;margin:20px;flex-wrap:wrap;width:100%'

  for(let i=0;i<32;i++){
let fine = document.createElement('div')
  let colorrr = HexaColor()
fine.style.cssText='font-size:18px;cursor:pointer;margin:2px;width:100px;height:70px;text-align:center;line-height:70px'
fine.style.backgroundColor = colorrr
fine.innerHTML = colorrr
Box.appendChild(fine)}