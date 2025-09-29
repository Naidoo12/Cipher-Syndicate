const faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you! Your message has been sent to Cipher Syndicate.");
});

const chatBtn = document.getElementById('chat-btn');
const chatBox = document.getElementById('chat-box');
const chatMessages = document.getElementById('chat-messages');
const optionsContainer = document.getElementById('options-container');

let chatStarted = false;

chatBtn.addEventListener('click', () => {
  chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
  if(chatBox.style.display === 'flex' && !chatStarted) {
    startChat();
    chatStarted = true;
  }
});


function addMessage(text, sender) {
  const msg = document.createElement('div');
  msg.className = sender === 'user' ? 'user-message' : 'bot-message';
  msg.innerHTML = text;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight; 
}

function showOptions(options) {
  optionsContainer.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button'); 
    btn.textContent = opt.label;
    btn.className = 'option-btn';
    btn.onclick = () => opt.action();
    optionsContainer.appendChild(btn);
  });
}

function startChat() {
  addMessage("Hello! I'm CipherBot. How can I assist you today?", 'bot');
  setTimeout(showMainOptions, 100);
}

function showMainOptions() {
  const options = [
    { label: "View Services", action: viewServices },
    { label: "Request a Quote", action: requestQuote },
    { label: "Learn About Cipher Syndicate", action: learnAbout },
    { label: "Contact Info", action: contactInfo },
  ];
  showOptions(options);
}

function viewServices() {
  addMessage(`Cipher Syndicate offers:<br>
Static & Dynamic Website Design<br>
Website Hosting<br>
Domain Hosting<br>
Company Registration<br>
Mobile App Development<br>
Logo Design<br>
Personal & Professional Portfolios<br>
Flyers & Posters<br>
Digital Invitations<br>
Marketing<br>
Tutoring`, 'bot');
  setTimeout(showMainOptions, 100);
}

function requestQuote() {
  addMessage("To request a quote,<br>please fill in the contact form on our Contact Us page<br> or email us at ciphersyndicate.cs@gmail.com", 'bot');
  setTimeout(showMainOptions, 100);
}

function learnAbout() {
  addMessage("Cipher Syndicate is a tech company specializing in:<br> web and app development,<br> digital marketing,<br> and design services.,<br> We are committed to delivering high-quality solutions tailored to your needs.", 'bot');
  setTimeout(showMainOptions, 100);
}

function contactInfo() {
  addMessage("You can reach us at:<br>Phone: 067 922 4886<br>Email: ciphersyndicate.cs@gmail.com<br>Address: 160 Monty Naicker Road, Durban, 4001<br>Facebook & Instagram: Cipher Syndicate", 'bot');
  setTimeout(showMainOptions, 100);
}