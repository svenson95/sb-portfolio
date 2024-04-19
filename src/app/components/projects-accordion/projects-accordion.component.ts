import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';

import { PanelData, PanelDataLink } from '../../models';

import { ImageDialog } from './components/image.dialog';
import { ThumbnailPipe } from './thumbnail.pipe';

@Component({
  selector: 'sb-projects-accordion',
  templateUrl: './projects-accordion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatExpansionModule, ThumbnailPipe, NgOptimizedImage],
  styles: `
    img { @apply cursor-pointer shadow; }
  `
})
export class ProjectsAccordionComponent {
  private readonly dialog = inject(MatDialog);
  public readonly projects = input.required<PanelData[]>();

  openDialog(image: PanelDataLink): void {
    this.dialog.open(ImageDialog, {
      data: { image },
      panelClass: 'project-image-dialog'
    });
  }
}
