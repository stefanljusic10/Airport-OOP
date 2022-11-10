# AirportOOP-typescript-webpack

### Create classes with properties representing the following:
● Person - name, surname  
● Seat - number, category (can be 'b'; for business or 'e' for economy)  
● Passenger - person (instance of Person), seat (instance of Seat)  
● Flight - relation, date and list of passengers (initially empty)  
● Airport - name (should be a hard-coded value &quot;Nikola Tesla&quot;), list of flights  
  
##### If category is not provided for Seat, assume it’s economy (“e”).
##### If seat number is not provided, assign a random number between 10 and 100.  
##### Add getData method to Person. It should return a formatted string containing the name and surname of the person.
      ex. 'John', 'Snow' -> 'John Snow'
##### Add getData method to Seat. It should return a formatted string containing a seat number and category.
      ex. 12, 'B' -> '12, B'
##### Add getData method to Passenger. It should return a formatted string containing a seat number, category letter (always in uppercase), a name and surname. To display seat data, use getData method of the Seat object. The same goes for the person data.
      ex. personObj, seatObj -> 12, B, John Snow
##### Add addPassenger method to Flight. It should receive Passenger and add the passenger to the passenger list of a given flight.
##### Add addFlight method to Airport. It should add the flight to the list of flights of the airport.
##### Add getData method to Flight. It should return a formatted string containing a date, relation, all data related to the flight and list of passengers with their data.
      ex. 25.11.2022, Belgrade - Paris
          1, B, John Snow
          14, E, Cersei Lannister
##### Add createFlight function that receives a relation (ex. Belgrade - New York) and date as parameters and returns a created Flight.
##### Add createPassenger function that receives a first name, last name, seat number and category and returns a created Passenger.
##### Create an instance of the Airport object.
##### Create two instances of the Flight object using the createFlight function.
##### Create four instances of the Passenger object using the createPassenger function.
##### Add the first two passengers to the first flight and the second two to the second flight using the Flight’s addPassenger method.
##### Add the created flight instances to the airport using Airport’s addFlight method.
##### Call Airport’s getData method to display the airport data output in the following manner:
      Airport: Nikola Tesla, total passengers: 4
        25.11.2022, Belgrade - Paris
          1, B, John Snow
          14, E, Cerser Lannister
        20.11.2022
          77, B, Arya Stark
          50, E, Daemon Targaryen
