$(() => {
  // Page onload
  document.querySelector('body').onload = () => {
    // document.getElementById('alwaysFullscreen').style.height =
    //   $(window).height() + 'px';
  };
  // Learn more button click
  $('#learnmoreBtn').click(() => {
    $('html, body').animate({ scrollTop: $('header.masthead').height() + $('nav.navbar').height() }, 800);
    console.log($('header.masthead').height());
  });

  $('.school-txt').click(() => window.open('https://jam.wrdsb.ca/', '_blank'));

  var mySkills = document.querySelectorAll('li.skillListItem');
  mySkills.forEach((skills) => {
    skills.onmouseenter = () => console.log(skills.innerHTML);
  });

  var contactBtns = document.querySelectorAll('div.contact-btns');

  contactBtns.forEach((btn) => {
    btn.onclick = () => btn.style.border = 'none';
  });

  $('a.contactme-txt').click(() => {
    $('html, body').animate({ scrollTop: $(document).height() }, 800);
    return false;
  });
});
