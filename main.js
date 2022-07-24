console.log(`
Вёрстка валидная +10
Вёрстка семантическая +20
Вёрстка соответствует макету +48
Требования к css + 8
Интерактивность, реализуемая через css +20
Итого:96
`)
const reset = () =>{
    images[0].className = 'img-1 slider-transition'
    images[1].className = 'img-2 slider-transition'
    images[2].className = 'img-3 slider-transition'
}

const dotActive = () => {
    console.log(images[1])
    if(images[1].src === 'https://illyaillya.github.io/rsschool-cv/images/japan.jpg') {
        dot[1].className='dot active';
        dot[0].className='dot';
        dot[2].className='dot';
    } 
    if(images[0].src === 'https://illyaillya.github.io/rsschool-cv/images/japan.jpg') {
        dot[0].className='dot active';
        dot[1].className='dot';
        dot[2].className='dot';
    } 
    if(images[2].src === 'https://illyaillya.github.io/rsschool-cv/images/japan.jpg') {
        dot[2].className='dot active';
        dot[0].className='dot';
        dot[1].className='dot';
    }
}

const dotActiveMobil = () => {
    
    if(i === 0) {
        dot[1].className='dot active';
        dot[0].className='dot';
        dot[2].className='dot';
    } 
    if(i === 1) {
        dot[0].className='dot active';
        dot[1].className='dot';
        dot[2].className='dot';
    } 
    if(i === 2) {
        dot[2].className='dot active';
        dot[0].className='dot';
        dot[1].className='dot';
    }
}



let imageLeft = document.querySelector('.img-1');
let imageCenter = document.querySelector('.img-2');
let imageRight = document.querySelector('.img-3');
let images = document.querySelectorAll('.sl');
let dot = document.querySelectorAll('.dot');
images.forEach(x => console.log(x.src))





imageLeft.addEventListener('click', () => {
    
    reset()    
    imageCenter.style.transform = 'translate(107%, 0)';
    //imageRight.style.transform = 'translate(-215%, 0)';
    imageLeft.style.transform = 'translate(107%, 0)'; 
    
    
    setTimeout(() => {

        
        
        [imageRight.src, imageLeft.src, imageCenter.src] = [imageCenter.src, imageRight.src, imageLeft.src]; 
        images[0].className = 'img-1'
        images[1].className = 'img-2'
        images[2].className = 'img-3'
        
        imageCenter.style.transform = '';
        imageRight.style.transform = '';
        imageLeft.style.transform = '';  

        dotActive()
        
        
        
        //(images[0] === 'http://127.0.0.1:5500/images/Rectangle23.jpg') ? dot[0].className='dot active' : 0;
        //(images[1] === 'http://127.0.0.1:5500/images/usa.jpg') ? dot[2].className='dot active' : 0;

        
        
    },1000);        
    
})

imageRight.addEventListener('click', () => {
    reset()
    imageCenter.style.transform = 'translate(-107%, 0)';
    imageRight.style.transform = 'translate(-107%, 0)';
    //imageLeft.style.transform = 'translate(215%, 0)'; 
    
    setTimeout(() => {
        
        
        [imageRight.src, imageLeft.src, imageCenter.src] = [imageLeft.src, imageCenter.src, imageRight.src]; 
        images[0].className = 'img-1'
        images[1].className = 'img-2'
        images[2].className = 'img-3'
        
        imageCenter.style.transform = '';
        imageRight.style.transform = '';
        imageLeft.style.transform = '';
        
        dotActive()
        
    },1000);    
    
    
})


const lSlider = document.querySelector('.left-mobil');
const rSlider = document.querySelector('.right-mobil');
const slMomil = document.querySelector('.slider-mobil');
let i = 0;

lSlider.addEventListener('click', () => {
    dotActiveMobil()   
    slMomil.classList.add('fade') 
    const arrImg = [imageRight.src,imageCenter.src,imageLeft.src];
    if(i<3) {
        slMomil.style.backgroundImage = `url('${arrImg[i]}')`;
        i++;
    }  
    if(i===3){
        i=0;
    } 
    setTimeout(() => slMomil.classList.remove('fade') , 700)
    
    
})

rSlider.addEventListener('click', () => {
    dotActiveMobil();
    slMomil.classList.add('fade')     
    const arrImg = [imageRight.src,imageCenter.src,imageLeft.src];
    if(i>=0) {
        slMomil.style.backgroundImage = `url('${arrImg[i]}')`;
        i--;
    }   
    if(i<0){
        i=2;
    } 
    setTimeout(() => slMomil.classList.remove('fade') , 700)
})



document.addEventListener('click', () => {
    reset()    
    imageCenter.style.transform = 'translate(107%, 0)';
    //imageRight.style.transform = 'translate(-215%, 0)';
    imageLeft.style.transform = 'translate(107%, 0)';
        
        [imageRight.src, imageLeft.src, imageCenter.src] = [imageCenter.src, imageRight.src, imageLeft.src]; 
        images[0].className = 'img-1'
        images[1].className = 'img-2'
        images[2].className = 'img-3'
        
        imageCenter.style.transform = '';
        imageRight.style.transform = '';
        imageLeft.style.transform = '';  

        dotActive()  
     
})


const loginBtn = document.querySelector('.login');
const loginForm = document.querySelector('.login-form')


loginBtn.addEventListener('click', () => {
    loginForm.classList.add('visible')
    console.log(loginForm );
   
}, {once:true})


const valBtn = document.querySelector('.value-submit')
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cont = document.querySelector('body')



valBtn.addEventListener('click', () => {
    
    alert(' E-mail: ' + email.value +'\n' + ' Password: ' + password.value)
})

cont.addEventListener('click', (e) => {  
    e.stopPropagation();
    if(e.target.className === 'login-form visible' || e.target.className ==='login') {
        loginForm.classList.add('visible')
    } else if(e.target.getAttribute('name')!=='in-form'){
        loginForm.classList.remove('visible')
    }
})



    


