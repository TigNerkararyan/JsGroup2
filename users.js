function usersArray(array){
    for (let i = 0; i < array.length; i++) {
        array[i].hobbies.push("listen music")
        
    }
    delete(array[1].surname)
    return array
    
}




const users = [
    {
        name: "Poxoxs",
        surname: "Poxosyan",
        age: 18,
        hobbies: ["guitar", "films"]
    },
    {
        name: "Petros",
        surname: "Petrosyan",
        age: 16,
        hobbies: ["developing"]
    },
    {
        name: "Martiros",
        surname: "Martirosyan",
        age: 19,
        hobbies: ["films","eating"]
    },
    {
        name: "Petros",
        surname: "Poxosyan",
        age: 15,
        hobbies: ["smoking"]
    },
    {
        name: "Poxos",
        surname: "Petrosyan",
        age: 56,
        hobbies: ["drugs"]
    },
    {
        name: "Sos",
        surname: "Tonoyan",
        age: 18,
        hobbies: ["films"]
    },
    {
        name: "Ara",
        surname: "Martirosyan",
        age: 48,
        hobbies: ["singing"]
    },
    {
        name: "Artur",
        surname: "Gabrielyan",
        age: 65,
        hobbies: ["talking"]
    },
    {
        name: "Ani",
        surname: "Saqanyan",
        age: 17,
        hobbies: ["reading"]
    },
    {
        name: "Mery",
        surname: "Frangulyan",
        age: 16,
        hobbies: ["drinking"]
    }
]

console.log(usersArray(users))