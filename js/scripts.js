$('#heading-text').text('How to create a hamburger menu with jQuery');

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

// $('.popover1').on({
//     mousemove: function(e) {
//         $(this).next('#big').css({
//             top: e.pageY - 260 - 25, // height of image and title area plus some
//             left: e.pageX + -120
//         });
//     },
//     mouseenter: function() {
//         var $big = $('<img />', {'class': 'big_img1', src: this.src}),
//             $title = $('<div class="title"/>').html(this.title),
//             $frame = $('<div id="big" />');
//
//         $frame.append($big).append($title);
//
//         $(this).after($frame);
//     },
//     mouseleave: function() {
//         $('#big').remove();
//     }
// });
