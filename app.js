function talk() {
  var know = {
    "Who are you?": "Hello, Amber here",
    "how are you?": "I am fine :)",
    "What can i do for you?": "remember me in your pray",
    "Is everything ok?": "Yes, everything’s fine, thanks.",
    "What do you do?": "I’m a student.",
    "How was your day?": "Really good!",
    "Why are you studying english?": "For work",
    "What religion are you ? ": "I am a Muslim",
    "What’s your email address?": "it's amberyounus22@gmail.com",
    "bye": "Okay! Will meet soon..",
  };
  var user = document.getElementById("userBox").value;
  document.getElementById("chatLog").innerHTML = user + "<br>";
  if (user in know) {
    document.getElementById("chatLog").innerHTML = know[user] + "<br>";
  } else {
    document.getElementById("chatLog").innerHTML =
      "Sorry , I did not understand <br>";
  }
}
