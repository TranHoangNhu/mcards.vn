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
//slider show list card & active blue color btn when clicked
$(document).ready(function () {
  $(".btn-slider").on("click", function () {
    var thisBtn = $(this).attr("href");
    // console.log($(this).find($(this).attr("href")));
    $(this).parents(".container").find(`${thisBtn}`).addClass("active");
    $(this)
      .parents(".container")
      .find(".carousel")
      .not(`${thisBtn}`)
      .removeClass("active");
    $(this)
      .parents(".list_type_card")
      .find(".text-blue-light-homepage")
      .addClass("text-dark")
      .removeClass("text-blue-light-homepage");
    $(this).addClass("text-blue-light-homepage").removeClass("text-dark");
  });
  $("#toggle_page, #toggle_customer").on("click", function () {
    var idParam = $(this).attr("id");
    $(this)
      .parents(".header")
      .find(`.navbar_body #${idParam}`)
      .slideToggle("fast", "swing")
      .toggleClass("d-none");
  });
});

