import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

import { PanelDataLink } from '../../../models';

export interface DialogData {
  image: PanelDataLink;
}

@Component({
  selector: 'sb-image-dialog',
  standalone: true,
  imports: [MatDialogModule],
  template: ` <img [src]="image.src!" [alt]="image.label" mat-dialog-close /> `,
  styles: `
    ::ng-deep .project-image-dialog mat-dialog-container { height: 90vh }
  `
})
export class ImageDialog {
  private readonly data = inject(MAT_DIALOG_DATA);

  readonly image = this.data.image;
}
