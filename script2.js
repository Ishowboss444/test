let input1 = document.getElementById('input-date');
let timeJustRightNow = moment();
let finished = document.getElementById;
let monthnow = document.getElementById('current-date');
let monthOnShow = timeJustRightNow.jMonth();
let yearOnShow = timeJustRightNow.jYear();
let dateOnShow = timeJustRightNow.jDate();
let dayOnShow = timeJustRightNow.jDay();
let daysInMonth = timeJustRightNow.daysInMonth();


const month = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'ابان', 'اذر', 'دی', 'بهمن', 'اسفند'];
let outPut = month[monthOnShow];
dateOnShow.value = 1;
timeJustRightNow = timeJustRightNow.format('jYYYY/jM/jD');
let defaultText = `${dateOnShow} | ${month[monthOnShow]} | ${yearOnShow}`;
input1.value = defaultText;
const resetdayOneShow = dayOnShow;
const nextSpan = document.getElementById('next-month');
const perivious = document.getElementById('pereveus-month');
let gheyb = document.getElementById('external');
//اعداد 29 تا 31
const twenty9 = document.getElementById('twenty9');
const thirty = document.getElementById('thirty');
const thirty1 = document.getElementById('thirty1');

monthnow.innerHTML = outPut;


//لوپ برای جنریت روز های هر ماه
window.onload = function () {
    for (let x = 0; x < dayOnShow; x++) {
        let div = document.getElementById('heyy');
        let spanMade = document.createElement('span');
        spanMade.classList.add('unhover');
        div.insertBefore(spanMade, div.firstChild);
        gheyb.classList.add('none');
    }
};
//تمام


input1.addEventListener('click', function () {
    gheyb.classList.remove('none');
});
let e;
let r = 0;
let textResult = ['', '', ''];
let i = monthOnShow;
// console.log(i)
const persianDateInMonth = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];

nextSpan.addEventListener('click', function () {
    i++;
    if (i > 11) {
        i = 0;
        r++;

    }
    monthOnShow = i;
    // console.log(monthOnShow)

    monthnow.innerHTML = month[i];
    if (persianDateInMonth[i] < 31 && persianDateInMonth[i] > 29) {
        thirty1.classList.add('none');
    } else if (persianDateInMonth[i] < 30 && persianDateInMonth[i] > 28) {
        thirty.classList.add('none');
    } else {
        thirty.classList.remove('none');
        thirty1.classList.remove('none');
    }

    for (let n = 0; n < dayOnShow; n++) {
        let div = document.getElementById('heyy');
        let spanMade = document.createElement('span');
        spanMade.classList.add('unhover');
        div.insertBefore(spanMade, div.firstChild);

    }

});


perivious.addEventListener('click', function () {
    i--;
    if (i < 0) {
        i = 11;
        r--;
    }
    monthnow.innerHTML = month[i];

    if (persianDateInMonth[i] < 31 && persianDateInMonth[i] > 29) {
        thirty1.classList.add('none');
    } else if (persianDateInMonth[i] < 30 && persianDateInMonth[i] > 28) {
        thirty.classList.add('none');
    } else {
        thirty.classList.remove('none');
        thirty1.classList.remove('none');
    }

    // e = e + "heeey"
    for (let d = 0; d < dayOnShow; d++) {
        let div = document.getElementById('heyy');
        let spanMade = document.createElement('span');
        spanMade.classList.add('unhover');
        div.insertBefore(spanMade, div.firstChild);


    }

});

// console.log(i)
function doLog(input) {
    let theDay = input;
    console.log(theDay);
    textResult[0] = input;
    dateOnShow = input;
    e = `${input} | ${month[i]} | ${yearOnShow + r}`;
    input1.value = e;
    gheyb.classList.add('none');
}

function resetTime() {
    timeJustRightNow = moment();
    timeJustRightNow = timeJustRightNow.format('jYYYY/jM/jD');
    input1.value = defaultText;
    // console.log(defaultText)
    monthnow.innerHTML = month[monthOnShow];

    if (month[resetdayOneShow] != month[resetdayOneShow]) {

        for (let m = 0; m < dayOnShow; m++) {
            let div = document.getElementById('heyy');
            let spanMade = document.createElement('span');
            spanMade.classList.add('unhover');
            div.insertBefore(spanMade, div.firstChild);
        }
    }

    gheyb.classList.add('none');
};


const dfdf = document.getElementsByTagName('body')[0];
console.log(dfdf);

