document.addEventListener('DOMContentLoaded', function(){
    const container = document.querySelector(".container");
    container.innerHTML+=container.innerHTML;

    let scrollAmount = 0;
    const scrollSpeed = 1.8;

    function autoScroll(){
        scrollAmount+=scrollSpeed;
        container.scrollLeft = scrollAmount;

        if(container.scrollLeft >= container.scrollWidth /2){
            scrollAmount = 0;
        }
        requestAnimationFrame(autoScroll);
    }
    authoScroll();
});

document.addEventListener("DOMContentLoaded", function(){
    const container = document.querySelector(".testimonial-container");
    container.innerHTML += container.innerHTML;

    let scrollAmount = 0;
    const scrollSpeed = 0.8;

    function autoScroll(){
        scrollAmount += scrollSpeed;
        container.scrollLeft = scrollAmount;

        if(container.scrollLeft>= container.scrollWidth /2){
            scrollAmount = 0;
        }
        requestAnimationFrame(autoScroll);
    }
    authoScroll();
});