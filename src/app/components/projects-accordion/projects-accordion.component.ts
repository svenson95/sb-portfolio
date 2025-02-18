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
  imports: [MatExpansionModule, ThumbnailPipe, NgOptimizedImage],
  styles: `
    @use 'src/styles/constants';

    :host ::ng-deep mat-expansion-panel.mat-expansion-panel {
      background: none;

      &:not([class*='mat-elevation-z']) {
        box-shadow: none;
      }

      &,
      &:not(.mat-expanded) {
        .mat-expansion-panel-header {
          &.cdk-keyboard-focused:not([aria-disabled='true']),
          &.cdk-program-focused:not([aria-disabled='true']),
          &.mat-expansion-panel-header:hover:not([aria-disabled='true']) {
            background: none;
          }
        }
      }

      mat-expansion-panel-header {
        height: 64px;
        white-space: nowrap;
        --mat-sys-title-medium-size: 14px;

        &.mat-expanded {
          height: 80px;
        }

        span.mat-content {
          flex-direction: column;

          mat-panel-title {
            font-weight: 500;
            color: light-dark(constants.$darkgray, constants.$lightboxgray);
            line-height: 1.2em;
          }

          mat-panel-description {
            font-family: constants.$secondary-font;
            font-size: 12px;
            font-weight: 500;
            color: light-dark(constants.$lightgray, constants.$mediumgray);
            line-height: 1em;
          }
        }

        span.mat-expansion-indicator {
          margin-right: 2px;
        }
      }

      div.mat-expansion-panel-body {
        font-family: constants.$secondary-font;
        color: light-dark(constants.$darkgray, constants.$lightboxgray);

        p > a:hover {
          text-decoration: underline;
        }

        div.links {
          @apply flex gap-3 mb-4 items-center;

          a {
            padding: 4px 8px;

            &:hover { text-decoration: underline; }
          }
        }
      }

      div.links span {
        color: light-dark(constants.$mediumgray, constants.$lightgray);
      }

      div.links a {
        background-color: light-dark(
          constants.$superlightgray,
          constants.$deepgray
        );
      }
    }

    img { @apply cursor-pointer shadow; }

    div.gallery {
      @apply flex flex-wrap mt-5 p-0 gap-2;

      > a img {
        @apply w-[64px] h-[64px] object-cover align-middle;
        cursor: -webkit-zoom-in;
        cursor: zoom-in;
        box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
        transition: transform 200ms ease-in;

        &:hover { transform: translateY(-2px); }
      }
    }
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
