function openForm() {
  document.getElementById("div1").style.display = "block";
  //document.getElementById("btn1").setAttribute("style", "filter: blur(0px)");

  let blur = document.querySelectorAll(".apply");

  blur.forEach(function(tag){
    tag.setAttribute("style", "filter: blur(8px)");
  });
}
