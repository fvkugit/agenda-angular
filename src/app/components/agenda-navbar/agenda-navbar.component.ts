import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-agenda-navbar',
  templateUrl: './agenda-navbar.component.html',
  styleUrls: ['./agenda-navbar.component.css']
})
export class AgendaNavbarComponent implements OnInit {
  busqueda: string;

  constructor() { }

  ngOnInit(): void {
    this.busqueda = ""
  }

  text(){
    console.log(this.busqueda)
  }

}
