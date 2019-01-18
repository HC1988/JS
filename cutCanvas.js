/**
 * 裁剪canvas的部分image数据
 * @type {Number}
 */

//要裁剪的位置信息
let startX = 0,startY = 0,endX = 80,endY =80; 
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

//获取具体位置的图片信息
let cutImageData =ctx.getImageData(startX,startY,endX,endY)

//创建新的canvas对象
let cutCanvas = document.createElement('canvas')
cutCanvas.height = endY - startY
cutCanvas.width = endX -startX
let cutCtx = cutCanvas.getContext('2d')

//将裁减信息放到新的canvas对象中
cutCtx.putImageData(cutImageData,0,0)

//转成iamgeData
let imageData = cutCanvas.toDataURL()
