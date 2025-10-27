/*document.addEventListener('DOMContentLoaded', function() {
    const profileContainer = document.querySelector(".container");

    
    profileContainer.innerHTML += profileContainer.innerHTML; //Here i fixed the duplicate profiles so that there can be an infinite scrolling effect

    let paused = false;
    let profileScroll = 0;           //here i also fixed so there can be separate variables for the profiles
    const profileSpeed = 1.8;

    function scrollProfiles() {

        if(!paused){
        profileScroll += profileSpeed;
        profileContainer.scrollLeft = profileScroll;

        if(profileContainer.scrollLeft >= profileContainer.scrollWidth / 2) {    //this is to make sure that it reset the scrolling when it is reaching the middle
            profileScroll = 0;
        }
    }
        requestAnimationFrame(scrollProfiles);
    }
    profileContainer.addEventListener("mouseenter",() =>{
        paused=true;
    });

    profileContainer.addEventListener("mouseleave", ()=>{
        paused = false;
    })
    scrollProfiles();
});
    document.addEventListener('DOMContentLoaded', function() {
    const testimonialContainer = document.querySelector(".testimonial-container");   
    testimonialContainer.innerHTML += testimonialContainer.innerHTML;      //here same thing as the profile container

    let paused1 =false;
    let testimonialScroll = 0;      //same thing here like the  profile scroll
    const testimonialSpeed = 1.8;
    
   
    function scrollTestimonials() {
        if (!paused1){
        testimonialScroll += testimonialSpeed;
        testimonialContainer.scrollLeft = testimonialScroll;
        
        if(testimonialContainer.scrollLeft >= testimonialContainer.scrollWidth / 2) {   //here same thing as i mentioned in the profile
            testimonialScroll = 0;
        }
    }
    requestAnimationFrame(scrollTestimonials);

    }
    testimonialContainer.addEventListener("mouseenter",() =>{
        paused1=true;
    });

    testimonialContainer.addEventListener("mouseleave", ()=>{
        paused1 = false;
    })

    scrollTestimonials();
});

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}*/




const members = document.querySelectorAll(".item");

let itemsEnteringIndex = 2;
let itemsPrimaryIndex = 1;
let itemsLeavingIndex = 0;

let itemsIntervalID = null;

document.addEventListener("DOMContentLoaded", membersCarousel());

function membersCarousel(){ 
    members[itemsEnteringIndex].classList.add("toEnter");
    members[itemsPrimaryIndex].classList.add("toPrimary");
    members[itemsLeavingIndex].classList.add("toSecondary");
    
    console.log(itemsEnteringIndex);
    console.log(itemsPrimaryIndex);
    console.log(itemsLeavingIndex);

    intervalID = setInterval(nextMember, 10000);
}

function entering(index){
    console.log("entering is called");

    
    enteringIndex = (index + members.length) % members.length;
    
    members.forEach(member => {
        member.classList.remove("reverseSecondary");
        member.classList.remove("toEnter");
    });

    members[enteringIndex].classList.add("toEnter");
}

function primary(index){
    console.log("Primary is called");

    
    primaryIndex = (index + members.length) % members.length;
    
    
    members.forEach(member => {
        member.classList.remove("reverseEnter");
        member.classList.remove("toPrimary");
    });


    members[primaryIndex].classList.add("toPrimary"); 
}

function leaving(index){
    console.log("leaving is called");

    leavingIndex = (index + members.length) % members.length;
    

    members.forEach(member => {
        member.classList.remove("reversePrimary");
        member.classList.remove("toSecondary");
    });

    
    members[leavingIndex].classList.add("toSecondary"); 
}

function notEntering(index){
    console.log("entering is reversed");

    
    enteringIndex = (index + members.length) % members.length;
    
    members.forEach(member => {
        member.classList.remove("toEnter");
        member.classList.remove("reverseSecondary")
    });

    members[enteringIndex].classList.add("reverseSecondary");
}

function notPrimary(index){
    console.log("Primary is reversed");

    
    primaryIndex = (index + members.length) % members.length;
    
    
    members.forEach(member => {
        member.classList.remove("toSecondary");
        member.classList.remove("reverseEnter");
    });


    members[primaryIndex].classList.add("reverseEnter"); 
}

function notleaving(index){
    console.log("leaving is reversed");

    leavingIndex = (index + members.length) % members.length;
    

    members.forEach(member => {
        member.classList.remove("reversePrimary");
        member.classList.remove("toPrimary");
    });

    
    members[leavingIndex].classList.add("reversePrimary"); 
}

