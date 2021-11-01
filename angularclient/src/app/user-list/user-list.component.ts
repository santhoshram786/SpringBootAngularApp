import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserServiceService,
    private router:Router) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  updateUser(id:number)
  {
    this.router.navigate(['update-user',id]);
  }

  deleteUser(id:number)
  {
    this.userService.deleteEmployeeById(id).subscribe(data=>
      {
        console.log(data);
        this.getAllUsers();

      })
  }

  viewUser(id:number)
  {
    this.router.navigate(['view-user',id]);
  }

  getAllUsers()
  {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
}
