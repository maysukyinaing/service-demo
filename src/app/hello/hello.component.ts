import {Component, OnInit} from '@angular/core';
import {LogService} from "../services/log.service";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit{

  constructor(private logService:LogService) {
  }

  ngOnInit(): void {
  }

  showInfo(data:any) {
    this.logService.load(data)
  }

}