function startInterval(){
    clearInterval(intervalID);
    intervalID = setInterval(nextMember, 10000);
}

function prevMember(){

    itemsEnteringIndex--;
    itemsPrimaryIndex--;
    itemsLeavingIndex--;

    notEntering(itemsEnteringIndex);
    notPrimary(itemsPrimaryIndex);
    notleaving(itemsLeavingIndex); 

    startInterval();
}

function nextMember(){
    console.log("next member is calling");
    
    itemsEnteringIndex++;
    itemsPrimaryIndex++;
    itemsLeavingIndex++;

    console.log(itemsEnteringIndex);
    console.log(itemsPrimaryIndex);
    console.log(itemsLeavingIndex);

    entering(itemsEnteringIndex);
    primary(itemsPrimaryIndex);
    leaving(itemsLeavingIndex); 
    
    startInterval();
}


// The testimonial code begins here


const testimonials = document.querySelectorAll(".testimonial");

let testimonialEnteringIndex = 2;
let testimonialPrimaryIndex = 1;
let testimonialLeavingIndex = 0;

let testimonialIntervalID = null;

document.addEventListener("DOMContentLoaded", initializeTestimonies());

function initializeTestimonies(){
    console.log("Testimonies have initialized");
    testimonials[itemsEnteringIndex].classList.add("toEnter");
    testimonials[itemsPrimaryIndex].classList.add("toPrimary");
    testimonials[itemsLeavingIndex].classList.add("toSecondary");

    testimonialIntervalID = setInterval(nextTestimony, 10000);
}

function enteringTestimony(index){

    enteringIndex = (index + testimonials.length) % testimonials.length;
    
    testimonials.forEach(testimony => {
        testimony.classList.remove("reverseSecondary");
        testimony.classList.remove("toEnter");
    });

    testimonials[enteringIndex].classList.add("toEnter");
}
function primaryTestimony(index){
    primaryIndex = (index + testimonials.length) % testimonials.length;
    
    testimonials.forEach(testimony => {
        testimony.classList.remove("reverseEnter");
        testimony.classList.remove("toPrimary");
    });

    testimonials[primaryIndex].classList.add("toPrimary");
}
function leavingTestimony(index){
    leavingIndex = (index + testimonials.length) % testimonials.length;
    
    testimonials.forEach(testimony => {
        testimony.classList.remove("reversePrimary");
        testimony.classList.remove("toSecondary");
    });

    testimonials[leavingIndex].classList.add("toSecondary");
}

function notEnteringTestimony(index){

    enteringIndex = (index + testimonials.length) % testimonials.length;
    
    testimonials.forEach(testimony => {
        testimony.classList.remove("reverseSecondary");
        testimony.classList.remove("toEnter");
    });

    testimonials[enteringIndex].classList.add("reverseSecondary");
}
function notPrimaryTestimony(index){
    primaryIndex = (index + testimonials.length) % testimonials.length;
    
    testimonials.forEach(testimony => {
        testimony.classList.remove("reverseEnter");
        testimony.classList.remove("toSecondary");
    });

    testimonials[primaryIndex].classList.add("reverseEnter");
}
function notLeavingTestimony(index){
    leavingIndex = (index + testimonials.length) % testimonials.length;
    
    testimonials.forEach(testimony => {
        testimony.classList.remove("reversePrimary");
        testimony.classList.remove("toPrimary");
    });

    testimonials[leavingIndex].classList.add("reversePrimary");
}






function startTestimonyInterval(){
    clearInterval(testimonialIntervalID);
    testimonialIntervalID = setInterval(nextTestimony, 10000);
}

function prevTestimony(){
    testimonialEnteringIndex --;
    testimonialPrimaryIndex --;
    testimonialLeavingIndex --;

    notEnteringTestimony(testimonialEnteringIndex);
    notPrimaryTestimony(testimonialPrimaryIndex);
    notLeavingTestimony(testimonialLeavingIndex);

    startTestimonyInterval();
}

function nextTestimony(){
    testimonialEnteringIndex ++;
    testimonialPrimaryIndex ++;
    testimonialLeavingIndex ++;

    enteringTestimony(testimonialEnteringIndex);
    primaryTestimony(testimonialPrimaryIndex);
    leavingTestimony(testimonialLeavingIndex);
    
    startTestimonyInterval();
}
