import "./style.css";

const body = document.body;

function handleresize() {
    const width = window.innerWidth;

    if (width < 400) {
        body.style.backgroundColor = "skyblue";
    } else if (width >= 400 && width < 700) {
        body.style.backgroundColor = "cornflowerblue";
    } else {
        body.style.backgroundColor = "royalblue";
    }
}

window.addEventListener("resize", handleresize);