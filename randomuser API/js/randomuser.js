const loadUser = () => {
    fetch('https://randomuser.me/api/?results=4')
    .then(res => res.json())
    .then(data => displayUser(data.results))

}
//  call function
loadUser()

const displayUser = users => {
    // console.log(users);
    users.forEach( user => {
        console.log(user);
        const userContainer = document.getElementById('user-container')
        const div = document.createElement('div');
        // give a class to div
        div.classList.add('user-style');
        div.innerHTML = `
            <img src = "${user.picture.medium}">
            <p>Name : ${user.name.title} ${user.name.first} ${user.name.last}</p>
            <p>Gender : ${user.gender}</p>
            <p>Email : ${user.email}</p>
            <div> 
                <h3>Location : </h3>
                    <p>Street Number : ${user.location.street.number}</p>
                    <p>Street name : ${user.location.street.name}</p>
                    <p>City : ${user.location.city}</p>
                    <p>State : ${user.location.state}</p>
                    <p>Postcode : ${user.location.postcode}</p>
                <h4>Coordinates : </h4>
                    <p>Latitude : ${user.location.coordinates.latitude}</p>
                    <p>Longitude : ${user.location.coordinates.longitude}</p>
                <h4>Timezone : </h4>
                    <p>Offset : ${user.location.timezone.offset}</p>
                    <p>Description : ${user.location.timezone.description}</p>
            </div>
            <div>
                <h4>Login : </h4>
                <p>UUID : ${user.login.uuid}</p>
                <p>Username : ${user.login.username}</p>
                <p>Password : ${user.login.password}</p>
                <p>Salt : ${user.login.salt}</p>
                <p>MD5 : ${user.login.md5}</p>
                <p>Sha1 : ${user.login.sha1}</p>
                <p>Sha256 : ${user.login.sha256}</p>
            </div>
            <div>
                <h4>DoB : </h4>
                <p>Date : ${user.dob.date}</p>
                <p>Age : ${user.dob.age}</p>
            </div>
            <div>
                <h4>Registered : </h4>
                <p>Date : ${user.registered.date}</p>
                <p>Age : ${user.registered.age}</p>
            </div>
            <p>Phone : ${user.phone}</p>
            <p>Cell : ${user.cell}</p>
            <div>
                <h4>ID : </h4>
                <p>Name : ${user.id.name}</p>
                <p>Value : ${user.id.value}</p>
            </div>
            <p>Nat : ${user.nat}</p>

            
        `;
        // <img src = "${user.picture.thumbnail}"></img>
        userContainer.appendChild(div);
    } )
}