/* event back-to-top button */
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* event menu circle button */
var nbOptions = 8; // number of menus
var angleStart = -360; // start angle

// jquery rotate animation
function rotate(li, d) {
  $({ d: angleStart }).animate(
    { d: d },
    {
      step: function (now) {
        $(li)
          .css({ transform: "rotate(" + now + "deg)" })
          .find("label")
          .css({ transform: "rotate(" + -now + "deg)" });
      },
      duration: 0,
    }
  );
}

// show / hide the options
function toggleOptions(s) {
  $(s).toggleClass("open");
  var li = $(s).find("li");
  var deg = $(s).hasClass("half") ? 180 / (li.length - 1) : 360 / li.length;
  for (var i = 0; i < li.length; i++) {
    var d = $(s).hasClass("half") ? i * deg - 90 : i * deg;
    $(s).hasClass("open") ? rotate(li[i], d) : rotate(li[i], angleStart);
  }
}

$(".menuCircleContact button").click(function (e) {
  toggleOptions($(this).parent());
});

setTimeout(function () {
  toggleOptions(".menuCircleContact");
}, 100);
