function showService(service) {
  let infoTitle = "";
  let infoText = "";

  if (service === "design") {
      infoTitle = "Static and Dynamic Website Design";
      infoText = "We create visually appealing and user-friendly websites that showcase your brand, whether simple static sites or dynamic platforms.";
  } 
  else if (service === "hosting") {
      infoTitle = "Website Hosting";
      infoText = "Our hosting services keep your site reliable, secure, and always online.";
  } 
  else if (service === "domain") {
      infoTitle = "Domain Hosting";
      infoText = "We register and manage your domain name, making sure your online identity is secure.";
  } 
  else if (service === "registration") {
      infoTitle = "Company Registration";
      infoText = "We help you through the process of registering your company and meeting legal requirements.";
  } 
  else if (service === "app") {
      infoTitle = "Mobile App Development";
      infoText = "We design and build mobile apps for both Android and iOS platforms.";
  } 
  else if (service === "logo") {
      infoTitle = "Logo Design";
      infoText = "We design unique and professional logos that capture your brand’s identity.";
  } 
  else if (service === "portfolio") {
      infoTitle = "Personal and Professional Portfolios";
      infoText = "We create online portfolios to showcase your skills, projects, and achievements.";
  } 
  else if (service === "flyers") {
      infoTitle = "Flyers";
      infoText = "We design creative and eye-catching flyers for promotions and advertising.";
  } 
  else if (service === "posters") {
      infoTitle = "Posters";
      infoText = "Our posters are designed to grab attention and communicate your message effectively.";
  } 
  else if (service === "invitations") {
      infoTitle = "Digital Invitations";
      infoText = "We create modern digital invitations for personal and professional events.";
  } 
  else if (service === "marketing") {
      infoTitle = "Marketing";
      infoText = "Our marketing strategies help your business grow and reach the right audience.";
  } 
  else if (service === "tutoring") {
      infoTitle = "Tutoring";
      infoText = "We offer personalized tutoring to help students achieve their academic goals.";
  }

  let infoBox = document.getElementById("service-info");
  infoBox.innerHTML = "<h2>" + infoTitle + "</h2><p>" + infoText + "</p><button class='close-btn' onclick='closeService()'>Close</button>";
  infoBox.style.display = "block";
  infoBox.style.animation = "none";
  infoBox.offsetHeight;
  infoBox.style.animation = null;
}

function closeService() {
  let infoBox = document.getElementById("service-info");
  infoBox.style.display = "none";
}
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}

