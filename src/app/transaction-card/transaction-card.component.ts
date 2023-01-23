import { Component, OnInit, Input } from '@angular/core';
import {transaction} from "../../models/transaction";

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.css']
})
export class TransactionCardComponent implements OnInit {

  @Input() trans!: transaction;
  constructor() {

  }

  ngOnInit(): void {
  }

}
