let id = 'Dit ID: 0';
let date = '01/01/2025';
let time = '00:00:00';
let people = '0 i Byen -';

function setId(x) {
    id = `Dit Id: ${x}`;
}

function setDate(day, month, year) {
    date = `${day}/${month}/${year}`;
}

function setTime(newTime) {
    time = `${newTime.hours}:${newTime.minutes}:${newTime.seconds}`;
}

function setPeople(x) {
    people = `${x} i Byen -`;
}


function setInformation() {
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");
    const idElement = document.getElementById("id");
    const peopleElement = document.getElementById("people");

    dateElement.innerHTML = date;
    timeElement.innerHTML = time;
    idElement.innerHTML = id;
    peopleElement.innerHTML = people
}

setInterval(setInformation, 1000);

window.addEventListener('message', (event) => {
    setId(event.data.id);
    setPeople(event.data.players);
    setDate(event.data.date.day, event.data.date.month, event.data.date.year);
    setTime(event.data.time);

});