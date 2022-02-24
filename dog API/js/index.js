const loadDog = () =>{
    fetch('https://api.thedogapi.com/v1/breeds')
    .then(res => res.json())
    .then(data => displayDog(data))
}

// loadDog()

const displayDog = dogs => {
    // console.log(dogs);
    const dogContainer = document.getElementById('dog-container');
    const first50dog = dogs.slice(0, 50);
    // console.log(first50dog)
    first50dog.forEach( dog => {
        // console.log(dog)
        const div = document.createElement('div');
        div.classList.add('dog-style');
        div.innerHTML = `
            <img width="350px" height="250px" src = "${dog.image.url}">
            <p>Name : ${dog.bred_for}</p>
            <p>Dog Id : ${dog.id}</p>
            <p>Origin : ${dog.origin}</p>
            <p>Bread for : ${dog.bred_for}</p>
            <p>Bread Group : ${dog.breed_group}</p>
            <p>Life Span : ${dog.life_span}</p>
        `;
        dogContainer.appendChild(div)
    })
}
 


/* 
bred_for: "Small rodent hunting, lapdog"
breed_group: "Toy"
height:
imperial: "9 - 11.5"
metric: "23 - 29"
id: 1
image:
height: 1199
id: "BJa4kxc4X"
url: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
width: 1600
[[Prototype]]: Object
life_span: "10 - 12 years"
name: "Affenpinscher"
origin: "Germany, France"
reference_image_id: "BJa4kxc4X"
temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving"
weight:
imperial: "6 - 13"
metric: "3 - 6"
*/