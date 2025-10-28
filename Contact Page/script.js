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

const email = document.getElementById('email');
const emailHref = email ? email.href : 'contact.html';

const chatBtn = document.getElementById('chat-btn');
const chatBox = document.getElementById('chat-box');
const chatMessages = document.getElementById('chat-messages');
const optionsContainer = document.getElementById('options-container');

let chatStarted = false;

chatBtn.addEventListener('click', () => {
  chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
  if (chatBox.style.display === 'flex' && !chatStarted) {
    startChat();
    chatStarted = true;
  }
});

// i have modified addMessage to clear previous messages first (for single answer display only not answers under each other)
function addMessage(text, sender, clearPrevious = false) {
  if (clearPrevious) chatMessages.innerHTML = ""; // clear old answers

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
  addMessage("Hello! I'm CipherBot. How can I assist you today?", 'bot', true);
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

// Each function now clears previous answer using clearPrevious=true instead of the old one
function viewServices() {
  addMessage(
    `Cipher Syndicate offers:<br>
1. Static & Dynamic Website Design<br>
2. Website Hosting<br>
3. Domain Hosting<br>
4. Company Registration<br>
5. Mobile App Development<br>
6. Logo Design<br>
7. Personal & Professional Portfolios<br>
8. Flyers & Posters<br>
9. Digital Invitations<br>
10. Marketing<br>
11. Tutoring`,
    'bot',
    true
  );
  setTimeout(showMainOptions, 100);
}

function requestQuote() {
  addMessage(
    `To request a quote, please fill in the contact form on our Contact Us page<br>
or email us at <a href="mailto:ciphersyndicate.cs@gmail.com">ciphersyndicate.cs@gmail.com</a>`,
    'bot',
    true
  );
  setTimeout(showMainOptions, 100);
}

function learnAbout() {
  addMessage(
    `Cipher Syndicate is a tech company specializing in:<br>
web and app development,<br>
digital marketing,<br>
and design services.<br><br>
We are committed to delivering high-quality solutions tailored to your needs.`,
    'bot',
    true
  );
  setTimeout(showMainOptions, 100);
}

function contactInfo() {
  addMessage(
    `You can reach us at:<br>
Phone: 067 922 4886<br>
Email: ciphersyndicate.cs@gmail.com<br>
Address: 160 Monty Naicker Road, Durban, 4001<br>
Facebook & Instagram: Cipher Syndicate`,
    'bot',
    true
  );
  setTimeout(showMainOptions, 100);
}

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}
