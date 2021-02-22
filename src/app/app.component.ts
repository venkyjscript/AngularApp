import { Component } from '@angular/core';

@Component({
  selector: 'mgr',
//   template:`
//   <div>
// <h3 class="d-flex justify-content-center">Company Manager</h3>
// <h5 class="d-flex justify-content-center">Angular app</h5>

// <nav class="navbar navbar-expand-sm bg-light navbar-dark">
// <ul class="navbar-nav">
//   <li class="nav-item">
//     <button routerLink="depart"
//     class="m-1 btn btn-light btn-outline-primary" Button>Departments</button>
//   </li>
//   <li class="nav-item">
//     <button routerLink="emp"
//     class="m-1 btn btn-light btn-outline-primary" Button>Employees</button>
//   </li>

//   <li class="nav-item">
//     <button routerLink="per"
//     class="m-1 btn btn-light btn-outline-primary" Button>pemp</button>
//   </li>
// </ul>


// </nav>



//   <router-outlet></router-outlet>
// </div>


//   `,this does same as setting template url
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CompanyManager';
}
