const array = [
    {
        name:"Sos",
        surname:"Tonoyan",
        age: 18,
        avatar:"sos.jpg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere labore eos quia corrupti voluptate praesentium sit architecto cum, recusandae quaerat rem possimus quasi quo numquam blanditiis non perferendis itaque magni."
    },
    {
        name:"Poxos",
        surname:"Poxosyan",
        age: 28,
        avatar:"sos.jpg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere labore eos quia corrupti voluptate praesentium sit architecto cum, recusandae quaerat rem possimus quasi quo numquam blanditiis non perferendis itaque magni."
    },
    {
        name:"Petros",
        surname:"Petrosyan",
        age: 25,
        avatar:"sos.jpg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere labore eos quia corrupti voluptate praesentium sit architecto cum, recusandae quaerat rem possimus quasi quo numquam blanditiis non perferendis itaque magni."
    },
    {
        name:"Martiros",
        surname:"Martirosyan",
        age: 26,
        avatar:"sos.jpg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere labore eos quia corrupti voluptate praesentium sit architecto cum, recusandae quaerat rem possimus quasi quo numquam blanditiis non perferendis itaque magni."
    }
]

for (let i = 0; i < array.length; i++) {
    let card = document.getElementById("card")
    const renderHtml = `<div id="card" class="card" style="width: 18rem;">
    <img src="${array[i].avatar}" class="card-img-top" alt="avatar">
<div class="card-body">
  <h5 class="card-title">${array[i].name} ${array[i].surname},   ${array[i].age}</h5>
  <p class="card-text">${array[i].info}</p>
  <a href="#" class="btn btn-primary">More info</a>
</div>`;


card.innerHTML = renderHtml

}
