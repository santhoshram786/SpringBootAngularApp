import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service'

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: User=new User();
  id:number;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: UserServiceService) {
    this.user = new User();
  }
  ngOnInit(): void {
   
    this.id=this.route.snapshot.params['id'];
    this.userService.getEmployeeById(this.id).subscribe(data =>
      {
        this.user=data;
      },error=>console.log(error));
  }

  onSubmit() {
    this.userService.updateUser(this.id,this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

}
