console.log('App is connected');

// Protagonist of our application
const barbie = {
    name: 'Barbie',
    wardrobe: [],
    realEstate: [],
    garage:[],
    wallet: 0
}

class Career {
    constructor(name, description, income, id){
        this.name = name;
        this.description = description;
        this.income = income;
        this.id = id;
    }
}

const careerDescriptions = [
    {
        name: 'lawyer',
        description: 'works as an attorney of a high end law firm'
    },
    {
        name: 'software-engineer',
        description: 'solves software related problems and build application architecture.'
    },
    {
        name: 'doctor',
        description: 'helps people with their boo boos'
    },
    {
        name: 'influencer',
        description: 'talk about stuff on social media and people say wow and i get paid'
    }
]
const careerIncomes = [
 8501,
 18501,
 2850,
 3850,
 4850,
 5850,
 6850
];
const careers = [];


const randomization = (limit) => {
 return Math.floor(Math.random() * limit)
}


for (let i = 10 ; i > 0; i--){
 const job = careerDescriptions[randomization(careerDescriptions.length)]
 const income = careerIncomes[randomization(careerIncomes.length)];
 careers.push(new Career(job.name, job.description, income, `${job.name}-${income}` ))
}


barbie.career = careers[randomization(careers.length)]

class Clothing {
    constructor(name, designer, color, type, size, price){
        this.name = name;
        this.designer = designer;
        this.color = color;
        this.type = type;
        this.size = size;
        this.price = price;
    }
}

class Rental {
    constructor(sqft, type, location, price){
        this.sqft = sqft
        this.type = type 
        this.location = location
        this.price = price
    }
}

class Car{
    constructor(year, make, model, price){
        this.year = year 
        this.make = make
        this.model = model
        this.price = price
    }

}
const birkin = new Clothing('Birkin Bag', 'Hermes', 'purple', 'bag', 'lg', 15470 )
const redBottoms = new Clothing("Red Bottoms", "Christian Louboutin", "white", "shoes", "6", 3000)
const rental = new Rental(2000, "townhouse", "beach", 50000)
const car = new Car(2024, "Tesla", "Model Y", 50000)


// Game Screen

barbie.el = document.getElementById('barbie');

barbie.render = () => {
    barbie.el.innerHTML = `
    <h1>${barbie.name} Status</h1>
    <h3>${barbie.name} works as a ${barbie.career.name} </h3>
    <h3> Each week ${barbie.name} takes home $${barbie.career.income}</h3>
    <h3> Currently ${barbie.name} has $${barbie.wallet} in their bank account</h3>
    <div> <h2>Wardrobe Contains: </h2> 
    <ul>${
        barbie.wardrobe.map((item => {
            return `<li>
            ${barbie.name} has a ${item.color} 
            ${item.name} made by ${item.designer}
            that is worth ${item.price} in size 
            ${item.size} 
            </li>`
        })).join(" ")
    }</ul>
    </div>

    <div> <h2>Real Estate Portfolio: </h2>
    <ul>${
        barbie.realEstate.map((item =>{
            return`<li>
            ${barbie.name} has a ${item.sqft} sqft ${item.type} rental property at ${item.location} that is worth $${item.price}</li>`
        })).join(" ")
    }</ul>
    </div>

    <div><h2>Garage: </h2>
    <ul>${
        barbie.garage.map((item =>{
            return`<li>
            ${barbie.name} has a ${item.year} ${item.make} ${item.model} that is worth $${item.price}</li>`
        })).join(" ")
    }</ul>
    </div>
`;
}

barbie.render()

const birkinButton = document.getElementById('birkin');

birkinButton.addEventListener('click', ()=>{
    if(barbie.wallet >= birkin.price){
        barbie.wardrobe.push(birkin);
        barbie.wallet -= birkin.price;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }

})

const workButton = document.getElementById('work');

workButton.addEventListener('click', ()=>{
    barbie.wallet += barbie.career.income; // WE updated the wllet that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    if(barbie.realEstate.length > 0){
        barbie.wallet += barbie.realEstate.length * 500
    }
    if (barbie.garage.length > 0){
        barbie.wallet -= barbie.garage.length * 150
    }
    barbie.render();
})

const redBottomsButton = document.getElementById("red-bottoms");

redBottomsButton.addEventListener("click", ()=>{
    if(barbie.wallet >=redBottoms.price){
        barbie.wardrobe.push(redBottoms); 
        barbie.wallet -= redBottoms.price;
        barbie.render()
    }
    else{
        alert('Stop trippin you know you aint got it like that');
    }
})

const rentalButton = document.getElementById("rental");

rentalButton.addEventListener("click", ()=>{
    if(barbie.wallet >= rental.price){
        barbie.realEstate.push(rental)
        barbie.wallet -= rental.price
        barbie.render()
    }else{
        alert('Stop trippin you know you aint got it like that');
    }
})

const carButton = document.getElementById("car");

carButton.addEventListener("click", () =>{
    if(barbie.wallet >= car.price){
        barbie.garage.push(car)
        barbie.wallet -= car.price
        barbie.render()
    }else{
        alert('Stop trippin you know you aint got it like that');
    }
})

const sellButton = document.getElementById("sell");

sellButton.addEventListener("click", () =>{
    if(barbie.wardrobe.length === 0){
        alert('Stop trippin you know you aint got it like that');
    }else{
        let soldPrice = Math.floor((0.7 + Math.random() * 1.3) * barbie.wardrobe[0].price); 
        barbie.wallet += soldPrice
        barbie.wardrobe.shift();
        barbie.render();
    }
})