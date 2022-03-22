// Time of Day References for Backgrounds //
$(document).ready(function(){
	var d = new Date();
	var n = d.getHours();
	if (n > 19 || n < 6)
	  // If time is after 7PM or before 6AM, apply night theme to ‘body’
	  document.body.className = "night";
	else if (n > 16 && n < 19)
	  // If time is between 4PM – 7PM sunset theme to ‘body’
	  document.body.className = "sunset";
	else
	  // Else use ‘day’ theme
	  document.body.className = "day";
});

// Important default API key and city information.
var key = '26ddf8f43bcf591b20c4ad83cf52357c'
var city = 'Chicago'

// This code is used to asses the current date and time.
var date = moment().format('dddd, MMMM Do YYYY');
var dateTime = moment().format('YYYY-MM-DD HH:MM:SS')

// This code generates the list of cities for local storage from Search and save it for the array.
var cityHist = [];
$('.search').on("click", function (event) {
    event.preventDefault();
    city = $(this).parent('.btnPar').siblings('.textVal').val().trim();
    if (city === "") {
        return;
    };
    cityHist.push(city)
    localStorage.setItem('city', JSON.stringify(cityHist));
    fiveForecastEl.empty();
    getHistory();
    getWeatherToday();
});

// This code is going to create additional buttons once the search option is selected.
