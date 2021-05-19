$("#currentDay").text(moment().format("[Today's Date is: ] dddd, MMM Do")); //easier way to write time in JQuery using moment

var currentTime = parseInt(moment().format("HH")); // turning hour into an integer to test number

$(".time-block").each(function () {
  var hrDiv = parseInt($(this).attr("id").split(".")[1]);

  if (hrDiv < currentTime) {
    $(this).find("input")
    .addClass("future");

  } else if (hrDiv == currentTime) {
      $(this).find("input")
      .addClass("present");

  } else (hrDiv > currentTime) 
      $(this).find("input")
      .addClass("past");
  


});

$("saveBtn").click(function() {

})


