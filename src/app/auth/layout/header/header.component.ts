import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  public logout():void {
    this.authService.logout();
  }

}
