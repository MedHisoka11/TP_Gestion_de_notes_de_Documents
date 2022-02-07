import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleComponent } from './title/title.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CarnetsComponent } from './carnets/carnets.component';
import { CarnetsAddComponent } from './carnets-add/carnets-add.component';
import { FormsModule } from '@angular/forms';
import { CarnetsUpdateComponent } from './carnets-update/carnets-update.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentsAddComponent } from './documents-add/documents-add.component';
import { DocumentsUpdateComponent } from './documents-update/documents-update.component';
import { DocsMarkdownComponent } from './docs-markdown/docs-markdown.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleComponent,
    HomePageComponent,
    CarnetsComponent,
    CarnetsAddComponent,
    CarnetsUpdateComponent,
    DocumentsComponent,
    DocumentsAddComponent,
    DocumentsUpdateComponent,
    DocsMarkdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
