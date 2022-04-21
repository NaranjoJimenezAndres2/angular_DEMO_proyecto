export class Carrera {
    name: string;
    date: string;
    circuitName: string;
    number: string;
    positionOrder:number;
    points:number;
    laps:number;
    time:string;
    grid:string;
    fastestLap:string;
    constructorName:string;
    constructorNationality:string;
    code:string;
    nationality:string;
    
    constructor(name:string, date: string, circuitName: string,
        number: string, positionOrder:number,points:number,laps:number,time:string,grid:string,
        fastestLap:string,constructorName:string,constructorNationality:string,code:string,nationality:string) 
        {
        this.name = name;
        this.date = date;
        this.circuitName = circuitName;
        this.number = number;
        this.positionOrder = positionOrder;
        this.points = points;
        this.laps = laps;
        this.time = time;
        this.grid = grid;
        this.fastestLap = fastestLap;
        this.constructorName = constructorName;
        this.constructorNationality = constructorNationality;
        this.code = code;
        this.nationality = nationality
    }
}