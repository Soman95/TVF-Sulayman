const calendar = document.getElementById('appCalendar');

const isWeekend = day => {
    //6 when it's Saturday and 0 when it's Sunday
    return day % 7 === 6 || day % 7 === 0;
}

const getDayName = day => {
    const date = new Date(Date.UTC(2021, 2, day));

    return new Intl.DateTimeFormat("en-GB", { weekday: "short" })
        .format(date);
}

for (let day = 1; day <= 31; day++) {

    const weekend = isWeekend(day);

    const dayName = getDayName(day);

    calendar.insertAdjacentHTML("beforeend", `<div class="day ${weekend ? "weekend" : ""}"><div class="name">${dayName}</div>${day}</div>`);

}

document.querySelectorAll("#appCalendar .day").forEach
    (day => {
        day.addEventListener("click", e => {
            e.currentTarget.classList.toggle("selected");
            console.log(e.currentTarget)
        });
    });

