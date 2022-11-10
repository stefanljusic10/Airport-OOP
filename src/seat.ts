class Seat{
    number: number | string
    category: string

    constructor(number: number | string, category: string){
        this.number = (typeof number === 'number') ? number : Math.floor(Math.random() * 90) + 10
        this.category = category
    }

    getData = (): string => this.number + ' ' + this.category.toUpperCase()
}

export default Seat