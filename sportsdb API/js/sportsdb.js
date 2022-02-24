const loadSports = () => {
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
    .then(res => res.json())
    .then(data => displaySports(data.sports))
}
// call function : loadSports()
loadSports()

const displaySports = sports => {
    // console.log(sports);
    for(const sport of sports){
        // console.log(sport);
        const sportsDiv = document.getElementById('sports-container');
        const div = document.createElement('div');
        div.classList.add('sports-style')
        div.innerHTML = ` 
            <p>Sports ID : ${sport.idSport} </p>
            <p>Format : ${sport.strFormat} </p>
            <p>Sports Name : ${sport.strSport} </p>
            <p>Sports Description : ${sport.strSportDescription.slice(0, 100)}</p>
            <h4>Sports Icon Green : </h4>
            <img src = "${sport.strSportIconGreen}">
        `;
        sportsDiv.appendChild(div);
    }
    
}

// codes for spinner while loading
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
        "body").style.visibility = "hidden";
        document.querySelector(
        "#loader").style.visibility = "visible";
    } 
    else {
        document.querySelector(
        "#loader").style.display = "none";
        document.querySelector(
        "body").style.visibility = "visible";
    }
};