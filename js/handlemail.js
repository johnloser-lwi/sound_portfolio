const notificationBox = document.getElementById("notification-box");
const notificationMsg = document.getElementById("notification-msg");
const clientName = document.getElementById("client-name");
const clientEmail = document.getElementById("client-email");
const clientMsg = document.getElementById("client-msg");
const SENT =  "Message sent!";
const INVALID = "Invalid information!";
const ERROR = "Failed to send!";

function handleMail() {

    let msg = SENT;

    if (!clientName.value || !clientEmail.value || !clientMsg.value || !validEmail(clientEmail.value))
    {
        msg = INVALID;
    }

    const body = `\nName: ${clientName.value}\nEmail: ${clientEmail.value}\n${clientMsg.value}\n\n`;

    // window.open(`mailto:weiqinyangsound@gmail.com?subject=${"Info Requiry"}&body=${body}`);
    Notification.requestPermission().then((result) => {
        notificationBox.style.display = result === "granted" ? "block" : "none";
        notificationMsg.innerText = msg;
        if (msg !== SENT) return;
        discord_message("https://discord.com/api/webhooks/1356311727389540556/TwXNbLnuUikxpKwSRxIkWlXeDUzZ7pGOX5V0Cb5F3IDz92DQ6G6nQzLTgY-1j75aSrSf", body);
        clientName.value = "";
        clientEmail.value = "";
        clientMsg.value = "";
      });
    
}

function closeDialogue() {
    notificationBox.style.display = "none";
}

function discord_message(webHookURL, message) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", webHookURL, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        'content': message,
        'username':'Contact Form',
    }));
    xhr.onerror = () => {
        notificationMsg.innerText = ERROR;
    }
}

function validEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};
  