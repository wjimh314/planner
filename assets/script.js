var rightNow = moment().format("MMMM Do YYYY, h:mm:ss a");

const timeBlock = document.querySelector("#time-block");

function displayTime() {
	timeBlock.innerHTML = rightNow;
}
displayTime();

var row = document.querySelector("row");

let timeBlock = [
	"9am",
	"10am",
	"11am",
	"12am",
	"1pm",
	"2pm",
	"3pm",
	"4pm",
	"5pm",
];

$(document).on("click", ".saveBtn", function () {
	var SaveBtnValue = $(this).val();
	var desctiption = document.getElementById(SaveBtnValue).value;
	localStorage.setItem(SaveBtnValue, desctiption);
});
