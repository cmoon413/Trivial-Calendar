//Event Listeners
$(document).ready(function() {
    $(".dropdown-trigger").dropdown();
    $('a').on("click", function(event) {
        if ($(event.target).hasClass("dayDropDowns")) {
            generateCalendarByMonth(event.target.id, initialYear);
            $('#monthDropdown').text(convertMonth(event.target.id));
        }
    })

});

//runs on start
var currentDate = new Date();
var initialMonth = ((currentDate.getMonth().length + 1) === 1) ? (currentDate.getMonth() + 1) : '0' + (currentDate.getMonth() + 1);
var initialYear = currentDate.getFullYear();
$('#monthDropdown').text(convertMonth(initialMonth));
generateCalendarGrid(initialMonth, initialYear);














function generateCalendarByMonth(month, year) {
    //Removes all prev text in calendar
    for (var z = 1; z < 6; z++) {
        for (var y = 1; y < 8; y++) {
            var tmp = (z + "." + y);
            var cont = document.getElementById(tmp);
            cont.innerHTML = ("");
        }
    }

    var day = new Date(year + "-" + month + "-01").getDay();
    var dayCounter = 1;
    var numOfDays = new Date(year, month, '0').getDate();
    var firstRun = true;
    for (var j = 1; j < 6; j++) {
        for (var k = 1; k < 8; k++) {
            if (firstRun) {
                k = day;
                firstRun = false;
            }
            if (dayCounter == numOfDays + 1) { return; }
            var temp = (j + "." + k);
            var container = document.getElementById(temp);
            container.textContent = (dayCounter);
            dayCounter++;
        }

    }
}

function generateCalendarGrid(month, year) {
    var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    //this creates the first row to store days of the week
    var firstRow = $('<div>').attr('class', 'row');
    $('#calendarHolder').append(firstRow);
    //this will actually generate the days of the week in the top row
    for (var i = 0; i < 7; i++) {
        var firstCol = $('<div>').attr('class', 'col s1 daysOfWeek');
        firstCol.text(daysOfTheWeek[i]);
        firstRow.append(firstCol);
    }
    for (var i = 0; i < 5; i++) {
        var row = $('<div>').attr('class', 'row');
        $('#calendarHolder').append(row);
        for (var j = 0; j < 7; j++) {
            var col = $('<div>').attr('id', ("c" + (i + 1) + "." + (j + 1)));
            col.addClass(convertMonth(month));
            col.addClass("col s1 dayBox");
            row.append(col);
            var span = $('<span>').attr('class', 'flow-text');
            span.attr("id", (i + 1) + "." + (j + 1));
            col.append(span);

        }
    }
    generateCalendarByMonth(month, year);
}

function convertMonth(month) {
    switch (month) {
        case '01':
            return ("January");
            break;
        case '02':
            return ("February");
            break;
        case '03':
            return ("March");
            break;
        case '04':
            return ("April");
            break;
        case '05':
            return ("May");
            break;
        case '06':
            return ("June");
            break;
        case '07':
            return ("July");
            break;
        case '08':
            return ("August");
            break;
        case '09':
            return ("September");
            break;
        case '10':
            return ("October");
            break;
        case '11':
            return ("November");
            break;
        case '12':
            return ("December");
            break;
    }
}

//created modal to attach to page
function createModal() {

    var modal = $('<div>').addClass('modal').attr('id', 'modal1')
    var testcontent = $('</p>').text('hello worbl')
    var modalcontent = $('<div>').addClass('modal-content').append(testcontent)
    var closebutton = $('<a>').addClass('modal-close btn blue').text('close')
    var modalfooter = $('<div>').addClass('modal-footer').append(closebutton)
    modal.append(modalcontent).append(modalfooter)
    $('body').append(modal)


}
createModal()
    //listener to activate modal, modal trigger element have href='modal1' and class modal-trigger 
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal')
    var instances = M.Modal.init(elems)
})