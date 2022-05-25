
let slideImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('.arrow-left'),
    arrowRight = document.querySelector('.arrow-right'),
    thumbsUp = document.querySelector('.thumbs-up'),
    thumbsDown = document.querySelector('.thumbs-down'),
    input1 = document.querySelector('.input1'),
    input2 = document.querySelector('.input2'),
    counter = 0,
    current = slideImages.length;

function reset(){
    for (let i=0; i < slideImages.length; i++) {
        slideImages[i].style.display = 'none';
    }
}

function slideInit(){
    reset()
    slideImages[0].style.display = 'block';
}

function swipeRight(){
    reset()
    slideImages[counter].style.display = 'block';
}
arrowRight.addEventListener('click',()=>{
    if(counter < slideImages.length - 1){
        counter++;
    }else{
        counter = 0;
    }
    swipeRight()
})


function swipeLeft(){
    reset();
    slideImages[current].style.display = 'block';
}

arrowLeft.addEventListener('click',()=>{
    if (current > 0) {
         current--
    }else{
        current = slideImages.length - 1;
    }
    swipeLeft()
})


slideInit();




// like button

thumbsUp.addEventListener('click',()=>{
    input1.value = parseInt(input1.value) + 1;
})

thumbsDown.addEventListener('click',()=>{
    input2.value = parseInt(input2.value) + 1;
})

