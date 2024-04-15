import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogModule } from '@angular/material/dialog';

import { PanelDataLink } from '../../../models';

export interface DialogData {
  image: PanelDataLink;
}

@Component({
  selector: 'sb-image-dialog',
  standalone: true,
  imports: [MatDialogModule, MatDialogActions],
  template: ` <img [src]="image.src!" [alt]="image.label" mat-dialog-close /> `
})
export class ImageDialog {
  private readonly data = inject(MAT_DIALOG_DATA);

  readonly image = this.data.image;
}
