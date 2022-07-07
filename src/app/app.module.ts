import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxViewerModule } from 'ngx-viewer';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { WorkExamplesComponent } from './sections/work-examples/work-examples.component';
import { HobbyProjectsComponent } from './sections/hobby-projects/hobby-projects.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { CvComponent } from './sections/cv/cv.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    WorkExamplesComponent,
    HobbyProjectsComponent,
    SkillsComponent,
    CvComponent,
    CardHeaderComponent
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
        scrollOffset: [0, 128]
      }
    ),
    MatButtonModule,
    MatExpansionModule,
    MatMenuModule,
    NgxViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
