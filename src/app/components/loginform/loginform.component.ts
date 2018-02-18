import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ConfigOptionsService } from '../../services/config-options.service';

@Component({
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  info: object;
  @Output() loginCheck = new EventEmitter();
  constructor(
    private optionService: ConfigOptionsService
  ) { }

  ngOnInit() {
    this.info = this.optionService.GetSettings();
  }
  createNewUser(data) {
    this.optionService.SetSettings(data);
    this.info = this.optionService.GetSettings();
    this.loginCheck.emit(true);
  }
  onLogout() {
    this.optionService.clear();
    this.loginCheck.emit(false);
    this.info = this.optionService.GetSettings();
  }

}
