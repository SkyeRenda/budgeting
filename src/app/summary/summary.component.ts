import { Component, OnInit } from '@angular/core';
import {transaction} from "../../models/transaction";
import data from "../../transactions.json";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})

export class SummaryComponent implements OnInit {

  allTransactions : transaction[] =[];
  expenses : transaction[] =[];
  income : transaction[] = [];

  balance : number = 0;


  constructor() {

    this.allTransactions = data;
    this.splitTransactions();
  }

  ngOnInit(): void {
  }

  splitTransactions(): void{
    this.allTransactions.forEach( (value : transaction) =>{

      (value.type == "in") ? this.income.push(value) : this.expenses.push(value);
    })
  }


}
