$(document).ready(function() {
  var calendarArray = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

  $("#currentDay").text(moment().format("MMMM Do YYYY"));

  function init(){
    if(localStorage.getItem("calendarArray") !== null){
      calendarArray = JSON.parse(localStorage.getItem("calendarArray"));
    }else{
      localStorage.setItem("calendarArray", JSON.stringify(calendarArray));
    }
  }

  init();

  for (var i = 9; i < 18; i++) {
    var timeText;
    if (i === 9) {
      timeText = moment("2013-02-08 0" + i).format("LT");
    } else {
      timeText = moment("2013-02-08 " + i).format("LT");
    }
    var timeBlock = $("<div>");
    timeBlock.addClass("row time-block");
    var hourEl = $("<div>");
    hourEl.addClass("col-1 hour");
    hourEl.text(timeText);
    var textareaEl = $("<textarea>");
    textareaEl.addClass("col-10");
    textareaEl.val(calendarArray[i- 9]);
    if(moment().hour() > i){
      textareaEl.addClass("past");
    }else if(moment().hour() == i){
      textareaEl.addClass("present");
    }else {
      textareaEl.addClass("future");
    }
    var saveButton = $("<button>");
    saveButton.addClass("col-1 saveBtn");
    saveButton.attr("data-time", i);
    $("#calendar").append(timeBlock);
    timeBlock.append(hourEl);
    timeBlock.append(textareaEl);
    timeBlock.append(saveButton);
  }

  function save(event) {
    if (event.target.type === "submit") {
      calendarArray[parseInt(event.target.getAttribute("data-time")) - 9] =
        event.target.previousSibling.value;
      localStorage.setItem("calendarArray", JSON.stringify(calendarArray));
      console.log(calendarArray);
    }
  }

  $("#calendar").on("click", save);

  console.log(moment("2013-02-08 09").format("LT"));
});

//TODO
//check if works with empty local storage
//change block color based on time
