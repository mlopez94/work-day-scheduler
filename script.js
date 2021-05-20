$("#currentDay").text(moment().format("[Today's Date is: ] dddd, MMM Do")); //easier way to write time in JQuery using moment

// variable for containing current time
var thisHour = moment().format("HH");
// var thisHour = parseInt("14");


$(".time-block").each(function () {
  var txtInput = parseInt($(this).attr("id").split("-")[1]);

  // Changing colors of input fields
  if (thisHour < txtInput) {
    $(this).find("input").addClass("future");
  } else if (thisHour == txtInput) {
    $(this).find("input").addClass("present");
  } else {
    $(this).find("input").addClass("past");
  }
});

// OnClick Function
$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".textarea").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, text);
});

// Local storage for text content in divs
var val9 = localStorage.getItem("hr-9")
$("#hr-9").find("input").val(val9);

var val10 = localStorage.getItem("hr-10")
$("#hr-10").find("input").val(val10);

var val11 = localStorage.getItem("hr-11")
$("#hr-11").find("input").val(val11);

var val12 = localStorage.getItem("hr-12")
$("#hr-12").find("input").val(val12);

var val13 = localStorage.getItem("hr-13")
$("#hr-13").find("input").val(val13);

var val14 = localStorage.getItem("hr-14")
$("#hr-14").find("input").val(val14);

var val15 = localStorage.getItem("hr-15")
$("#hr-15").find("input").val(val15);

var val16 = localStorage.getItem("hr-16")
$("#hr-16").find("input").val(val16);

var val17 = localStorage.getItem("hr-17")
$("#hr-17").find("input").val(val17);
