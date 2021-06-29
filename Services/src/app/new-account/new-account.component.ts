import { Component } from '@angular/core';
import { AccountService } from '../app/account.service';
import { LoggingService } from '../app/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  
  constructor(private loggingService: LoggingService,
    private accountService: AccountService){

  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
