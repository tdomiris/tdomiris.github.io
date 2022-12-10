
/*Creating interactive button on the introductory page*/
function myFunction() {
    var x = document.getElementById("toggle-title");
    if (x.innerHTML === "New generation cereals") {
      x.innerHTML = "Click video button above";
    } else {
      x.innerHTML = "New generation cereals";
    }
  }

/*Making button change the image*/
theButton1.onclick = function pictureChange()
{
   document.getElementById("size-img").src="IMG_3996.JPG";
}
/*Writing the reciprocal function to make the image change back*/
theButton2.onclick = function pictureRechange()
{
    document.getElementById("size-img").src="IMG_3995.JPG";
}

/*Repeating the same for all buttons*/

theButton3.onclick = function pictureChange1()
{
   document.getElementById("size-img1").src="IMG_4005.JPG";
}
theButton4.onclick = function pictureRechange1()
{
    document.getElementById("size-img1").src="IMG_4009.JPG";
}


theButton5.onclick = function pictureChange2()
{
   document.getElementById("size-img2").src="IMG_4001.JPG";
}
theButton6.onclick = function pictureRechange2()
{
    document.getElementById("size-img2").src="IMG_3999.JPG";
}
theButton7.onclick = function pictureChange2()
{
   document.getElementById("size-img2").src="IMG_4000.JPG";
}

theButton8.onclick = function pictureChange2()
{
   document.getElementById("size-img3").src="IMG_4011.JPG";
}
theButton9.onclick = function pictureRechange2()
{
    document.getElementById("size-img3").src="IMG_4012.JPG";
}
theButton10.onclick = function pictureChange2()
{
   document.getElementById("size-img3").src="IMG_3597 2.png";
}

theButton11.onclick = function pictureChange3()
{
   document.getElementById("final-image").src="IMG_4014.JPG";
}

theButton12.onclick = function pictureChange3()
{
   document.getElementById("final-image").src="IMG_4013.JPG";
}


/*Toggle and show button*/
function myFunction55() {
  var x = document.getElementById("frames");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}