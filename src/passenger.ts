import Person from './person'
import Seat from './seat'

class Passenger{
    person: Person
    seat: Seat

    constructor(person: Person, seat: Seat){
        this.person = person
        this.seat = seat
    }

    getData = (): string => this.seat.getData() + ', ' + this.person.getData()
}

export default Passenger