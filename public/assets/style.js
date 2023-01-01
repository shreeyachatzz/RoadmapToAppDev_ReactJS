
AOS.init();
window.addEventListener("scroll",function(){
    const header= document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});


let pick=document.getElementById("pick");
function openPick(){
    pick.classList.add("open-pick");
}
function closePick(){
    pick.classList.remove("open-pick");
}


let fundamental=document.getElementById("fundamental");
function openFundamental(){
    fundamental.classList.add("open-fundamental");
}
function closeFundamental(){
    fundamental.classList.remove("open-fundamental");
}

let version=document.getElementById("version");
function openVersion(){
    version.classList.add("open-version");
}
function closeVersion(){
    version.classList.remove("open-version");
}

let build=document.getElementById("build");
function openBuild(){
    build.classList.add("open-build");
}
function closeBuild(){
    build.classList.remove("open-build");
}

let repo=document.getElementById("repo");
function openRepo(){
    repo.classList.add("open-repo");
}
function closeRepo(){
    repo.classList.remove("open-repo");
}

let pro1=document.getElementById("pro1");
function openPro1(){
    pro1.classList.add("open-pro1");
}
function closePro1(){
    pro1.classList.remove("open-pro1");
}

let pro2=document.getElementById("pro2");
function openPro2(){
    pro2.classList.add("open-pro2");
}
function closePro2(){
    pro2.classList.remove("open-pro2");
}

let pro3=document.getElementById("pro3");
function openPro3(){
    pro3.classList.add("open-pro3");
}
function closePro3(){
    pro3.classList.remove("open-pro3");
}

let pro4=document.getElementById("pro4");
function openPro4(){
    pro4.classList.add("open-pro4");
}
function closePro4(){
    pro4.classList.remove("open-pro4");
}

let pro5=document.getElementById("pro5");
function openPro5(){
    pro5.classList.add("open-pro5");
}
function closePro5(){
    pro5.classList.remove("open-pro5");
}


$("#inline-popups").magnificPopup({
delegate: "a",
removalDelay: 500, //delay removal by X to allow out-animation
callbacks: {
beforeOpen: function () {
    this.st.mainClass = this.st.el.attr("data-effect");
}
},
midClick: true 
});
