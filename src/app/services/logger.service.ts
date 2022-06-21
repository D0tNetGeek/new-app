import { Injectable } from '@angular/core';

@Injectable()
//  @Injectable({
//   providedIn: 'root'
//  })

export class LoggerService {

  constructor() { }

  log(message: any){
    console.table(message);
  }
}
