import { EventEmitter , Injectable, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
@Output() trigger: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
