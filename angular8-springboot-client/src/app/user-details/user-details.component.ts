import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
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

  gotoList() {
    this.router.navigate(['/users']);
  }
}
