let button = document.getElementById('this_is_a_button');
// let month = document.getElementById('input');
let month = document.getElementById('select_month');
let day = document.getElementById('select_day');
let type = document.getElementById('select_type');
let section = document.getElementById('section');
let key = config.apiKey;
console.log(key);

for(let i = 1; i <= 31; i++) {
    let dayOption = document.createElement('option');
    let dayNumber = i;
    dayOption.innerText = dayNumber;
    day.appendChild(dayOption);
}

const fetchThat = () => {

    fetch(`https://calendarific.com/api/v2/holidays?api_key=${config.apiKey}&country=US&year=2022&month=${month.value}&day=${day.value}&type=${type.value}`)
        .then(res => res.json())
        .then(data => {
            gotIt(data)
        })
}

function gotIt(json) {

    let holidays = json.response.holidays

    for(let i = 0; i < holidays.length; i++) {
        let holiday = holidays[i];
        console.log(holiday.states[i]);
    }

}

button.addEventListener('click', fetchThat);