console.log('Script file loaded.');

$(document).ready(function () {
  //To loads google map (save time).
  $('iframe').show();

  //hamburger menu
  var toggleElements = function () {
    $('nav').toggleClass('showMenu');
  };

  $('.hamburger-menu, .menu li a').on('click', function () {
    if ($(window).width() <= 990) {
      toggleElements();
    }
  });
  //end hamburger menu


  //accordion
  $('.accordion > div').click(function () {
    $(this).toggleClass('active');
    $('.accordion .active').not(this).removeClass('active');
  });
  //end accordion


  //modal box
  var modalToggle = function () {
    $('#modal-privacy-policy').toggleClass('active');
  }
  $('#privacy-policy, #modal-privacy-policy i').on('click', modalToggle);
  //end modal box


  //form submit
  var submitForm = function (event) {
    event.preventDefault();
    var data = {
      name: $(this).find('input[name="fullName"]').val(),
      email: $(this).find('input[name="email"]').val(),
      comments: $(this).find('textarea[name="comments"]').val(),
    }

    if (data.name, data.email, data.comments) {
      $.ajax({
        url: '',
        data: data,
        method: 'POST',
        success: toggleSuccess,
      });
    }
  }
  $('form').on('submit', submitForm);
  $('#modal-success i').on('click', toggleSuccess);


  /* Add or remove class */
  function toggleSuccess() {
    $('#modal-success').toggleClass('active');
  }

});