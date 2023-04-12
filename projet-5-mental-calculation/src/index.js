import main from "./main.js"

export default function init() {
    let canvas = document.getElementById("demoCanvas")
    let stage = new createjs.Stage(canvas)
    createjs.Touch.enable(stage);
    stage.enableMouseOver()

    main(stage)
}

function resize() {
    let canvas = document.getElementById("demoCanvas")
    let minSize = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth 
    var size = minSize / 2;
    var ratio = canvas.width / canvas.height;

    let w, h;
    if(window.innerHeight < window.innerWidth) {
        w = size * ratio;
        h = size
    } else {
        h = size * ratio;
        w = size
    }
    

    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
  }
  

window.addEventListener('load', init)
window.addEventListener('resize', resize)

// export function animate(){
//     for(let i in containerc){
//         if(shapes[i].animation){
//             let posx, posy, val, changeDirection;

//             posx = shapes[i].x - shapes[i].diametre
//             posy = shapes[i].y - shapes[i].diametre
//             val = shapes[i].diametre*2
//             changeDirection = ((posx < 0)||(posx > 1200 - val)||(posy < 0)||(posy > 700 - val))

//             switch(shapes[i].direction){
//                 case 1:
//                     if(shapes[i].clique){
//                         shapes[i].valdir += 10
//                     }
//                     else if(changeDirection){
//                         shapes[i].valdir = shapes[i].valdir*(-1)
//                         // shapes[i].direction = getRandomIntInclusive(1,4)
//                     }
//                     shapes[i].y += shapes[i].valdir;
//                     break;
//                 case 2:
//                     if(shapes[i].clique){
//                         shapes[i].valdir += 10
//                     }
//                     else if(changeDirection){
//                         shapes[i].valdir = shapes[i].valdir*(-1)
//                         // shapes[i].direction = getRandomIntInclusive(1,4)
//                     }
//                     shapes[i].x += shapes[i].valdir;
//                     break;
//                 case 3:
//                     if(shapes[i].clique){
//                         shapes[i].valdir += 10
//                     }
//                     else if(changeDirection){
//                         shapes[i].valdir = shapes[i].valdir*(-1)
//                         // shapes[i].direction = getRandomIntInclusive(1,4)
//                         shapes[i].direction = getRandomIntInclusive(3,4)
//                     }
//                     shapes[i].x += shapes[i].valdir;
//                     shapes[i].y += shapes[i].valdir;
//                     break;
//                 case 4:
//                     if(shapes[i].clique){
//                         shapes[i].valdir += 10
//                     }
//                     else if(changeDirection){
//                         shapes[i].valdir = shapes[i].valdir*(-1)
//                         // shapes[i].direction = getRandomIntInclusive(1,4)
//                         shapes[i].direction = getRandomIntInclusive(3,4)
//                     }
//                     shapes[i].x += shapes[i].valdir;
//                     shapes[i].y += shapes[i].valdir*(-1);
//                     break;
//             }                
//         }
//     }
// }