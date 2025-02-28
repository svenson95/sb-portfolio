import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

import { PanelDataLink } from '../../../models';

export interface DialogData {
  image: PanelDataLink;
}

@Component({
  selector: 'sb-image-dialog',
  imports: [MatDialogModule],
  template: ` <img [src]="image.src!" [alt]="image.label" mat-dialog-close /> `,
  styles: `
    @use "@angular/material" as mat;

    ::ng-deep .project-image-dialog mat-dialog-container { 
      max-height: 90vh;

      @include mat.dialog-overrides((
        container-shape: "0px",
      ));
    }

    ::ng-deep .cdk-overlay-pane.mat-mdc-dialog-panel {
      --mat-dialog-container-max-width: 500px;
      @screen lg { --mat-dialog-container-max-width: 700px; }
    }
  `
})
export class ImageDialog {
  private readonly data = inject(MAT_DIALOG_DATA);

  readonly image = this.data.image;
}
