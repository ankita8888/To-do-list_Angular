import { Component, OnInit } from '@angular/core';
import {Todo} from "../../Todo";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[] | undefined;

  constructor() {
    this.todos=[
      {
        sno:3,
        title:"This is title",
        desc:"This is description",
        active:true
      },
      {
        sno:1,
        title:"This is title of 1st",
        desc:"This is description of 1st",
        active:true
      },
      {
        sno:2,
        title:"This is title of 2nd",
        desc:"This is description of 2nd",
        active:true
      }
    ]
   }

  ngOnInit(): void {
  }

}
