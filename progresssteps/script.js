const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle'); //nodeList


let currentActive = 1; //represents which cirlce is active

next.addEventListener('click', () => {
    currentActive++;
    if(currentActive > circles.length){
      
        currentActive = circles.length;
    }
    update()
})


prev.addEventListener('click', () => {
    currentActive--;
    if(currentActive < 1){ //because we do not want to go into negative values, therefore we set the currentActive to be = 1
        currentActive = 1; 
    }
    update();
})


function update(){ //
    circles.forEach((circle, index) => {
       if(index < currentActive){//check to see if the index of that particular circle is less than the current-active
        circle.classList.add('active')//then add the active class unto it
        
       } else {
        circle.classList.remove('active')
       }

    })  //circles is a nodeList which will be looped through with a forEach array method.

    const actives = document.querySelectorAll('.active')  //to select all the class of active

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';//to handle the progress bar so that not only the circles light up blue, but the lines as well

    if(currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length){
        next.disabled = true
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
