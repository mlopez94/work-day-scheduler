function toDate() {

    var newDate = moment()

    var displayDate = document.getElementById('currentDay');
    displayDate.innerHTML = moment().format("[Today's Date is: ] dddd, MMM Do");



};

toDate();