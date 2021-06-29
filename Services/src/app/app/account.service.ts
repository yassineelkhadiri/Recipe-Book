import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accs = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  constructor() { }
  
  addAccount(name: string, status: string){
    this.accs.push({name: name, status: status});
  }
  updateStatus(id: number, newStatus: string){
    this.accs[id].status = newStatus;
  }
}
