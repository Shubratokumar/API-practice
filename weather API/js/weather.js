const loadWeather = () =>{
    fetch('https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0')
    .then(res => res.json())
    .then(data => displayWeather(data.dataseries))
}

// call function for load
// loadWeather()

const displayWeather = updates => {
    // console.log(updates);
    updates.forEach( update => {
        // console.log(update);
        const weatherDiv = document.getElementById('weather-container');
        const div = document.createElement('div');
        div.classList.add('weather-style')
        div.innerHTML = `
            <h3> Weather Updates : </h3>
            <p>Time Point : ${update.timepoint}</p>
            <p>Cloud Cover : ${update.cloudcover}</p>
            <p>Cloud Seeing : ${update.seeing}</p>
            <p>Transparency : ${update.transparency}</p>
            <p>Lifted Index : ${update.lifted_index}</p>
            <p>rh2m : ${update.rh2m}</p>
            <p>Prec Type : ${update.prec_type}</p>
            <p>Temp2m : ${update.temp2m}</p>
            <h4> Wind10m : </h4>
            <p>Direction : ${update.wind10m.direction}</p>
            <p>Speed : ${update.wind10m.speed}</p>
        `;
        weatherDiv.appendChild(div)
    })
}

/* cloudcover: 1
lifted_index: 15
prec_type: "none"
rh2m: 4
seeing: 7
temp2m: 15
timepoint: 3
transparency: 2
wind10m:
direction: "N"
speed: 2 */