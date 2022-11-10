import Person from './person'
import Seat from './seat'
import Passenger from './passenger'
import Flight from './flight'
import Airport from './airport'

(function(): void{
    function createPassenger(person: Person, seat: Seat): Passenger{
        return new Passenger(person, seat)
    }

    function createFlight(relation: string, date: Date): Flight{
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
    let seatTwo = new Seat(75, 'g')
    let seatThree = new Seat('88', 'b')
    let seatFour = new Seat(44, 'ttt')
    let seatFive = new Seat('50', 'e')
    let seatSix = new Seat(90, 'zzz')

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