const socket = io();

const clientsTotal = document.getElementById('client-total');
const message = document.getElementById('message-container');
const nameInput = document.getElementById('name-input');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const nameModal = document.getElementById('name-modal');
const modalNameInput = document.getElementById('modal-name-input');
const joinBtn = document.getElementById('join-btn');

joinBtn.addEventListener('click', () => {
    const name = modalNameInput.value.trim();
    if (name) {
        nameModal.style.display = 'none';
        nameInput.innerText = name;
    } else {
        alert("Nama tidak boleh kosong!");
    }
});
 
modalNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') joinBtn.click();
});


messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
   sendMessage();
});



socket.on('client-total', (total) => {
   clientsTotal.innerText = `Total Client : ${total}`;
});


function sendMessage() {
    
    if(messageInput.value === '') return;
    console.log(messageInput.value);
    const data = {
        name : nameInput.value,
        message : messageInput.value,
        dateTime : new Date().toLocaleString()
    }
    socket.emit('message',data);
    addMessageToUI(true, data);
    messageInput.value = '';
}

socket.on('chat-message', (data) => {
    addMessageToUI(false, data);
});


function addMessageToUI(isOwnMessage, data){
    clearFeedback();
    const timeString = typeof moment !== 'undefined' 
                       ? moment(data.dateTime).fromNow() 
                       : data.dateTime;

    const element = `
     <li class="${isOwnMessage ? 'message-right' : 'message-left'}">
                <p class="message">
                    ${data.message}
                    <span>${data.name} - ${timeString}</span>
                </p>
            </li>
    `;
    message.innerHTML += element;
    scrollToBottom();
}

function scrollToBottom() {
    message.scrollTo(0, message.scrollHeight);
}

messageInput.addEventListener('focus', (e) => {
    socket.emit('feedback',{
        feedback : `${nameInput.value} is typing...`
    })
});

messageInput.addEventListener('blur', (e) => {
    socket.emit('feedback',{
        feedback : ''
    })
});

socket.on('feedback', (data) => {
    clearFeedback();
    const element =  `
             <li class="message-feedback">
                <p class="feedback" id="feedback">${data.feedback}</p>
            </li>
    `
    message.innerHTML += element;
})

function clearFeedback() {
    document.querySelectorAll('li.message-feedback').forEach(element => element.parentNode.removeChild(element));
}