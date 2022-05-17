
export class User{
    protected _nombre: string ;
    protected _email: string;
    protected _password: string;
    protected _password2: string;
    protected _fechaNacimiento: Date;
    protected _fechaRegistro: Date;

    constructor (nombre: string , email: string, password: string, password2: string, fechaNacimiento: Date, fechaRegistro: Date){
        this._nombre = nombre;
        this._email = email;
        this._password = password;
        this._password2 = password2;
        this._fechaNacimiento = fechaNacimiento;
        this._fechaRegistro = fechaRegistro;
    }


public get nombre(): string | null{
    return this._nombre;
}


public get email(): string {
    return this._email;
}

public get password(): string {
    return this._password;

}

public get password2(): string {
    return this._password2;
}

public get fechaNacimiento(): Date {
    return this._fechaNacimiento;
}

public get fechaRegistro(): Date {
    return this._fechaRegistro;
}

passwordMatch(password: string, password2: string): boolean{
    return password === password2;
}

setFechaRegistro(): void{
    this._fechaRegistro = new Date();
}



}


export interface userSchema {
    _nombre: string | null,
    _apellido: string  | null,
    _email: string  | null,
    _password: string  | null,
    _password2: string  | null,
    _fechaNacimiento: Date  | null,
    _fechaRegistro: Date | null
}