import { Component, OnInit } from '@angular/core';
import { Driver } from '../Driver';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-practice-form',
  templateUrl: './practice-form.component.html',
  styleUrls: ['./practice-form.component.css']
})
export class PracticeFormComponent implements OnInit {

  driverData: Driver = new Driver();

  constructor() { }

  ngOnInit() {
    this.driverData.name = "Richard Hammond";
  }

  formSubmitted(f: NgForm){
    // todo: push driverData to a web api
  console.log(f.value)
  }

}
