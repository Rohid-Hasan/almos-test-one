import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.css'],
})
export class ConfirmationPopupComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public message: string) {}

  ngOnInit() {}
}
