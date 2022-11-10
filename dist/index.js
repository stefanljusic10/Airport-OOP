/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/airport.ts":
/*!************************!*\
  !*** ./src/airport.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Airport {
    constructor() {
        this.name = 'Nikola Tesla Airport';
        this.addFlight = (flight) => {
            this.flights.push(flight);
        };
        this.getData = () => {
            let totalPassengers = 0;
            const allFlights = this.flights.flat();
            const formatFlights = this.flights.map((flight) => flight.getData()).join('');
            // allFlights is an array of fligts objects
            for (const flight in allFlights) {
                totalPassengers += allFlights[flight].passengers.length;
            }
            return `Airport: ${this.name}, total passengers: ${totalPassengers}\n${formatFlights}`;
        };
        this.name = 'Nikola Tesla Airport';
        this.flights = [];
    }
}
exports["default"] = Airport;


/***/ }),

/***/ "./src/flight.ts":
/*!***********************!*\
  !*** ./src/flight.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Flight {
    constructor(relation, date) {
        this.addPassenger = (passenger) => {
            this.passengers.push(passenger);
        };
        this.getData = () => {
            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const formatDate = `  ${monthNames[this.date.getMonth()]} ${this.date.getDay()}, ${this.date.getFullYear()}, ${this.relation}\n`;
            return formatDate + this.passengers.map((pass) => `    ${pass.getData()}\n`).join('');
        };
        this.relation = relation;
        this.date = date;
        this.passengers = [];
    }
}
exports["default"] = Flight;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const person_1 = __importDefault(__webpack_require__(/*! ./person */ "./src/person.ts"));
const seat_1 = __importDefault(__webpack_require__(/*! ./seat */ "./src/seat.ts"));
const passenger_1 = __importDefault(__webpack_require__(/*! ./passenger */ "./src/passenger.ts"));
const flight_1 = __importDefault(__webpack_require__(/*! ./flight */ "./src/flight.ts"));
const airport_1 = __importDefault(__webpack_require__(/*! ./airport */ "./src/airport.ts"));
(function () {
    function createPassenger(person, seat) {
        return new passenger_1.default(person, seat);
    }
    function createFlight(relation, date) {
        return new flight_1.default(relation, date);
    }
    // instances of Person and Seat
    let personOne = new person_1.default('John', 'Snow');
    let personTwo = new person_1.default('Tyrion', 'Lanister');
    let personThree = new person_1.default('Arya', 'Stark');
    let personFour = new person_1.default('Sansa', 'Start');
    let personFive = new person_1.default('Daemon', 'Targaryen');
    let personSix = new person_1.default('Renira', 'Targaryen');
    let seatOne = new seat_1.default(17, 'b');
    let seatTwo = new seat_1.default(75, 'g');
    let seatThree = new seat_1.default('88', 'b');
    let seatFour = new seat_1.default(44, 'ttt');
    let seatFive = new seat_1.default('50', 'e');
    let seatSix = new seat_1.default(90, 'zzz');
    // instances of Passenger
    let passengerOne = createPassenger(personOne, seatOne);
    let passengerTwo = createPassenger(personTwo, seatTwo);
    let passengerThree = createPassenger(personThree, seatThree);
    let passengerFour = createPassenger(personFour, seatFour);
    let passengerFive = createPassenger(personFive, seatFive);
    let passengerSix = createPassenger(personSix, seatSix);
    // instaces of Date object
    let dateOne = new Date('November 15, 2022');
    let dateTwo = new Date('December 17, 2022');
    // instances of Flight
    let flightOne = createFlight('Paris - Budapest', dateOne);
    let flightTwo = createFlight('Frankfurt - Belgrade', dateTwo);
    // instance of Airport
    let airport = new airport_1.default();
    // add passengers to flights
    flightOne.addPassenger(passengerOne);
    flightOne.addPassenger(passengerThree);
    flightOne.addPassenger(passengerFour);
    flightTwo.addPassenger(passengerTwo);
    flightTwo.addPassenger(passengerFive);
    flightTwo.addPassenger(passengerSix);
    // add flights to airport
    airport.addFlight(flightOne);
    airport.addFlight(flightTwo);
    console.log(airport.getData());
})();


/***/ }),

/***/ "./src/passenger.ts":
/*!**************************!*\
  !*** ./src/passenger.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Passenger {
    constructor(person, seat) {
        this.getData = () => this.seat.getData() + ', ' + this.person.getData();
        this.person = person;
        this.seat = seat;
    }
}
exports["default"] = Passenger;


/***/ }),

