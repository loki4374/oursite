(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    window.addEventListener("scroll", function () {
        const fixedTop = document.querySelector('.fixed-top');
        const windowWidth = window.innerWidth;
        const scrollTop = window.scrollY;
    
        if (windowWidth < 992) {
            if (scrollTop > 45) {
                fixedTop.classList.add('bg-white', 'shadow');
            } else {
                fixedTop.classList.remove('bg-white', 'shadow');
            }
        } 
        else {
            if (scrollTop > 45) {
                fixedTop.classList.add('bg-white', 'shadow');
                fixedTop.style.position = "fixed"; 
                fixedTop.style.top = "0";           
            } else {
                fixedTop.classList.remove('bg-white', 'shadow');
                fixedTop.style.position = "absolute"; 
                fixedTop.style.top = "0";                   
                  }
        }
    });
    



    // form cat animation
    document.getElementById('myForm').addEventListener('input', function () {
        const inputs = document.querySelectorAll('#myForm input');
        const logo = document.querySelector('.cat-img'); 
        let isValid = false;
    
        inputs.forEach((input) => {
            if (input.value.trim() !== "" && input.checkValidity()) {
                isValid = true;
            }
        });
    
        if (isValid) {
            logo.classList.remove('hidden'); 
            logo.classList.add('animate'); 
        } else {
            logo.classList.remove('animate'); 
            logo.classList.add('hidden');
        }
    });
    

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 100, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 1,
        time: 500
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="fas fa-arrow-left"></i>',
            '<i class="fas fa-arrow-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
			576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);



//   emailsend

emailjs.init("VAqHuzOiH1HsvFaB0"); 

    function sendMail(event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("mail").value;
        var number = document.getElementById("mobile").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;

        var templateParams = {
            email: email,
            to_name: name,
            message: message,
            number: number,
            subject: subject,
        };

        emailjs.send('service_cbrcci8', 'template_hk4iam9', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Message Sent Successfully");
            }, function(error) {
                console.log('FAILED...', error);
                alert("Message Not Sent");
            });
    }