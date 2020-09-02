// Particles effect
particlesJS.load('particles', '../js/p.json');

$(() => {
    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Contact me scroll
    $('a.contactme-txt').click(() => {
        $('html, body').animate({ scrollTop: $(document).height() }, 800);
        return false;
    });

    // View project btn
    $('btn.intro-btn').click(() => {
        $('html, body').animate({ scrollTop: $('#scrollDown').offset().top, }, 800);
        return false;
    });

    // cpclip func
    const copyToClipboard = str => {
        const el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };

    // Contact Button Clicks
    $('button.linkedin-color').click(() => window.open('https://www.linkedin.com/in/andrew-yang-7a9402198/', '_blank'));
    $('button.github-btn').click(() => window.open('https://www.github.com/andytubeee', '_blank'));
    $('button.email-color').click(() => {
        var $myEmail = "andy.tubeee@gmail.com";
        try {
            copyToClipboard($myEmail);
            Swal.fire(
                'Done',
                'My email is copied to your clipboard!',
                'success'
            );
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: 'Please try again!'
            });
        }
    });
    $('button.ig-grad').click(() => window.open('https://www.instagram.com/andrew.apk/', '_blank'));
    $('button.phone-fab').click(() => {
        var $myNum = "+15197546616";
        try {
            copyToClipboard($myNum);
            Swal.fire(
                'Done',
                'My phone number is copied to your clipboard!',
                'success'
            );
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: 'Please try again!'
            });
        }
    });

    // Refresh the page when user clicks project text again on the same page
    $('a.projects-txt').click(() => location.reload());

    // Project Devpost Links
    $('img.tc-img').click(() => window.open("https://devpost.com/software/treecompanion", "_blank"));
    $('img.vg-img').click(() => window.open("https://devpost.com/software/veglife", "_blank"));
    $('img.sc-img').click(() => window.open("https://devpost.com/software/sharecare-gzhsqr", "_blank"));

    //Tree Companion
    $('button.tc-demo').click(() => window.open("https://www.youtube.com/watch?v=QqRB1BK4_zk", "_blank"));
    $('button.tc-repo').click(() => window.open("http://www.github.com/andytubeee/Tree_Companion", "_blank"));

    // VegLife
    $('button.vgl-demo').click(() => window.open("https://www.youtube.com/watch?v=DRxRsoKW0oE", "_blank"));
    $('button.vgl-repo').click(() => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Unfortunately, the repository is deleted on GitHub, sorry for your inconvenience.',
            footer: 'Please check out my other projects.'
        });
    });

    // ShareCare
    $('button.sc-demo').click(() => window.open("https://www.youtube.com/watch?v=lemNhB6HhGo", "_blank"));

});