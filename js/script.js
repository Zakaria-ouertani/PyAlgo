function openNav() {
    document.getElementById("hamburger-menu-button").setAttribute("onclick", "closeNav();")
    document.getElementsByTagName("nav")[0].style.width = "13vw"
    document.getElementsByTagName("main")[0].style.marginLeft = "13vw"
}

function closeNav() {
    document.getElementById("hamburger-menu-button").setAttribute("onclick", "openNav();")
    document.getElementsByTagName("nav")[0].style.width = "0"
    document.getElementsByTagName("main")[0].style.marginLeft = "0"
}