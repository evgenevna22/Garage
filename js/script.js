

$(".page-menu__item--production").click(function(event){
  event.preventDefault();
  $(".project-list--production").css("display", "block");
});

$(".page-menu__item--production").mouseenter(function(event){
  event.preventDefault();
  $(".project-list--production").css("display", "block");
});

$(".page-menu__arrow--right").click(function(event){
  event.preventDefault();
  $(".project-list--production").css("display", "block");
});

$(this).keydown(function(eventObject){
  if (eventObject.which == 27){
    $(".project-list").hide();
  }
});

$(document).mouseup(function(event){
  var closeProject = $(".project-list");
  if(closeProject.has(event.target).length === 0){
     closeProject.hide();
  }
});

$(".page-menu__arrow--left").click(function(event){
  event.preventDefault();
  $(".project-list--marketing").css("display", "block");
});

$(".page-menu__item--marketing").mouseenter(function(event){
  event.preventDefault();
  $(".project-list--marketing").css("display", "block");
  window.scrollTo(1000, 0);
  $(".project-list--production").hide();
});

$(".project-list__link").click(function(event){
  event.preventDefault();
});

function scrollWin() {
    window.scrollTo(1000, 0);
}

let click = document.querySelectorAll(".page-menu__item-link--modal");

click.forEach(item => {
  item.addEventListener("click", (event)=> {
      event.preventDefault();
      $(".project-list--marketing").css("display", "block");
      window.scrollTo(1000, 0);
  });
});


$(this).keydown(function(eventObject){
  if (eventObject.which == 27){
    $(".project-list--marketing").hide();
  }
});

$(document).mouseup(function(event){
  var closeProject = $(".project-list--marketing");
  if(closeProject.has(event.target).length === 0){
     closeProject.hide();
  }
});