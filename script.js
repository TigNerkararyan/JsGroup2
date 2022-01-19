const users = [
    {
        name: "Armen",
        suername: "Sargsyan",
        age: 25,
        avatar: "https://www.pngarts.com/files/3/Avatar-PNG-Free-Download.png",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem iure debitis reiciendis natus nihil consequatur at explicabo, animi eum rem nulla corporis. Voluptate nostrum sed consequatur repellat, maxime facilis incidunt?"
    },
    {
        name: "Armen1",
        suername: "Sargsyan1",
        age: 25,
        avatar: "https://www.pngarts.com/files/3/Avatar-PNG-Free-Download.png",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem iure debitis reiciendis natus nihil consequatur at explicabo, animi eum rem nulla corporis. Voluptate nostrum sed consequatur repellat, maxime facilis incidunt?"
    },
    {
        name: "Armen2",
        suername: "Sargsyan2",
        age: 25,
        avatar: "https://www.pngarts.com/files/3/Avatar-PNG-Free-Download.png",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem iure debitis reiciendis natus nihil consequatur at explicabo, animi eum rem nulla corporis. Voluptate nostrum sed consequatur repellat, maxime facilis incidunt?"
    }
];

let card = document.getElementById("card");
users.map((item => {
    card.innerHTML += `
    <div class="col">
        <img src="${item.avatar}" class="card-img-top" alt="avatar">
        <div class="card-body">
        <h5 class="card-title">${item.name} ${item.suername}</h5>
        <p>
            <span>Age: </span> <span>${item.age}</span>
        </p>
        <p class="card-text">${item.age}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`
}))

