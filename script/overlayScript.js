window.onload = init();

function init(){
  closePic();
}

let btn_pn = document.getElementById("btn-pn");
let btn_pn2 = document.getElementById("btn-pn2");
let btn_pn3 = document.getElementById("btn-pn3");

btn_pn.onclick = openPicBaron;
btn_pn2.onclick = openPicKingAir;
btn_pn3.onclick = openPicBonanza;

function openPicBaron() {
  document.getElementById("fullPic").style.width = "100%";
  document.getElementById("fullPic").style.height = "100%";
  }

function openPicKingAir() {
  document.getElementById("fullPic2").style.width = "100%";
  document.getElementById("fullPic2").style.height = "100%";
  }

  function openPicBonanza() {
  document.getElementById("fullPic3").style.width = "100%";
  document.getElementById("fullPic3").style.height = "100%";
  }
  
  function closePic() {
    document.getElementById("fullPic").style.width = "0%";
    document.getElementById("fullPic2").style.height = "0%";
    document.getElementById("fullPic3").style.height = "0%";
  }