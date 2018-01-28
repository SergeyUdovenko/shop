import { Component, OnInit } from '@angular/core';

import {ConfigOptionsService} from '../../services/config-options.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  info: object;
  constructor(
    private optionService: ConfigOptionsService
  ) { }

  ngOnInit() {
    this.info = this.optionService.GetSettings();
  }
  CreateNewUser(data) {
    this.optionService.SetSettings(data);
    this.info = this.optionService.GetSettings();
  }
  onLogout() {
    this.optionService.clear();
    this.info = this.optionService.GetSettings();
  }

}
