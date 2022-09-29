const h1 = document.querySelector(".hello h1:first-child");

const superEventHandler = {

    handleMouseEnter: function(){
        h1.innerText = "Mouse is here!";
        h1.style.color = "tomato";
    },

    handleMouseLeave: function() {
        h1.innerText = "Mouse is gone!";
        h1.style.color = "cornflowerblue";
    },

    handleWindowResize: function() {
        h1.innerText = "You just resized!";
        h1.style.color = "gold";
    },

    handleMouseWindowAuxclick: function() {
        h1.innerText = "That was a right click!"
        h1.style.color = "lightseagreen";
    }
};


h1.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
h1.addEventListener("mouseleave", superEventHandler.handleMouseLeave);

window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("auxclick", superEventHandler.handleMouseWindowAuxclick);