document.addEventListener('DOMContentLoaded', function() {
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
}
