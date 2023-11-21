/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
//section1 variable
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');

//section list
const sectionList = document.getElementsByTagName('section')

//navbar ul variable
const navbar = document.getElementById('navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


function activeSection(item){
    const itemLocation = item.getBoundingClientRect();

    if(itemLocation.top > 0 && itemLocation.bottom + itemLocation.top <= window.innerHeight){
        return true;
    }
    return false;
  
    }
    



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

//function for event listener

function setActiveSection() {
    for (let i = 0; i < sectionList.length; i++) {
        if(activeSection(sectionList[i])) {
            sectionList[i].classList.add('your-active-class');
    }   else {
            sectionList[i].classList.remove('your-active-class');
        }
    }
}



// build the nav
for(let i = 0; i < sectionList.length; i++) {
    

    let newAnchor = document.createElement('a');
    newAnchor.setAttribute('href', `#section${i+1}`);
    newAnchor.setAttribute('style', 'text-decoration:none; font-size: 1.5rem;');
    newAnchor.setAttribute('id', `nav_${i}`);
    newAnchor.innerHTML = `section ${i+1}`;
    newAnchor.classList.add(`section${i + 1}`);

    let newNavItem = document.createElement('li');
    newNavItem.appendChild(newAnchor);
    
    navbar.appendChild(newNavItem);

}

//style nav links
const navLi = document.querySelectorAll('nav li');
const navATag = document.querySelectorAll('nav li a');


navLi.forEach(function(navItem) {
    navItem.style.margin = '2rem';
    navItem.style.fontSize = '1.25rem';
    
    
})


//set active class and add styling to navbar when section is active

function setNavItemActive () {
    navATag.forEach(function(navItem, index) {
        let w = window.innerWidth;
        //conditional statement checking for screen size
    if (w >= 730){
   
            //checks to see if the class contains yuor active class and adds specific styling
        if(sectionList[index].classList.contains('your-active-class')) {
            navItem.classList.add('active');
            navItem.setAttribute('style', 'border: 2px solid black; padding: 0.75rem; background-color: #452c63; color: white; text-decoration: none; font-size: 1.5rem;')

        }
        //removes styling if link does not correspond to the section within the viewport
        else {
            navItem.classList.remove('active');
            navItem.removeAttribute('style', 'border: 2px solid black; padding: 0.75rem; background-color: #452c63; color: white');
            navItem.setAttribute('style', 'text-decoration: none; font-size: 1.5rem;');
            
        }
} else if(sectionList[index].classList.contains('your-active-class')) {
        navItem.classList.add('active');
        navItem.setAttribute('style', 'border: 1px solid black; padding: 0.15rem; background-color: #452c63; color: white; text-decoration: none; font-size: 1.10rem;')
} else {
        navItem.classList.remove('active');
        navItem.removeAttribute('style', 'border: 2px solid black; padding: 0.75rem; background-color: #452c63; color: white');
        navItem.setAttribute('style', 'text-decoration: none; font-size: 1.10rem;');
}
})


}



function sScroll(e) {
    e.preventDefault();
    
    // Get the index of the clicked navigation item
    const clickedIndex = Array.from(navATag).indexOf(e.target);

    // Scroll to the corresponding section
   
        let smoothSection = sectionList[clickedIndex].getBoundingClientRect().top;
        window.scrollTo({
            top: smoothSection + window.scrollY,
            behavior: 'smooth'
        });
    
}
    
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
// scroll event listener

window.addEventListener('scroll', setNavItemActive)

// Build menu 

// Scroll to section on link click

navATag.forEach((item) => {
    item.addEventListener('click', sScroll)
})

// Set sections as active
window.addEventListener('scroll', setActiveSection)

