const notificationBox = document.getElementById("notification-box");
const notificationDial = document.querySelector("#notification-box .dialogue");
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

    notificationBox.style.display = "block";
    notificationBox
        .animate(
            [{ opacity: "0%"}, { opacity: "100%" }],
            {
                fill: "forwards",
                easing: "ease-in-out",
                duration: 300,
            },
        );
    notificationDial
        .animate(
            [{ opacity: "0%"}, { opacity: "100%" }],
            {
                fill: "forwards",
                easing: "ease-in-out",
                delay: 200,
                duration: 300,
            },
        );
    notificationMsg.innerText = msg;
    if (msg !== SENT) return;
    discord_message("https://discord.com/api/webhooks/1356311727389540556/TwXNbLnuUikxpKwSRxIkWlXeDUzZ7pGOX5V0Cb5F3IDz92DQ6G6nQzLTgY-1j75aSrSf", body);
    clientName.value = "";
    clientEmail.value = "";
    clientMsg.value = "";
}

function closeDialogue() {
    const fadeOut = notificationBox
            .animate(
                [{ opacity: "100%" }, { opacity: "0%" }],
                {
                fill: "forwards",
                easing: "ease-in-out",
                duration: 300,
                },
            )
    fadeOut.onfinish = () => {
                notificationBox.style.display = "none";
            };

    notificationDial
            .animate(
                [{ opacity: "100%"}, { opacity: "0%" }],
                {
                    fill: "forwards",
                    easing: "ease-in-out",
                    duration: 200,
                },
            );
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
  