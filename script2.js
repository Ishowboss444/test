let input1 = document.getElementById('input-date');
let timeJustRightNow = moment();
let finished = document.getElementById;
let monthnow = document.getElementById('current-date');
let monthOnShow = timeJustRightNow.jMonth("MM");
let yearOnShow = timeJustRightNow.jYear();
let dateOnShow = timeJustRightNow.jDate();
let dayOnShow = timeJustRightNow.jDay();
let daysInMonth = timeJustRightNow.daysInMonth();
let day = document.getElementById('day')
let monthLab = document.getElementById('month')
let year = document.getElementById('year')

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

monthLab.innerHTML = `${moment().local('fa').format("jMMMM")} / `
year.innerHTML = `${moment().local('fa').format("jYYYY")} / `
day.innerHTML = `${moment().local('fa').format("jD")} / `


//لوپ برای جنریت روز های هر ماه
window.onload = function () {
    for (let x = 0; x < dayOnShow; x++) {
        let div = document.getElementById('heyy');
        let spanMade = document.createElement('span');
        spanMade.classList.add('unhover');
        div.insertBefore(spanMade, div.firstChild);
        gheyb.classList.add('none');
    }

    let spanYear = document.getElementById("yearMenu")
    let yearCounter;
    let spanGenerator = ""
    const secondMenu = document.getElementById("yearMenu")
    for(yearCounter = 0 ; yearCounter <= 100 ; yearCounter++) {
        const addSpan =
            `
    <span class="unhover">${yearOnShow - yearCounter}</span>
        `
        spanGenerator += addSpan
    }

    spanYear.innerHTML = spanGenerator

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
    // console.log(monthOnShow.add(1 , "month"))
    let result = monthOnShow.add(1 , "month").format("jMMMM")
    monthLab.innerHTML= result
    monthOnShow = result
    // // console.log(monthOnShow)
    //
    // monthnow.innerHTML = month[i];

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
    // console.log(theDay);
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

document.getElementById("yearMenu").addEventListener("click" , function hi(event){
    event.stopPropagation()
    let afterClickYear = Number((moment(`${event.target.textContent}`).format('YYYY')));
    yearOnShow = afterClickYear
    console.log(yearOnShow)
})
