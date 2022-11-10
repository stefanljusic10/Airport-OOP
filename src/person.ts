class Person{
    name: string
    surname: string

    constructor(name: string, surname: string){
        this.name = name
        this.surname = surname
    }

    getData = (): string => this.name + ' ' + this.surname
}

export default Person