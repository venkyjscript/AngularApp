import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{MiddlewareService} from 'src/app/middleware.service';
import{DepartmentBase} from 'src/app/model/department.model';
@Component({
  selector: 'show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:MiddlewareService) { }
  DepartmentList:any;
  ngOnInit(): void {
    this.refreshDep();
  }

  refreshDep(){
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList=data as DepartmentBase[];
    })
  }

}
