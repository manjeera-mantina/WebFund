var logoSpace = document.querySelector("#gitinfo");
console.log("Helo");
async function getGitInfo(){
    var response = await fetch("https://api.github.com/users/manjeera-mantina");
    var userData = await response.json();
    //console.log(userData);

    logoSpace.innerHTML = makeUserData(userData);
}

function makeUserData(data){
 //console.log(`this is my pic ${data.avatar_url}`);

var res = `<span class="logo">
            <img src="${data.avatar_url}" alt="${data.name}" width="100">
            <p>${data.login} (GitHub login)</p>
            </span>`

        return res;
}

function scale(imag, n){
    imag.style.transform = "scale("+n+")";
}

/*var btns = document.querySelectorAll("button");
    
for(var i=0; i<btns.length; i++) {
    btns[i].addEventListener("click", function(){
        alert("Button clicked for "+ btns[i].innerText );
    });
}*/
function alrt(btn){
alert("Button clicked for " + btn.innerText);
}

function fad(imag){
  //  console.log("i");
    imag.classList.fadeIn(3000);
   // imag.style.display="block";
}
/*function out(imag){
   // console.log("o");
    imag.classList.fadeout();
    //imag.style.display="none";
}*/



/*function shHdF(imag){
    imag.classList.fadeToggle();
}
function shHdsF(imag){
    imag.classList.slideToggle();
}

/*$('.first-image').mouseover(function(){
    $(this).toggleClass('second-image');	
});
$('.second-image').mouseover(function(){
    $(this).toggleClass('first-image');	
});*/