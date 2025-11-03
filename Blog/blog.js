/*const container = document.querySelector(".container");
const item = document.querySelector(".item");
const profileWidth = item[0].offsetWidth +40;
let currentindex = 0;

container.style.transform = 'translateX(0px)';
function moveContainer(){
    const newPosition = -currentindex*profileWidth+(window.innerWidth/2)-(profileWidth/2);
    
}



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
});*/
/*LUYANDA'S JS*/
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

/*
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
*/
/*CODESSA'S JS*/

document.addEventListener('DOMContentLoaded', function() {
    const profileContainer = document.querySelector(".container");
    let profileScroll = 0;
    const profileSpeed = 0.5;
    let pausedProfiles = false;

    function scrollProfiles() {
        if (!pausedProfiles) {
            profileScroll += profileSpeed;
            profileContainer.scrollLeft = profileScroll;

            if (profileContainer.scrollLeft >= profileContainer.scrollWidth - profileContainer.clientWidth) {
                profileScroll = 0;
            }
        }
        requestAnimationFrame(scrollProfiles);
    }

    profileContainer.addEventListener("mouseenter", () => pausedProfiles = true);
    profileContainer.addEventListener("mouseleave", () => pausedProfiles = false);
    scrollProfiles();

    const leftBtn = document.querySelector(".scroll-btn.left");
    const rightBtn = document.querySelector(".scroll-btn.right");
    const scrollAmount = 300;

    leftBtn.addEventListener("click", () => {
        profileContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    rightBtn.addEventListener("click", () => {
        profileContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    const members = {
        developer: {
            name: "Brighton",
            code: "The Developer",
            role: "Chairperson/Founder",
            description: "Mr Brighton known as The Developer is the visionary force behind Cipher Syndicate, seamlessly blending creativity and strategy. Beyond coding, he guides the team with a calm yet magnetic presence, inspiring innovation and precision. Every project he touches carries his hallmark of quality and forward-thinking design, making him the backbone of the Syndicate’s digital vision.",
            specialization: "Full Stack Developer",
            email: "thedeveloper98b@gmail.com",
            phone: "+27 67 922 4886",
            cv: "CVs/Brighton_CV.pdf",
            image: "images/Images/the developer.jpg",
            testimonial: `
            <p>
            At the heart of Cipher Syndicate stands Mr. Brighton, known to many as The Developer ,  the visionary founder and chairperson whose passion for technology and people has shaped the very core of who we are.Cipher Syndicate began as his vision, a space where innovation, creativity, and strategy unite to build powerful digital solutions. Under his guidance, we’ve become more than just a tech startup; we’re a collective of young developers, designers, and thinkers driven to turn ideas into reality.
            </p>
            <p>
            Mr. Brighton doesn’t just lead , he teaches, inspires, and empowers. Through his mentorship, many of us are learning to see technology not just as code, but as a tool for transformation. His belief in youthful potential and his dedication to training the next generation of digital creators have built the strong foundation Cipher Syndicate stands on today.
            </p>
            <p>
            Every project we take on from websites and apps to branding and digital education, carries his influence, precision, creativity and purpose. He is The Developer not only because he builds systems, but because he builds people, possibilities, and progress.His leadership reminds us daily that at Cipher Syndicate, innovation doesn’t start with technology, it starts with vision. And that vision began with him.
            </p>`,
        },
        silentserver: {
            name: "Sambulo Sithole",
            code: "Silent Server",
            role: "Treasurer/Co-Founder",
            description: "Sambulo known as Silent server is the quiet powerhouse of the backend, transforming complex code into seamless systems. His analytical mind thrives on solving problems others might overlook, ensuring every process runs flawlessly. Though reserved, his work speaks volumes, forming the essential engine that keeps the team’s projects alive and efficient.",
            specialization: "Back-end Developer",
            email: "sambulosithole12@gmail.com",
            phone: "+27 69 469 3897",
            cv: "CVs/Sambulo_Sithole CV.pdf",
            image: "images/Images/silent server.jpg",
            testimonial: `
            <p>
            Silent Server, the steady architect of order , calm, precise, and deeply committed to the Syndicate’s vision.Where others see chaos, Silent Server sees systems. His quiet intelligence and disciplined nature bring structure and balance to a fast-paced creative environment. Behind every project’s success, his fingerprints can be found , in the stability of the back-end, the efficiency of operations, and the accuracy of our financial foundation.
            </p>
            <p>
            As a Back-End Developer, he embodies technical mastery. He builds systems that don’t just function, but endure , systems that reflect his belief that great code, like great leadership, is about consistency, clarity, and strength.What makes Silent Server extraordinary isn’t just his skill; it’s his humility. He doesn’t seek the spotlight, yet his work ensures Cipher Syndicate shines. He is the quiet force that transforms vision into structure , the one who makes sure that every creative spark has a stable system to grow within.
            </p>
            <p>
            Silent Server is not only a Co-Founder , he is the backbone of Cipher Syndicate, ensuring that innovation stands on solid ground. His presence reminds us that true power doesn’t always make noise , sometimes, it runs silently, with precision and purpose.
            </p>`
        },
        code01: {
            name: "Tiashen Naidoo",
            code: "Code 01",
            role: "Business Plan/Co-Founder",
            description: "Tiashen known as Code 01 is the  strategist of the backend, balancing meticulous coding with business foresight. He anticipates challenges before they arise, ensuring projects are scalable and robust. With an eye for planning and a steady, focused energy, he strengthens the team both technically and structurally.",
            specialization: "Back-end Developer",
            email: "tiashennaidoo@gmail.com",
            phone: "+27 61 157 0961",
            cv: "CVs/CV - T.Naidoo .pdf",
            image: "images/Images/code01.jpg",
            testimonial: `
            <p>
            Every great vision needs a thinker who can turn ideas into strategy and innovation into structure. At Cipher Syndicate, that mind belongs to Tiashin Naidoo, known across the team as Code 01. 
            </p>
            <p>
            As Co-Founder and the driving force behind business planning, he merges logic, creativity, and vision into one powerful blueprint.Code 01 stands at the intersection of technology and enterprise , a rare individual who codes with precision and thinks with purpose. His back-end development expertise is matched by his business acumen, ensuring that every project the Syndicate undertakes is not only technically sound but strategically positioned for success.
            </p>
            <p>
            He has a way of seeing the bigger picture while never losing sight of the smallest detail. His solutions are structured, scalable, and deeply intentional , reflecting a mindset that believes every line of code should contribute to a greater goal. Under his influence, Cipher Syndicate operates with direction, discipline, and data-driven purpose.
            </p>
            <p>
            Beyond his technical brilliance, Code 01 is a natural collaborator , patient, insightful, and always ready to guide or listen. His ability to translate complex concepts into clear strategies makes him the bridge between vision and execution.
            </p>
            <p>
            He is more than a developer or planner; he is the Strategist , the one who ensures Cipher Syndicate doesn’t just grow, but grows smart. Through his leadership and foresight, Code 01 continues to shape a culture where innovation is guided by intention and success is built by design.
            </p>
            `
        },
        shadowbyte: {
            name: "Thandolwami Mayeza",
            code: "Shadow Byte",
            role: "P.R.O/Marketing",
            description: "Thandolwami known as Shadown Byte infuses every front-end project with creativity and elegance. From pixel-perfect designs to intuitive user experiences, she ensures the Syndicate’s work captivates and engages audiences. Beyond coding, she merges his marketing insight with design, shaping projects that are both functional and visually compelling.",
            specialization: "Front-end Developer",
            email: "ngcongothandolwami@gmail.com",
            phone: "+27 69 995 0039",
            cv: "CVs/thandolwamis cv.pdf",
            image: "images/Images/shadow_byte.jpg",
            testimonial: `
            <p>
            In every great collective, there is someone who gives vision a voice and creativity a pulse , for Cipher Syndicate, that person is Thandolwami Mayeza, known as Shadow Byte. 
            </p>
            <p>
            As the team’s Public Relations Officer and Marketing Lead, she embodies the blend of artistry and innovation that defines the Syndicate’s identity.Shadow Byte has an innate ability to merge storytelling with technology. She doesn’t just design , she communicates. Through her front-end development skills and marketing insight, she ensures that Cipher Syndicate’s digital presence is not only functional but unforgettable. 
            </p>
            <p>
            Every interface she crafts reflects clarity, emotion, and precision , transforming user interaction into meaningful experience.Her creativity extends far beyond visuals. As P.R.O, she builds relationships, strengthens the team’s voice, and connects Cipher Syndicate with the world. Her work reminds us that technology is most powerful when it’s human , when it inspires, informs, and engages.Driven by curiosity and passion, Shadow Byte thrives on learning, adapting, and evolving. She brings energy and authenticity into every project, proving that innovation is not only about what we create, but how we communicate it.
            </p>
            <p>
            She is more than a marketer or developer, she is the storyteller of Cipher Syndicate , the one who transforms concepts into connection, and code into creativity. With Shadow Byte at the forefront, Cipher Syndicate doesn’t just build solutions , it builds experiences that captivate the world.
            </p>
            `
        },
        codessa: {
            name: "Londiwe Afrikander",
            code: "Codessa",
            role: "Administrator",
            description: "Londiwe known as Codessa brings a rare combination of technical expertise and administrative precision. She ensures backend systems are solid while keeping the team organized and aligned. Her problem-solving skills and adaptive thinking make her indispensable, bridging the gap between technical execution and operational excellence.",
            specialization: "Back-end(FS) Developer",
            email: "londiwehopea@gmail.com",
            phone: "+27 83 502 7012",
            cv: "CVs/CODESSA CV.pdf",
            image: "images/Images/codessa.jpg",
            testimonial: `
            <p>
            Every thriving team needs a guiding hand  someone who ensures that vision, creativity, and innovation are not only pursued but also realized with precision. At Cipher Syndicate, that guiding force is Londiwe Afrikander, known to the team as Codessa. 
            </p>
            <p>
            As Administrator and Back-End Developer, she orchestrates the daily workings of the Syndicate with clarity, diligence, and unmatched dedication.Codessa is the engine that keeps the team running smoothly. She manages communications, documentation, and workflow with meticulous attention, ensuring that every project is aligned, every member informed, and every deadline met. Her administrative skill is matched only by her technical prowess , she seamlessly contributes to back-end development, bridging organization with innovation.
            </p>
            <p>
            What truly sets Codessa apart is her combination of leadership and empathy. She doesn’t just manage tasks , she nurtures growth, inspires confidence, and empowers those around her to excel. Her ability to balance operational oversight with hands on technical contributions makes her indispensable to the Syndicate.
            </p>
            <p>
            In every sense, Codessa represents reliability, excellence, and foresight. She ensures that Cipher Syndicate doesn’t just function, it thrives. Through her commitment and vision, she exemplifies what it means to lead, support, and innovate simultaneously.
            </p>
            <p>
            Codessa is more than an administrator , she is the pillar that upholds Cipher Syndicate, turning potential into performance, chaos into order, and ideas into reality.
            </p>
            `
        },
        binarybloom: {
            name: "Luyanda Mkhwanazi",
            code: "Binary Bloom",
            role: "Secretary",
            description: "Luyanda known as Binary Bloom transforms ideas into visually intuitive interfaces, creating front-end experiences that are both elegant and functional. She constantly pushes creative boundaries, blending innovative design with usability. Her fresh perspective ensures the Syndicate’s projects always stand out in both style and substance.",
            specialization: "Front-endDeveloper",
            email: "mkhwanaziluyanda043@gmail.com",
            phone: "+27 81 564 8360",
            cv: "CVs/CV_2025092819370472.pdf",
            image: "images/Images/binary_bloom.jpg",
            testimonial: `
            <p>
            In a team where innovation thrives, organization and precision are just as essential as creativity. At Cipher Syndicate, Luyanda Mkhwanazi, known as Binary Bloom, embodies this balance. As Secretary and Front-End Developer, she ensures that the team’s projects are structured, documented, and executed with both efficiency and elegance.
            </p>
            <p>
            Binary Bloom has a unique ability to harmonize technical skill with visual artistry. Her front-end designs are not only functional but also engaging, intuitive, and aesthetically compelling. She transforms abstract ideas into interactive experiences that delight users while supporting the Syndicate’s broader vision.Her organizational skills are equally impressive. Binary Bloom keeps workflows seamless, communication clear, and deadlines met, providing the stability that allows the team’s creative energy to flourish. She is the quiet strategist behind smooth operations, turning complexity into clarity without ever compromising quality.
            </p>
            <p>
            Beyond her technical and organizational expertise, Binary Bloom inspires through her commitment, adaptability, and collaborative spirit. She approaches every task with focus and precision, elevating the work of everyone around her.
            </p>
            <p>
            Binary Bloom is more than a developer or secretary; she is the architect of clarity and creativity , a professional whose contributions allow Cipher Syndicate to grow, shine, and captivate.
            </p>
            `
        },
        cachecat: {
            name: "Luyanda Gumede",
            code: "Cache Cat",
            role: "Marketing",
            description: "Luyanda known as Cache Cat combines creativity with technical skill, delivering front-end solutions that are smooth, engaging, and visually striking. She has a keen sense of how users interact with technology, and her marketing insight ensures that each project resonates beyond just functionality, creating lasting impact.",
            specialization: "Front-end Developer",
            email: "Luyandagumede123@gmail.com",
            phone: "+27 63 031 2938",
            cv: "CVs/CV_2025110212510086.pdf",
            image: "images/Images/Cache Cat.jpg",
            testimonial: `
            <p>
            In every forward-thinking team, there is someone who bridges creativity, technology, and outreach  at Cipher Syndicate, that person is Luyanda Gumede, known as Cache Cat. 
            </p>
            <p>
            As Marketing Lead and Front-End Developer, he brings projects to life with designs that are not only visually compelling but also strategically aligned to connect with audiences effectively.Cache Cat embodies the perfect fusion of technical skill and creative insight. His front-end development ensures interfaces are intuitive, functional, and engaging, while his marketing expertise ensures that the team’s work reaches the right people in meaningful ways. Every project he touches reflects his ability to balance aesthetics with purpose, innovation with practicality.
            </p>
            <p>
            Beyond his technical brilliance, Cache Cat is a collaborator, mentor, and motivator. He constantly inspires his team with fresh ideas, adaptable strategies, and a commitment to excellence that elevates everyone around him. His enthusiasm is contagious, his problem-solving is innovative, and his focus is unwavering.
            </p>
            <p>
            Cache Cat is more than a developer or marketer; he is the innovator and connector of Cipher Syndicate , a professional whose creativity, technical mastery, and vision ensure that the team not only builds remarkable digital solutions but also makes a lasting impact in the digital world.
            </p>
            `
        },
        lyrabyte: {
            name: "Zanele Mkhize",
            code: "Lyra Byte",
            role: "",
            description: "Lyra Byte is a quiet light within Cipher Syndicate ,a gentle soul whose warmth and creativity bring calm to the storm of innovation. Her presence carries both grace and curiosity, blending thoughtful silence with bursts of energy when inspiration strikes. Beneath her soft tone lies a vibrant imagination and an eagerness that turns every challenge into art.",
            specialization: "Front-end Developer",
            email: "zaneleoluhlem@gmail.com",
            phone: "+27 63 786 6372",
            cv: "CVs/CV_2025110213514841.pdf",
            image: "images/Images/Lyra_byte.jpg",
            testimonial: `
            <p>
            Lyra Byte embodies the beauty of balance, calm yet curious, gentle yet determined. In her, we see the kind of brilliance that doesn’t demand attention, but earns it through depth and authenticity. She brings warmth to the workspace, reminding us that technology isn’t only about logic — it’s also about heart.
            </p>
            <p>
            Her quiet focus often says what words cannot. She listens deeply, observes carefully, and when she speaks, it’s with purpose. Every idea she shares carries sincerity, every effort reflects dedication. Lyra’s bubbly spark brings lightness to even the most intense projects, transforming collaboration into connection.
            </p>
            <p>
            At Cipher Syndicate, she stands as proof that strength isn’t always loud ,sometimes, it moves softly, learning, adapting, and shining in its own rhythm. Lyra Byte’s journey is one of quiet impact ,steady, inspiring, and undeniably hers.
            </p>
            `
            },
            novapulse: {
            name: "Zishaan Mansoor",
            code: "Nova Pulse",
            role: "",
            description: "Nova Pulse is the creative technologist of Cipher Syndicate, a digital architect whose precision meets imagination. With a foundation in both gaming and web development, he bridges the artistry of interactivity with the discipline of structured design. His focus lies in crafting modern, minimalistic interfaces that don’t just function, but feel intuitive , where every pixel has purpose and every motion has intent.",
            specialization: "Front-end Developer",
            email: "zzmansoor@gmail.com",
            phone: "+27 60 544 6674",
            cv: "CVs/Zishaan_CV-1.pdf",
            image: "images/Images/Nova_Pulse.jpg",
            testimonial: `
            <p>
            Within Cipher Syndicate, Nova Pulse represents the perfect balance between logic and creativity ,a  front-end innovator who translates vision into interface and complexity into clarity.
            </p>
            <p>
            He approaches development like a strategist: deliberate, focused, and relentlessly precise. His code isn’t rushed; it’s engineered ,optimized for elegance, performance, and usability. Nova Pulse has an instinctive understanding of how users think and interact, turning technical blueprints into seamless digital realities.
            </p>
            <p>
            But Nova’s brilliance extends beyond syntax and design, it’s in his philosophy. He believes that true technology disappears into experience, that the best systems are the ones you never notice because they simply work. This principle defines his contribution to Cipher Syndicate.
            </p>
            <p>
            In every project, his influence can be seen in the polish of the interface, the fluidity of the user journey, and the silent power of well-structured code. Nova Pulse reminds the team that innovation doesn’t always demand noise, sometimes, it hums quietly in the perfection of design, in the precision of function, and in the harmony between creativity and control.
            </p>
            <p>
            He is not merely a developer; he is Cipher Syndicate’s Front-End Visionary , the pulse that gives technology its human touch and design its digital soul.
            </p>
            `
            },
    };

    let activeMember = null;

    // This is for the modal elements
    const modal = document.getElementById("member-modal");
    const modalImage = document.getElementById("modal-image");
    const modalName = document.getElementById("modal-name");
    const modalRole = document.getElementById("modal-role");
    const modalDescription = document.getElementById("modal-description");
    const modalEmail = document.getElementById("modal-email");
    const modalPhone = document.getElementById("modal-phone");
    const modalCV = document.getElementById("modal-cv");
    const closeModal = modal.querySelector(".close");

    const testimonialBtn = document.getElementById("modal-testimonial-btn");
    const testimonialText = document.getElementById("testimonial-text");

    /* --- This is to open the Member Modal --- */
    document.querySelectorAll(".view-details").forEach(btn => {
        btn.addEventListener("click", () => {
            const memberKey = btn.dataset.member;
            const member = members[memberKey];
            activeMember = member;

            modalImage.src = member.image;
            modalName.textContent = member.name;
            modalRole.innerHTML = `<b>${member.role}</b>`;
            modalDescription.textContent = member.description;
            modalEmail.innerHTML = `<b>Email:</b> ${member.email || 'N/A'}`;
            modalPhone.innerHTML = `<b>Phone:</b> ${member.phone || 'N/A'}`;
            modalCV.href = member.cv;

            modal.style.display = "block";
        });
    });

    /* --- This is to close the Member Modal --- */
    closeModal.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });

    /* --- This is to open the Testimonial Modal --- */
    testimonialBtn.addEventListener("click", () => {
        if (!activeMember || !activeMember.testimonial) return;

        if (testimonialText.style.display === "block") {
            testimonialText.style.display = "none";
            testimonialText.innerHTML = "";
            testimonialBtn.textContent = "View Testimonial";
        }else{
        testimonialText.innerHTML = `<p>${activeMember.testimonial}</p>`;
        testimonialText.style.display = "block";
        testimonialBtn.textContent = "Hide Testimonial";
    }
    });

    /* --- This is to close the Testimonial Modal --- */
    closeTestimonial.addEventListener("click", () => testimonialModal.style.display = "none");
    window.addEventListener("click", e => { if (e.target === testimonialModal) testimonialModal.style.display = "none"; });
});
