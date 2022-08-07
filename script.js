// Moment statement for day and time 
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// Moment live time 
var liveTime = moment();
// Adjusts current time to the nearest hour. Example: 4:15 becomes 4:00
liveTime = liveTime.startOf("hour");
// generates the beginning of the workday at 9 am
var preTime = moment().startOf('day').add(9, "hours");

// Time blocks
// 9 AM 
var timeblock1 = preTime.add(0, "h");
timeblock1 = timeblock1.format('hh:mm A');
// generates time formula into html for this variable and all variables below
$(".block1").text(timeblock1);
// 10 AM
var timeblock2 = preTime.add(1, "h");
timeblock2 = timeblock2.format('hh:mm A');
$(".block2").text(timeblock2);
// 11 AM
var timeblock3 = preTime.add(1, "h");
timeblock3 = timeblock3.format('hh:mm A');
$(".block3").text(timeblock3);
// 12 PM
var timeblock4 = preTime.add(1, "h");
timeblock4 = timeblock4.format('hh:mm A');
$(".block4").text(timeblock4);
// 1 PM
var timeblock5 = preTime.add(1, "h");
timeblock5 = timeblock5.format('hh:mm A');
$(".block5").text(timeblock5);
// 2 PM
var timeblock6 = preTime.add(1, "h");
timeblock6 = timeblock6.format('hh:mm A');
$(".block6").text(timeblock6);
// 3 PM
var timeblock7 = preTime.add(1, "h");
timeblock7 = timeblock7.format('hh:mm A');
$(".block7").text(timeblock7);
// 4 PM
var timeblock8 = preTime.add(1, "h");
timeblock8 = timeblock8.format('hh:mm A');
$(".block8").text(timeblock8);
// 5 PM
var timeblock9 = preTime.add(1, "h");
timeblock9 = timeblock9.format('hh:mm A');
$(".block9").text(timeblock9);

// Function for time blocks to sync with current time 
function checkTime() {
    // sync time1 to 9AM timeblock
    time1 = moment().startOf('day').add(9, "hours");
    // Adjusts current time to the hour
    liveTime = liveTime.startOf("hour");
    // Add time1 if/else
    if (liveTime.isAfter(time1)) {
        $(".form9").addClass("past");
    }
    else if (liveTime.isBefore(time1)) {
        $(".form9").addClass("future");
    }
    else if (liveTime.isSame(time1)) {
        $(".form9").addClass("present");
    };
    // Sync time2 to 10AM timeblock
    time2 = moment().startOf('day').add(10, "hours");
    // Add time2 if/else
    if (liveTime.isAfter(time2)) {
        $(".form10").addClass("past");
    }
    else if (liveTime.isBefore(time2)) {
        $(".form10").addClass("future");
    }
    else if (liveTime.isSame(time2)) {
        $(".form10").addClass("present");
    };
    // Sync time3 to 11AM timeblock
    time3 = moment().startOf('day').add(11, "hours");
    // Add time3 if/else
    if (liveTime.isAfter(time3)) {
        $(".form11").addClass("past");
    }
    else if (liveTime.isBefore(time3)) {
        $(".form11").addClass("future");
    }
    else if (liveTime.isSame(time3)) {
        $(".form11").addClass("present");
    };
    // sync time4 to 12PM timeblock
    time4 = moment().startOf('day').add(12, "hours");
    // Add time4 if/else
    if (liveTime.isAfter(time4)) {
        $(".form12").addClass("past");
    }
    else if (liveTime.isBefore(time4)) {
        $(".form12").addClass("future");
    }
    else if (liveTime.isSame(time4)) {
        $(".form12").addClass("present");
    };
    // sync time5 to 1PM timeblock
    time5 = moment().startOf('day').add(13, "hours");
    // Add time5 if/else
    if (liveTime.isAfter(time5)) {
        $(".form1").addClass("past");
    }
    else if (liveTime.isBefore(time5)) {
        $(".form1").addClass("future");
    }
    else if (liveTime.isSame(time5)) {
        $(".form1").addClass("present");
    };
    // sync time to 2PM timeblock
    time6 = moment().startOf('day').add(14, "hours");
    // Add time6 if/else
    if (liveTime.isAfter(time6)) {
        $(".form2").addClass("past");
    }
    else if (liveTime.isBefore(time6)) {
        $(".form2").addClass("future");
    }
    else if (liveTime.isSame(time6)) {
        $(".form2").addClass("present");
    };
    // sync time7 to 3PM timeblock
    time7 = moment().startOf('day').add(15, "hours");
    // Add time7 if/else
    if (liveTime.isAfter(time7)) {
        $(".form3").addClass("past");
    }
    else if (liveTime.isBefore(time7)) {
        $(".form3").addClass("future");
    }
    else if (liveTime.isSame(time7)) {
        $(".form3").addClass("present");
    };
    // sync time8 to 4pm timeblock
    time8 = moment().startOf('day').add(16, "hours");
    // Add time8 if/else
    if (liveTime.isAfter(time8)) {
        $(".form4").addClass("past");
    }
    else if (liveTime.isBefore(time8)) {
        $(".form4").addClass("future");
    }
    else if (liveTime.isSame(time8)) {
        $(".form4").addClass("present");
    };
    // SYnc time9 to 5pm timeblock
    time9 = moment().startOf('day').add(17, "hours");
    // Add time9 if/else
    if (liveTime.isAfter(time9)) {
        $(".form5").addClass("past");
    }
    else if (liveTime.isBefore(time9)) {
        $(".form5").addClass("future");
    }
    else if (liveTime.isSame(time9)) {
        $(".form5").addClass("present");
    };
}
checkTime();
// gets data from local storage by looping thru input 
var x = [9, 10, 11, 12, 1, 2, 3, 4, 5];
// Test loop:
for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);
    $(".form" + x[i]).val(dataHour);
}
// Event listener to save to local storage
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("data input saved");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});