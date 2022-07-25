import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { NgxViewerModule } from 'ngx-viewer';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { WorkSamplesComponent } from './sections/work-samples/work-samples.component';
import { HobbyProjectsComponent } from './sections/hobby-projects/hobby-projects.component';
import { CvComponent } from './sections/cv/cv.component';
import { STORAGE_PROVIDERS } from './shared/storage.service';
import { windowProvider, WindowToken } from './shared/window';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThemeToggleComponent,
    CardHeaderComponent,
    AboutMeComponent,
    SkillsComponent,
    WorkSamplesComponent,
    HobbyProjectsComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: AppComponent
        }
      ],
      {
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
        scrollOffset: [0, 64]
      }
    ),
    MatButtonModule,
    MatExpansionModule,
    MatMenuModule,
    MatIconModule,
    NgxViewerModule
  ],
  providers: [STORAGE_PROVIDERS, { provide: WindowToken, useFactory: windowProvider }],
  bootstrap: [AppComponent]
})
export class AppModule {}