/***/ "./src/person.ts":
/*!***********************!*\
  !*** ./src/person.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Person {
    constructor(name, surname) {
        this.getData = () => this.name + ' ' + this.surname;
        this.name = name;
        this.surname = surname;
    }
}
exports["default"] = Person;


/***/ }),

/***/ "./src/seat.ts":
/*!*********************!*\
  !*** ./src/seat.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Seat {
    constructor(number, category) {
        this.getData = () => this.number + ' ' + this.category.toUpperCase();
        this.number = (typeof number === 'number') ? number : Math.floor(Math.random() * 90) + 10;
        this.category = category;
    }
}
exports["default"] = Seat;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsVUFBVSxzQkFBc0IsZ0JBQWdCLElBQUksY0FBYztBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDdEJGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGtDQUFrQyxFQUFFLG1CQUFtQixJQUFJLHdCQUF3QixJQUFJLGNBQWM7QUFDekkscUVBQXFFLGVBQWU7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDakJGO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUNBQWlDLG1CQUFPLENBQUMsaUNBQVU7QUFDbkQsK0JBQStCLG1CQUFPLENBQUMsNkJBQVE7QUFDL0Msb0NBQW9DLG1CQUFPLENBQUMsdUNBQWE7QUFDekQsaUNBQWlDLG1CQUFPLENBQUMsaUNBQVU7QUFDbkQsa0NBQWtDLG1CQUFPLENBQUMsbUNBQVc7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ3hEWTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQ1RGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDVEY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7OztVQ1RmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haXJwb3J0LW9vcC8uL3NyYy9haXJwb3J0LnRzIiwid2VicGFjazovL2FpcnBvcnQtb29wLy4vc3JjL2ZsaWdodC50cyIsIndlYnBhY2s6Ly9haXJwb3J0LW9vcC8uL3NyYy9tYWluLnRzIiwid2VicGFjazovL2FpcnBvcnQtb29wLy4vc3JjL3Bhc3Nlbmdlci50cyIsIndlYnBhY2s6Ly9haXJwb3J0LW9vcC8uL3NyYy9wZXJzb24udHMiLCJ3ZWJwYWNrOi8vYWlycG9ydC1vb3AvLi9zcmMvc2VhdC50cyIsIndlYnBhY2s6Ly9haXJwb3J0LW9vcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9haXJwb3J0LW9vcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2FpcnBvcnQtb29wL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9haXJwb3J0LW9vcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgQWlycG9ydCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSAnTmlrb2xhIFRlc2xhIEFpcnBvcnQnO1xyXG4gICAgICAgIHRoaXMuYWRkRmxpZ2h0ID0gKGZsaWdodCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZsaWdodHMucHVzaChmbGlnaHQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXREYXRhID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdG90YWxQYXNzZW5nZXJzID0gMDtcclxuICAgICAgICAgICAgY29uc3QgYWxsRmxpZ2h0cyA9IHRoaXMuZmxpZ2h0cy5mbGF0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdEZsaWdodHMgPSB0aGlzLmZsaWdodHMubWFwKChmbGlnaHQpID0+IGZsaWdodC5nZXREYXRhKCkpLmpvaW4oJycpO1xyXG4gICAgICAgICAgICAvLyBhbGxGbGlnaHRzIGlzIGFuIGFycmF5IG9mIGZsaWd0cyBvYmplY3RzXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmxpZ2h0IGluIGFsbEZsaWdodHMpIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsUGFzc2VuZ2VycyArPSBhbGxGbGlnaHRzW2ZsaWdodF0ucGFzc2VuZ2Vycy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGBBaXJwb3J0OiAke3RoaXMubmFtZX0sIHRvdGFsIHBhc3NlbmdlcnM6ICR7dG90YWxQYXNzZW5nZXJzfVxcbiR7Zm9ybWF0RmxpZ2h0c31gO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5uYW1lID0gJ05pa29sYSBUZXNsYSBBaXJwb3J0JztcclxuICAgICAgICB0aGlzLmZsaWdodHMgPSBbXTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBBaXJwb3J0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBGbGlnaHQge1xyXG4gICAgY29uc3RydWN0b3IocmVsYXRpb24sIGRhdGUpIHtcclxuICAgICAgICB0aGlzLmFkZFBhc3NlbmdlciA9IChwYXNzZW5nZXIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wYXNzZW5nZXJzLnB1c2gocGFzc2VuZ2VyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbW9udGhOYW1lcyA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXREYXRlID0gYCAgJHttb250aE5hbWVzW3RoaXMuZGF0ZS5nZXRNb250aCgpXX0gJHt0aGlzLmRhdGUuZ2V0RGF5KCl9LCAke3RoaXMuZGF0ZS5nZXRGdWxsWWVhcigpfSwgJHt0aGlzLnJlbGF0aW9ufVxcbmA7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXREYXRlICsgdGhpcy5wYXNzZW5nZXJzLm1hcCgocGFzcykgPT4gYCAgICAke3Bhc3MuZ2V0RGF0YSgpfVxcbmApLmpvaW4oJycpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZWxhdGlvbiA9IHJlbGF0aW9uO1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgICAgICAgdGhpcy5wYXNzZW5nZXJzID0gW107XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gRmxpZ2h0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBwZXJzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wZXJzb25cIikpO1xyXG5jb25zdCBzZWF0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc2VhdFwiKSk7XHJcbmNvbnN0IHBhc3Nlbmdlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3Bhc3NlbmdlclwiKSk7XHJcbmNvbnN0IGZsaWdodF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2ZsaWdodFwiKSk7XHJcbmNvbnN0IGFpcnBvcnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9haXJwb3J0XCIpKTtcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBhc3NlbmdlcihwZXJzb24sIHNlYXQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IHBhc3Nlbmdlcl8xLmRlZmF1bHQocGVyc29uLCBzZWF0KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZsaWdodChyZWxhdGlvbiwgZGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgZmxpZ2h0XzEuZGVmYXVsdChyZWxhdGlvbiwgZGF0ZSk7XHJcbiAgICB9XHJcbiAgICAvLyBpbnN0YW5jZXMgb2YgUGVyc29uIGFuZCBTZWF0XHJcbiAgICBsZXQgcGVyc29uT25lID0gbmV3IHBlcnNvbl8xLmRlZmF1bHQoJ0pvaG4nLCAnU25vdycpO1xyXG4gICAgbGV0IHBlcnNvblR3byA9IG5ldyBwZXJzb25fMS5kZWZhdWx0KCdUeXJpb24nLCAnTGFuaXN0ZXInKTtcclxuICAgIGxldCBwZXJzb25UaHJlZSA9IG5ldyBwZXJzb25fMS5kZWZhdWx0KCdBcnlhJywgJ1N0YXJrJyk7XHJcbiAgICBsZXQgcGVyc29uRm91ciA9IG5ldyBwZXJzb25fMS5kZWZhdWx0KCdTYW5zYScsICdTdGFydCcpO1xyXG4gICAgbGV0IHBlcnNvbkZpdmUgPSBuZXcgcGVyc29uXzEuZGVmYXVsdCgnRGFlbW9uJywgJ1RhcmdhcnllbicpO1xyXG4gICAgbGV0IHBlcnNvblNpeCA9IG5ldyBwZXJzb25fMS5kZWZhdWx0KCdSZW5pcmEnLCAnVGFyZ2FyeWVuJyk7XHJcbiAgICBsZXQgc2VhdE9uZSA9IG5ldyBzZWF0XzEuZGVmYXVsdCgxNywgJ2InKTtcclxuICAgIGxldCBzZWF0VHdvID0gbmV3IHNlYXRfMS5kZWZhdWx0KDc1LCAnZycpO1xyXG4gICAgbGV0IHNlYXRUaHJlZSA9IG5ldyBzZWF0XzEuZGVmYXVsdCgnODgnLCAnYicpO1xyXG4gICAgbGV0IHNlYXRGb3VyID0gbmV3IHNlYXRfMS5kZWZhdWx0KDQ0LCAndHR0Jyk7XHJcbiAgICBsZXQgc2VhdEZpdmUgPSBuZXcgc2VhdF8xLmRlZmF1bHQoJzUwJywgJ2UnKTtcclxuICAgIGxldCBzZWF0U2l4ID0gbmV3IHNlYXRfMS5kZWZhdWx0KDkwLCAnenp6Jyk7XHJcbiAgICAvLyBpbnN0YW5jZXMgb2YgUGFzc2VuZ2VyXHJcbiAgICBsZXQgcGFzc2VuZ2VyT25lID0gY3JlYXRlUGFzc2VuZ2VyKHBlcnNvbk9uZSwgc2VhdE9uZSk7XHJcbiAgICBsZXQgcGFzc2VuZ2VyVHdvID0gY3JlYXRlUGFzc2VuZ2VyKHBlcnNvblR3bywgc2VhdFR3byk7XHJcbiAgICBsZXQgcGFzc2VuZ2VyVGhyZWUgPSBjcmVhdGVQYXNzZW5nZXIocGVyc29uVGhyZWUsIHNlYXRUaHJlZSk7XHJcbiAgICBsZXQgcGFzc2VuZ2VyRm91ciA9IGNyZWF0ZVBhc3NlbmdlcihwZXJzb25Gb3VyLCBzZWF0Rm91cik7XHJcbiAgICBsZXQgcGFzc2VuZ2VyRml2ZSA9IGNyZWF0ZVBhc3NlbmdlcihwZXJzb25GaXZlLCBzZWF0Rml2ZSk7XHJcbiAgICBsZXQgcGFzc2VuZ2VyU2l4ID0gY3JlYXRlUGFzc2VuZ2VyKHBlcnNvblNpeCwgc2VhdFNpeCk7XHJcbiAgICAvLyBpbnN0YWNlcyBvZiBEYXRlIG9iamVjdFxyXG4gICAgbGV0IGRhdGVPbmUgPSBuZXcgRGF0ZSgnTm92ZW1iZXIgMTUsIDIwMjInKTtcclxuICAgIGxldCBkYXRlVHdvID0gbmV3IERhdGUoJ0RlY2VtYmVyIDE3LCAyMDIyJyk7XHJcbiAgICAvLyBpbnN0YW5jZXMgb2YgRmxpZ2h0XHJcbiAgICBsZXQgZmxpZ2h0T25lID0gY3JlYXRlRmxpZ2h0KCdQYXJpcyAtIEJ1ZGFwZXN0JywgZGF0ZU9uZSk7XHJcbiAgICBsZXQgZmxpZ2h0VHdvID0gY3JlYXRlRmxpZ2h0KCdGcmFua2Z1cnQgLSBCZWxncmFkZScsIGRhdGVUd28pO1xyXG4gICAgLy8gaW5zdGFuY2Ugb2YgQWlycG9ydFxyXG4gICAgbGV0IGFpcnBvcnQgPSBuZXcgYWlycG9ydF8xLmRlZmF1bHQoKTtcclxuICAgIC8vIGFkZCBwYXNzZW5nZXJzIHRvIGZsaWdodHNcclxuICAgIGZsaWdodE9uZS5hZGRQYXNzZW5nZXIocGFzc2VuZ2VyT25lKTtcclxuICAgIGZsaWdodE9uZS5hZGRQYXNzZW5nZXIocGFzc2VuZ2VyVGhyZWUpO1xyXG4gICAgZmxpZ2h0T25lLmFkZFBhc3NlbmdlcihwYXNzZW5nZXJGb3VyKTtcclxuICAgIGZsaWdodFR3by5hZGRQYXNzZW5nZXIocGFzc2VuZ2VyVHdvKTtcclxuICAgIGZsaWdodFR3by5hZGRQYXNzZW5nZXIocGFzc2VuZ2VyRml2ZSk7XHJcbiAgICBmbGlnaHRUd28uYWRkUGFzc2VuZ2VyKHBhc3NlbmdlclNpeCk7XHJcbiAgICAvLyBhZGQgZmxpZ2h0cyB0byBhaXJwb3J0XHJcbiAgICBhaXJwb3J0LmFkZEZsaWdodChmbGlnaHRPbmUpO1xyXG4gICAgYWlycG9ydC5hZGRGbGlnaHQoZmxpZ2h0VHdvKTtcclxuICAgIGNvbnNvbGUubG9nKGFpcnBvcnQuZ2V0RGF0YSgpKTtcclxufSkoKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgUGFzc2VuZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKHBlcnNvbiwgc2VhdCkge1xyXG4gICAgICAgIHRoaXMuZ2V0RGF0YSA9ICgpID0+IHRoaXMuc2VhdC5nZXREYXRhKCkgKyAnLCAnICsgdGhpcy5wZXJzb24uZ2V0RGF0YSgpO1xyXG4gICAgICAgIHRoaXMucGVyc29uID0gcGVyc29uO1xyXG4gICAgICAgIHRoaXMuc2VhdCA9IHNlYXQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gUGFzc2VuZ2VyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBQZXJzb24ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgc3VybmFtZSkge1xyXG4gICAgICAgIHRoaXMuZ2V0RGF0YSA9ICgpID0+IHRoaXMubmFtZSArICcgJyArIHRoaXMuc3VybmFtZTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuc3VybmFtZSA9IHN1cm5hbWU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gUGVyc29uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBTZWF0IHtcclxuICAgIGNvbnN0cnVjdG9yKG51bWJlciwgY2F0ZWdvcnkpIHtcclxuICAgICAgICB0aGlzLmdldERhdGEgPSAoKSA9PiB0aGlzLm51bWJlciArICcgJyArIHRoaXMuY2F0ZWdvcnkudG9VcHBlckNhc2UoKTtcclxuICAgICAgICB0aGlzLm51bWJlciA9ICh0eXBlb2YgbnVtYmVyID09PSAnbnVtYmVyJykgPyBudW1iZXIgOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MCkgKyAxMDtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gU2VhdDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW4udHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=