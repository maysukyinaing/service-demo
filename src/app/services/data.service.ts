import { Injectable } from '@angular/core';
import {LogService} from "./log.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private myArray:string[] = []

  constructor(private logService:LogService) { }

  storeData(data:string) {
    this.myArray.push(data)
    this.logService.load(data)
  }
  getAllData():string[] {
    return this.myArray
  }
}
