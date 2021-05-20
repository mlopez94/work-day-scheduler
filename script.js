$("#currentDay").text(moment().format("[Today's Date is: ] dddd, MMM Do")); //easier way to write time in JQuery using moment

//var currentTime = parseInt(moment().format("HH")); // turning hour into an integer to test number




    // changing colors of input fields

   
      var thisHour = moment().format("HH");
       // var thisHour = parseInt("14");
      //  console.log(thisHour);

      $(".time-block").each(function () {
          var txtInput = parseInt($(this).attr("id").split("-")[1]);

          //
          if (thisHour < txtInput) {
              $(this).find("input").addClass("future");
          }
          else if (thisHour == txtInput) {
              $(this).find("input").addClass("present");
          }
          else{
              $(this).find("input").addClass("past");
          }
      });
   
  
  

// $(".time-block").each(function () {
//   var hrDiv = parseInt($(this).attr("id").split(".")[1]);
  

//   if (hrDiv < currentTime) {
//     $(this).find("input")
//     .addClass("future");

//   } else if (hrDiv == currentTime) {
//       $(this).find("input")
//       .addClass("present");

//   } else (hrDiv > currentTime) 
//       $(this).find("input")
//       .addClass("past");

//       var hrID = $(this).attr("id"
      
//       )
  


// })


// Click event function
// $(Document).ready(function() {
//     $(".saveBtn").on("click", function() {
        

//         var text = $(this).siblings("description").val()
//         var time = $(this).parent().attr("id")

//         localStorage.setItem(time, text);

    
//     });

// });  


