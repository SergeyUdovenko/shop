import { Injectable } from '@angular/core';
import { InjectionToken } from '@angular/core';

export const countOf = new InjectionToken<any[]>('count');

export function GeneratorService (count) {
  return function stringGenerate() {
    let result = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < count; i++) {
      result += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    console.log(result);
    return result;
  };

}
