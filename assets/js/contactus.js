
const email = $("email")
const message = $('#message')

function sendEmail() {
    var mailSubject = document.getElementById("email").value
    var mailBody = document.getElementById("message").value

$("#hoverBtn").click(function sendMsg(e) {
    e.preventDefault();


Email.send({
    Host : "smtp.yourisp.com",
    Username : "olivierberlin1998@hotmail.de",
    Password : "passwordtest",
    To : 'olivierrambaudmeasson@ied.edu',
    From : "olivierberlin1998@hotmail.de",
    Subject : mailSubject,
    Body : mailBody
}).then(
  message => alert(message)
);

}


  
//   const email = $("#email");
//   const msg = $("#message");

// $("#hoverBtn").click(function sendMsg(e) {
//     e.preventDefault();
//     // Function to send email
//     Email.send({
//       SecureToken: "1f96d029-475c-4a1f-850e-8bde99d236cb",
//       To: "olivierrambaudmeasson@ied.edu",
//       From: email.val(),
//       Body: msg.val(),
//     }).then((message) => alert(message));
//   });
  
