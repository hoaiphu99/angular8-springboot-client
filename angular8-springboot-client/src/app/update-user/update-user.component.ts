import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  username: string;
  user: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.user = new User();

    this.username = this.route.snapshot.params['username'];

    this.userService.getUser(this.username).subscribe(
      (data) => {
        console.log(data);
        this.user = data;
      },
      (error) => console.log(error)
    );
  }

  updateUser() {
    this.userService.updateUser(this.user.id, this.user).subscribe(
      (data) => {
        console.log(data);
        this.user = new User();
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.updateUser();
  }

  gotoList() {
    this.router.navigate(['/users']);
  }
}
