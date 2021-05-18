function toDate() {

    var newDate = moment()

    var displayDate = document.getElementById('currentDay');
    displayDate.innerHTML = moment().format('L');



};

toDate();