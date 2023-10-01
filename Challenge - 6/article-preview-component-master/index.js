const shareBtn = document.getElementById("share");
const Toolkitele = document.getElementById("toolkit");
shareBtn.addEventListener('click', () => {
    if (Toolkitele.style.visibility === "visible") {
        Toolkitele.style.visibility = "hidden";
    }
    else {
        Toolkitele.style.visibility = "visible"
    }
})