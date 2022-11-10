import Passenger  from "./passenger"

class Flight{
    relation: string
    date: Date
    passengers: Passenger[]

    constructor(relation: string, date: Date){
        this.relation = relation
        this.date = date
        this.passengers = []
    }

    addPassenger = (passenger: Passenger): void => {
        this.passengers.push(passenger)
    }

    getData = () => {
        const monthNames: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const formatDate: string = `  ${monthNames[this.date.getMonth()]} ${this.date.getDay()}, ${this.date.getFullYear()}, ${this.relation}\n`
        return formatDate + this.passengers.map((pass) => `    ${pass.getData()}\n`).join('')
    }
}

export default Flight