const togglebutton = document.getElementById('toggle-skill') as HTMLButtonElement
const skill = document.getElementById('Skills') as HTMLElement

togglebutton.addEventListener('click' , () => {
    if(skill.style.display ===  'none'){
        skill.style.display = "block"
    } 
    else{skill.style.display = "none"

    }
});

