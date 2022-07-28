

var rightNow = moment().format("MMMM Do YYYY, h:mm:ss a");

const timeBlock = document.querySelector("#time-block");

function displayTime() {
    timeBlock.innerHTML = rightNow;
}
displayTime()