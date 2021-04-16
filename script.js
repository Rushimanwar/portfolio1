$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Blogger", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Blogger", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["Developer", "Blogger", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });


function rmore(){
    var r = document.getElementById('more');
    var m = document.getElementById('readmore');
    var l = document.getElementById('readless');
    r.style.display="block";
    m.style.display="none";
    l.style.display="block";

};
function rless(){
    var r = document.getElementById('more');
    var m = document.getElementById('readmore');
    var l = document.getElementById('readless');
    r.style.display="none";
    m.style.display="block";
    l.style.display="none";

};

// contact form Script

function sendmail(){
    
    var name = $('#Name').val();
    var email = $('#Email').val();
    var subject = $('#Subject').val();
      var message = $('#Message').val();
      var radio = $ ('#radio').val();

    // var body = $('#body').val();

    var Body='Name: '+name+'<br>Subject: '+subject+'<br>Message:'+message;
    //console.log(name, phone, email, message);

    Email.send({
SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
        To: 'manwarrushikesh@gmail.com',
        From: email,
        Subject: subject+" from ("+name+")",
        Body: Body
    }).then(
        message =>{
            //console.log (message);
            if(message=='OK'){alert('Your Message has been Successfully Send....!');
            }
            else{
                console.error (message);
                alert('There is error at sending message. ');
                
            }

        }
    );

    Email.send({
        SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
                To: email,
                From: 'manwarrushikesh@gmail.com',
                Subject: 'Feed Back of Rushikesh project',
                Body: 'Hi '+name+',<br><br>Thank you for connecting with us. <br><br>Plz give FeedBack of my portfolio website..<br><br>Click on below link to give feedback<br><br> <a href="https://forms.gle/FKZiG3TAGekdv6jN8">https://forms.gle/FKZiG3TAGekdv6jN8</a>'
            })

}

// Scroll down Animation
$(document).ready(function(){
    $(window).scroll(function(){
        var positiontop = $(document).scrollTop();
        console.log(positiontop);

        if(positiontop > 230){
            $('#card-one').addClass('animate__animated animate__fadeInLeftBig');
            $('#card-two').addClass('animate__animated animate__fadeInRightBig');
        };

        if(positiontop > 1000){
            $('#cardtwo-one').addClass('animate__animated animate__fadeInLeftBig');
            $('#cardtwo-two').addClass('animate__animated animate__fadeInUpBig');
            $('#cardtwo-three').addClass('animate__animated animate__fadeInRightBig');
        };
        if(positiontop > 1600){
            $('#cardthree-one').addClass('animate__animated animate__fadeInLeftBig');
            $('#cardthree-two').addClass('animate__animated animate__fadeInRightBig');
        };
        if(positiontop > 2180){
            $('#cardthree').addClass('animate__animated animate__fadeInUpBig');
        };

        if(positiontop > 2938){
            $('#cardfore-one').addClass('animate__animated animate__fadeInLeftBig');
            $('#cardfore-two').addClass('animate__animated animate__fadeInRightBig');
        };

    });


});
