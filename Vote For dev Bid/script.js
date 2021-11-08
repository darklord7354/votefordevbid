const scrollToTop = document.getElementById("scrollup")

scrollToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

const scrollToTop1 = document.getElementById("btn2")

scrollToTop1.addEventListener("click", function () {
    window.scrollTo({
        top: 450,
        left: 0,
        behavior: "smooth"
    })
})

document.getElementById("btn1").onclick = function() {
    window.open(
        'https://resource.commutree.com/PC/E/1029689729656192609.html',
        '_blank' // <- This is what makes it open in a new window.
      );
}