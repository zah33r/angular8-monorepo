import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalSharedService {

  public aSharedProperty: string = `Hey! I'm from Global Shared Service, injected from Startup.`;
  constructor() { }
}
