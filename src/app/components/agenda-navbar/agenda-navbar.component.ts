import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agenda-navbar',
  templateUrl: './agenda-navbar.component.html',
  styleUrls: ['./agenda-navbar.component.css']
})
export class AgendaNavbarComponent implements OnInit {
  busqueda: string;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.busqueda = ""
  }

  buscar(){
    this.router.navigate(["/buscar/"+this.busqueda]);
  }

}
