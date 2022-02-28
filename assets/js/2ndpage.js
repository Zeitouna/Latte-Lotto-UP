// Responsivess of the navbar
$(document).ready(function () {
    $(".sidenav").sidenav();
  });
  
  const form = $("#contact-form");
  const email = $("#email");
  const sbj = $("#subject");
  const msg = $("#message");
  
  // Event listener to Send button
  $("#sendBtn").click(function sendMsg(e) {
    e.preventDefault();
    // Function to send email
    Email.send({
      SecureToken: "1f96d029-475c-4a1f-850e-8bde99d236cb",
      To: "theboaringapp@gmail.com",
      From: email.val(),
      Subject: sbj.val(),
      Body: msg.val(),
    }).then((message) => alert(message));
  });
  

