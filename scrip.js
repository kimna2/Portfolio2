console.log("JavaScript file is loaded.");


// toggle icon
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");


menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

//  scroll sections active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*="+ id +"]").classList.add("active");

            });
        };
    });
    // sticky navbar
    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);

    // remove toggle icon and navbar when click navbar Link (scroll)
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");

};

// scroll reveal
ScrollReveal({ 
    reset: true,
    distance:"80px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
ScrollReveal().reveal('.circular-card, .portfolio-box, .contact form', { origin: "bottom" });
ScrollReveal().reveal('.home-content h3, .about-img', { origin: "left" });
ScrollReveal().reveal('.home-content p, .about-content', { origin: "right" });


// scroll reveal
// ScrollReveal({ 
//     reset: true,
//     distance: "80px",
//     duration: 2000,
//     delay: 200,
// });

// ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
// ScrollReveal().reveal('.circular-card, .portfolio-box, .contact form', { origin: "bottom" });
// ScrollReveal().reveal('.home-content h3, .about-img', { origin: "left" });
// ScrollReveal().reveal('.home-content p, .about-content', { origin: "right" });


// const form = document.querySelector("form");
// const fullName = document.getElementById("name");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const subject = document.getElementById("subject");
// const mess = document.getElementById("message");


// function sendEmail() {

//     const bodyMassage = "Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Massage: ${mess.value}";

//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "kimna230805@gmail.com",
//         Password : "1D4D9882C24F158E7F014444E4370D0E46C6",
//         To : 'kimna230805@gmail.com',
//         From : "kimna230805@gmail.com",
//         Subject : subject.value,
//         Body : bodyMassage
//     }).then(
//       message => alert(message)
//     );
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     sendEmail();
// });

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");


function sendMail() {

    const bodyMessage = `
        Full Name: ${fullName.value}<br>
        Email: ${email.value}<br>
        Phone Number: ${phone.value}<br>
        Message: ${mess.value}`;
    Email.send({
        SecureToken : "567a6cf1-9625-4a97-ac8c-310c4fbef49e",
        Host : "smtp.elasticemail.com",
        Username : "nakim7668@gmail.com",
        Password : "6488AAB3F70E1F1860F28859C1FD11E92BAE",
        To : 'nakim7668@gmail.com',
        From : "nakim7668@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendMail();
});

