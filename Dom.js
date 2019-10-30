document.querySelector('button').addEventListener('click', function(e){
    e.target.textContent = 'Button di klik!'
    const newP = document.createElement('p')
    newP.textContent = 'Baris baru'
    document.querySelector('body').appendChild(newP)
})

document.querySelector('#buttonA').addEventListener('click', function(){
    a = (document.querySelector('#a'))
    if(a == null){
        a = document.createElement('h1')
        a.textContent = 'My Apps'
        a.id = "a"
        document.querySelector('#header').appendChild(a)
    }
    else{
        document.querySelector('#a').remove()
    }
})

document.querySelector('#buttonB').addEventListener('click', function(){
    a = (document.querySelector('#b'))
    if(a == null){
        a = document.createElement('h2')
        a.textContent = 'My Apps at H2'
        a.id = "b"
        document.querySelector('#subheader').appendChild(a)
    }
    else{
        document.querySelector('#b').remove()
    }
})

