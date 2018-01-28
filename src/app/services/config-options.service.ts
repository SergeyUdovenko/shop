import { Injectable } from '@angular/core';

@Injectable()
export class ConfigOptionsService {
  Constants = '123123';

  SetSettings(settings) {
    const settingsList = JSON.stringify(settings);
    localStorage.setItem('config', settingsList);
  }

  GetSettings() {
    const getSettings = JSON.parse(localStorage.getItem('config'));
    console.log(getSettings);
    return getSettings;
  }

  clear() {
    localStorage.clear();
  }

  constructor() { }

}
