import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

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
import { AppRoutingModule } from './app-routing.module';
import { LinkComponent } from "./components/link/link.component";
import { InNewTabDirective } from "./components/link/in-new-tab.directive";
import { BypassUrlPipe } from './pipes/bypass-url.pipe';
import { HeaderLinkComponent } from './components/header/link/link.component';
import { ProjectsAccordionComponent } from './components/projects-accordion/projects-accordion.component';

const DIRECTIVES = [InNewTabDirective];
const PIPES = [BypassUrlPipe];

const MAT_MODULES = [
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
];

const STANDALONE_COMPONENTS = [
  ProjectsAccordionComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderLinkComponent,
    FooterComponent,
    LinkComponent,
    ThemeToggleComponent,
    CardHeaderComponent,
    AboutMeComponent,
    SkillsComponent,
    WorkSamplesComponent,
    HobbyProjectsComponent,
    CvComponent,
    ...DIRECTIVES,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ...MAT_MODULES,
    ...PIPES,
    ...STANDALONE_COMPONENTS
  ],
  providers: [STORAGE_PROVIDERS, BypassUrlPipe, { provide: WindowToken, useFactory: windowProvider }],
  bootstrap: [AppComponent]
})
export class AppModule {}
