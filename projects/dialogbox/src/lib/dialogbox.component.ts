import { Component,OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
@Component({
  selector: 'lib-dialogbox',
  template: `
    <p>
      dialogbox works!
    </p>
  `,
  styles: [
  ]
})
export class DialogboxComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogboxComponent>) { }

  ngOnInit() {
    
  }
}
