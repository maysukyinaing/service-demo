import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit{
  myArray:string[] = []

  constructor(private dataService:DataService) {
  }

  ngOnInit(): void {
    this.myArray = this.dataService.getAllData()
  }

  addToArray(data:string) {
    this.dataService.storeData(data)
  }

}
