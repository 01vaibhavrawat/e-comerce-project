/*function sendEmail() {
        Email.send({
    SecureToken : "3dec8523-4503-48fa-8e80-7b74cb03385b",
    To : 'kataizeheremail@gmail.com',
    From : "vaibhrawat@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert("mail has been sent sucessfully")
);
}*/


const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {
        Email.send({
                Host: "smtp.mailtrap.io",
                Username: "b6dc185e7e3d7c",
                Password: "7c47398d8bd426",
                To: "kataizeheremail@gamil.com",
                From: "vaibhrawat@gamil.com",
                Subject: document.getElementById("name").value,
:...skipping...
/*function sendEmail() {
        Email.send({
    SecureToken : "3dec8523-4503-48fa-8e80-7b74cb03385b",
    To : 'kataizeheremail@gmail.com',
    From : "vaibhrawat@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert("mail has been sent sucessfully")
);
}*/


const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {
        Email.send({
                Host: "smtp.mailtrap.io",
                Username: "b6dc185e7e3d7c",
                Password: "7c47398d8bd426",
                To: "kataizeheremail@gamil.com",
                From: "vaibhrawat@gamil.com",
                Subject: document.getElementById("name").value,
                Body: document.getElementById("email").value

        }).then(msg => alert("success"))
})
