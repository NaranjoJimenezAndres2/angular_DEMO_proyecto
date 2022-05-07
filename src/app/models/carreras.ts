export class Carrera {
    private _name: string;
    private _date: string;
    private _circuitName: string;
    private _number: string;
    private _positionOrder:number;
    private _points:number;
    private _laps:number;
    private _time:string;
    private _grid:string;
    private _fastestLap:string;
    private _constructorName:string;
    private _constructorNationality:string;
    private _code:string;
    private _nationality:string;
    private _statusId:string;
    private _driverId:string;
    private _overtake:number;
    
    constructor(name:string, 
        date: string, 
        circuitName: string,
        number: string, 
        positionOrder:number,
        points:number,
        laps:number,
        time:string,
        grid:string,
        fastestLap:string,
        constructorName:string,
        constructorNationality:string,
        code:string,nationality:string,
        statusId:string,
        driverId:string,
        overtake:number) 
        {
        this._name = name;
        this._date = date;
        this._circuitName = circuitName;
        this._number = number;
        this._positionOrder = positionOrder;
        this._points = points;
        this._laps = laps;
        this._time = time;
        this._grid = grid;
        this._fastestLap = fastestLap;
        this._constructorName = constructorName;
        this._constructorNationality = constructorNationality;
        this._code = code;
        this._nationality = nationality,
        this._statusId = statusId,
        this._driverId = driverId,
        this._overtake=overtake

    }

    get name () {
        return this._name;
    }

    get number () {
        return this._number;
    }

    get circuitName () {
        return this._circuitName;
    }

    get positionOrder () {
        return this._positionOrder;
    }

    get points () {
        return this._points;
    }

    get laps () {
        return this._laps;
    }

    get time () {
        return this._time;
    }

    get grid () {
        return this._grid;
    }

    get fastestLap () {
        return this._fastestLap;
    }

    get constructorName () {
        return this._constructorName;
    }

    get constructorNationality () {
        return this._constructorNationality;
    }

    get code () {
        return this._code;
    }

    get nationality (){
        return this._nationality
    }

    get statusId () {
        return this._statusId
    }

    get driverId () {
        return this._driverId
    }

    get overtake () {
        return this._overtake
    }




}