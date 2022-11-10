'use strict'

// CONSTRUCTOR FUNCTIONS -----------------------------------------------------------------------------------------------------
function Person(name, surname){
    this.name = name,
    this.surname = surname
    this.getData = () => this.name + ' ' + this.surname
}

function Seat(number, category){
    this.number = (typeof number === 'number') ? number : Math.floor(Math.random() * 90) + 10
    this.category = (category === 'b') ? 'b' : 'e'
    this.getData = () => this.number + ' ' + this.category.toUpperCase()
}

function Passenger(person, seat){
    this.person = (person instanceof Person) ? person : console.log('Unesite ispravnog putnika');
    this.seat = (seat instanceof Seat) ? seat : console.log('Unesite ispravan broj sedista');
    this.getData = () => this.seat.getData() + ', ' + this.person.getData()
}

function Flight(relation, date){
    
    this.relation = relation
    this.date = date
    this.passengers = []

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const formatDate = '  ' + monthNames[this.date.getMonth()] + ' ' + this.date.getDay() + ', ' + this.date.getFullYear() +', ' + this.relation + '\n'
    
    this.addPassenger = (passenger) => {
        this.passengers.push(passenger)
    }
    
    this.getData = () => formatDate + this.passengers.map((pass) => `    ${pass.getData()}\n`).join('')
}

function Airport(){
    this.name = "Nikola Tesla Airport"
    this.flights = []
    this.addFlight = function(flight){
        this.flights.push(flight)
    }
    this.getData = () => {
        let totalPassengers = 0
        const allFlights = this.flights.flat()
        const formatFlights = this.flights.map((flight) => flight.getData()).join('')
        // allFlights is an array of fligts objects
        for (const flight in allFlights) {
            totalPassengers += allFlights[flight].passengers.length
        }
        return 'Airport: ' + this.name + ', ' + 'total passengers: ' + totalPassengers + '\n' + formatFlights
    }
}





// IIFE - MAIN PROGRAM ---------------------------------------------------------------------------------------------------------
(function(){
    console.log('Hi!');
    
    function createPassenger(person, seat){
        return new Passenger(person, seat)
    }

    function createFlight(relation, date){
        return new Flight(relation, date)
    }

    // instances of Person and Seat
    let personOne = new Person('John', 'Snow')
    let personTwo = new Person('Tyrion', 'Lanister')
    let personThree = new Person('Arya', 'Stark')
    let personFour = new Person('Sansa', 'Start')
    let personFive = new Person('Daemon', 'Targaryen')
    let personSix = new Person('Renira', 'Targaryen')
    let seatOne = new Seat(17, 'b')
    let seatTwo = new Seat('65', 'g')
    let seatThree = new Seat(88, 'b')
    let seatFour = new Seat(false, 'e')
    let seatFive = new Seat(91, 'e')
    let seatSix = new Seat(90, false)
    
    // instances of Passenger
    let passengerOne = createPassenger(personOne, seatOne)
    let passengerTwo = createPassenger(personTwo, seatTwo)
    let passengerThree = createPassenger(personThree, seatThree)
    let passengerFour = createPassenger(personFour, seatFour)
    let passengerFive = createPassenger(personFive, seatFive)
    let passengerSix = createPassenger(personSix, seatSix)

    // instaces of Date object
    let dateOne = new Date('November 15, 2022')
    let dateTwo = new Date('December 17, 2022')

    // instances of Flight
    let flightOne = createFlight('Paris - Budapest', dateOne)
    let flightTwo = createFlight('Frankfurt - Belgrade', dateTwo)

    // instance of Airport
    let airport = new Airport()

    // add passengers to flights
    flightOne.addPassenger(passengerOne)
    flightOne.addPassenger(passengerThree)
    flightOne.addPassenger(passengerFour)
    flightTwo.addPassenger(passengerTwo)
    flightTwo.addPassenger(passengerFive)
    flightTwo.addPassenger(passengerSix)

    // add flights to airport
    airport.addFlight(flightOne)
    airport.addFlight(flightTwo)

    console.log(airport.getData());
})()
