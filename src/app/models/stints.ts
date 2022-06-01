export class Stint {
    private _driver: string;
    private _stint: number;
    private _compound: string;
    private _stintLength: number;

    constructor(Driver: string, Stint: number, Compound: string, StintLength: number) {
        this._driver = Driver;
        this._stint = Stint;
        this._compound = Compound;
        this._stintLength = StintLength;
    }

    get Driver(): string {
        return this._driver;
    }

    get Stint(): number {
        return this._stint;
    }

    get Compound(): string {
        return this._compound;
    }

    get StintLength(): number {
        return this._stintLength;
    }
        

}