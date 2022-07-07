import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {


  usernameoutput: String = "";

  secret = false;

  log: number[] = [];

  onToggle(){
    this.secret = !this.secret;
    this.log.push(this.log.length);


  }


  onclick(){
    return this.usernameoutput = "";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
