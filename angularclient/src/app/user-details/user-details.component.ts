import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id:number;
  user:User;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];

    this.user=new User();

    this.userService.getEmployeeById(this.id).subscribe(data=>
      {
          this.user=data;
      });
  }

}
