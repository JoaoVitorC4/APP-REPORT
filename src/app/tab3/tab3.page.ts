import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/users.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  public user: Array<User>;
  rootPage:any;

  constructor(
    private userservice: UserService,
    private rota: Router
  ) {}

  ngOnInit() {
      
  }

  // public visualizarUser(user: User) {
  //   this.userservice.MostradadosUsuario(this.user.value).
  //   then
  //   console.log('user: ', user);
  // }

}
