$(document).ready(function(){
    $("#currentDay").text(moment().format('MMMM Do YYYY'));

    for(var i = 9; i < 18; i++){
        var timeText;
        if(i ===9){
            timeText = moment("2013-02-08 0" + i).format("LT");
        } else{
            timeText = moment("2013-02-08 " + i).format("LT");
        }
        var timeBlock = $("<div>");
        timeBlock.addClass("row time-block");
        var hourEl = $("<div>");
        hourEl.addClass("col-1 hour");
        hourEl.text(timeText);
        var textareaEl = $("<textarea>");
        textareaEl.addClass("col-10 future");
        var saveButton = $("<button>"); 
        saveButton.addClass("col-1 saveBtn");
        $("#calendar").append(timeBlock);
        timeBlock.append(hourEl);
        timeBlock.append(textareaEl);
        timeBlock.append(saveButton);
    }

    function save(event){
        if(event.target.type === "submit"){
        console.log(event.target.type);
        }
    }

    $("#calendar").on("click", save);

    console.log(moment("2013-02-08 09").format("LT"));
    // <div class="row time-block">
    //     <div class="col-1 hour"><span>9:00</span></div>
    //     <textarea class="col-10 future textarea"></textarea>
    //     <div class="col-1 saveBtn"><i class="far fa-save fa-3x"></i></div>
    // </div>








});
