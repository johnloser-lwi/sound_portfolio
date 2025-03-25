function handleMail() {
    const clientName = document.getElementById("client-name");
    const clientEmail = document.getElementById("client-email");
    const clientMsg = document.getElementById("client-msg");

    const body = `
    Name: ${clientName.value}
    Email: ${clientEmail.value}

    ${clientMsg.value}
    `;

    window.open(`mailto:weiqinyangsound@gmail.com?subject=${"Info Requiry"}&body=${body}`);
}