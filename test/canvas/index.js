const size = {
  w:600,
  h:600
}
const colorValue = document.querySelector('input').value
const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d')
canvas.width = size.w * window.devicePixelRatio
canvas.height = size.h * window.devicePixelRatio
canvas.style.backgroundColor = '#ffffff';

const shapes = []

class react{
  constructor(x,y,w,h,color){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = colorValue
  }
}

canvas.addEventListener('mousedown',(e) => {
  console.log(e.offsetX,e.offsetY)

})
canvas.addEventListener('mousemove',(e) => {
  console.log(e.offsetX,e.offsetY)
})
