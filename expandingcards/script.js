const panels = document.querySelectorAll('.panel')

//console.log(panels[0])... cos arrays are 0 index

//forEach() is a higher order array method


panels.forEach((panel) =>{  //add an event listener so that when we click it something happens
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
}) 

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}