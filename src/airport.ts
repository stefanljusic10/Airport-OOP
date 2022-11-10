import Flight from "./flight"

class Airport{
    name: string = 'Nikola Tesla Airport'
    flights: Flight[]

    constructor(){
        this.name = 'Nikola Tesla Airport'
        this.flights = []
    }

    addFlight = (flight: Flight): void =>{
        this.flights.push(flight)
    }

    getData = (): string => {
        let totalPassengers: number = 0
        const allFlights: Flight[] = this.flights.flat()
        const formatFlights: string = this.flights.map((flight: Flight) => flight.getData()).join('')
        // allFlights is an array of fligts objects
        for (const flight in allFlights) {
            totalPassengers += allFlights[flight].passengers.length
        }
        return `Airport: ${this.name}, total passengers: ${totalPassengers}\n${formatFlights}`
    }
}

export default Airport