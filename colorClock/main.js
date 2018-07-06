const clock = document.querySelector('.clock')
const bc = document.querySelector('.bc')
setInterval(()=>{
    let date = new Date()
    let r = Math.floor(Math.random()*20)
    let g = Math.floor(Math.random()*20)
    let b = Math.floor(Math.random()*20)
    clock.innerHTML = date.toLocaleTimeString()
    bc.innerHTML = document.body.style.backgroundColor
    document.body.style.background = '#'+r+g+b
},1000)