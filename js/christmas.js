const clock = document.querySelector("#clock");

function countDate() {
    const christmas = new Date("2022,12,25");
    const date = new Date();
    const gap = new Date(christmas - date);

    const seconds = Math.floor(gap / 1000);
    const minutes = Math.floor(gap / (1000 * 60));
    const hours = Math.floor(gap / (1000 * 60 * 60));
    const days = Math.floor(gap / (1000 * 60 * 60 * 24));

    const dseconds = String(seconds - minutes * 60).padStart(2 ,"0");
    const dminutes = String(minutes - hours * 60).padStart(2 ,"0");
    const dhours = String(hours - days * 24).padStart(2 ,"0");
    const ddays = days;

    clock.innerText = `${ddays}d ${dhours}h ${dminutes}m ${dseconds}s`;
}

countDate();
setInterval(countDate, 1000);