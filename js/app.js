$(() => {
  // Page onload
  document.querySelector('body').onload = () => {
  };
  // Learn more button click
  $('#learnmoreBtn').click(() => {
    $('html, body').animate({ scrollTop: $('header.masthead').height() + $('nav.navbar').height() }, 800);
    console.log($('header.masthead').height());
  });

  // Tooltip
  $('[data-toggle="tooltip"]').tooltip();


  // School Website
  $('.school-txt').click(() => window.open('https://jam.wrdsb.ca/', '_blank'));

  // Skills tooltip
  var mySkills = document.querySelectorAll('li.skillListItem');
  mySkills.forEach((skills) => {
    // skills.onmouseenter = () => console.log(skills.innerHTML);
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
});
