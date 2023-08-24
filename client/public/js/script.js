import bot from './assets/icons/chat/bot.svg'
import usr from './assets/icons/chat/user.svg'
// import robot from 
const form = document.querySelector('form');
const chatElement = document.querySelector('#chat-container');

let loadInterval;

// Get search query
function getQuery(element) {
  element.textContent = "";
  loadInterval = setInterval(() => {
    element.textContent += ".";
    if (element.textContent === ".....") {
      element.textContent = "";
    }
  }, 300);

}

// Display search query results
function showResults(element, text) {
  let i = 0;
  let interval = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.CharAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 20)
}

// Generate a unique message id
function generateId() {
  return `id-${Date.now()}-${Math.random().toString(16)}`
}

// Load message element
function loadMessage(isAi, value, id) {
  return `
  <div class="wrapper">
    <div class="chat">
      <div class="profile">
        <img src="${isAi ? bot : usr}" alt="${isAi ? 'bot' : 'user'}"/>
      </div>
      <div class="message" id="${id}->${value}"></div>
    </div>
  </div>
  `;
}

// Submit search query

const handleSubmit = async (e) => {
  e.preventDefault();
  const id = generateId();
  const data = new FormData(form);
  chatElement.innerHTML += loadMessage(false, data.get('prompt'));
  form.reset();
  chatElement.innerHTML += loadMessage(true, "", id);
  chatElement.scrollTop = chatElement.scrollHeight;
  const msgDiv = document.getElementById(id)

  getQuery(msgDiv);
}

form.addEventListener('submit', handleSubmit);
form.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    handleSubmit(e)
  }
});