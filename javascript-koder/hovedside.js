//kode som handler om scrollingen på nettsiden og gjør sånn at hvis
//man skroller til en seksjon så bytter det css klasse og gjør om teksten
//sånn at det viser at man er på den riktige seksjonen
$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

       
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

});

//tilt på bilde effekt
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});


//skrive effekt som endrer tekst
var typed = new Typed(".typing-text", {
    strings: ["Student", "Frontend utvikler", "Grafisk designer", "Filmskaper"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

// <!-- popup som man for opp etter man har skrevet inn info på email skjemaet -->
$("#contact-form").submit(function (event) {
    emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

    emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById("contact-form").reset();
            alert("Melding sendt!");
        }, function (error) {
            console.log('FAILED...', error);
            alert("Melding sendt!");
        });
    event.preventDefault();
});


