const li = Array.from(document.querySelectorAll('[type=checkbox]'))
li.forEach((item) => {
    item.addEventListener('click', function(){
        let parent = this.parentNode
        parent.classList.toggle('done')
        if(parent.classList == 'done'){
            this.setAttribute('title','mark as not done')
        }
        else{
            this.setAttribute('title','mark as undone')
        }
    })
})

function add(){
    let ul = document.querySelector('ul')
    let task = document.querySelector('#todoTask').value
    const append = ul.appendChild(document.createElement('li'))
    append.innerHTML = '<input type="checkbox"> '+task
}