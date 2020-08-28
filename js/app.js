particlesJS.load('particles', 'js/p.json');
$(() => {
  // Page onload
  document.querySelector('body').onload = () => {
  };
  // Learn more button click
  $('#learnmoreBtn').click(() => {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $('#scrollDown').offset().top,
      },
      1000
    );
  });

  // Tooltip
  $('[data-toggle="tooltip"]').tooltip();


  // School Website
  $('h2.school-name').click(() => window.open('https://jam.wrdsb.ca/', '_blank'));

  // Skills tooltip
  var mySkills = document.querySelectorAll('li.skillListItem');
  mySkills.forEach((skills) => {
    skills.onmouseenter = () => {

    };
  });

  // Contact me scroll
  $('a.contactme-txt').click(() => {
    $('html, body').animate({ scrollTop: $(document).height() }, 800);
    return false;
  });

  const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  // Contact me onclicks
  $('button.linkedin-color').click(() => window.open('https://www.linkedin.com/in/andrew-yang-7a9402198/', '_blank'));
  $('button.github-btn').click(() => window.open('https://www.github.com/andytubeee', '_blank'));
  $('button.email-color').click(() => {
    var $myEmail = "andy.tubeee@gmail.com";
    try {
      copyToClipboard($myEmail);
      alert("My email is copied to your clipboard. :D");
    } catch (err) {
      alert("Failed: " + err);
    }
  });
  $('button.ig-grad').click(() => window.open('https://www.instagram.com/andrew.apk/', '_blank'));
  $('button.phone-fab').click(() => {
    var $myNum = "+15197546616";
    try {
      copyToClipboard($myNum);
      alert("My phone number is copied to your clipboard. :D");
    } catch (err) {
      alert("Failed: " + err);
    }
  });
});
