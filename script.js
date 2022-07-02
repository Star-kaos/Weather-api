console.log("Ready to go!")

//request to site
function loadRequest(weatherUrl) {
    const request = new XMLHttpRequest();
    request.onload = () => {
        if (request.readyState === 4 && request.status === 200) {
            let weatherData = JSON.parse(request.response)
            displayTemp(weatherData)
        }
    }
    request.open('GET', weatherUrl)
    request.send();
}

//on submit button clicked
document.getElementById("lat-lonSubmit").addEventListener("click", () => {
    let lat = document.getElementById("latInput").value;
    let lon = document.getElementById("lonInput").value;

    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0c3e0d4bdcbfe0078f4447929dd81bff&units=imperial`;

    //starting call request
    loadRequest(weatherUrl)
})

//display temp
function displayTemp(weatherData) {
    console.log(weatherData.main.temp)
    document.getElementById("requestH").innerHTML = `Your temp is: ${weatherData.main.temp} °f`;
}