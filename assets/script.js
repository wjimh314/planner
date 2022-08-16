var rightNow = moment().format("MMMM Do YYYY, h:mm:ss a");
var description = $("#description").val();
const timeBlock = document.querySelector("#time-block");

function displayTime() {
	timeBlock.innerHTML = rightNow;
}
displayTime();

var row = document.querySelector("row");

let time = ["9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm"];

$(".saveBtn").on("click", function () {
	var SaveBtnValue = "skfjhslkgf";
	console.log(SaveBtnValue, description);

	localStorage.setItem(SaveBtnValue, description);
});
