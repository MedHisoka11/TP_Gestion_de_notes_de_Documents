import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CarnetsComponent } from './carnets/carnets.component';
import { CarnetsAddComponent } from './carnets-add/carnets-add.component';
import { CarnetsUpdateComponent } from './carnets-update/carnets-update.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentsAddComponent } from './documents-add/documents-add.component';
import { DocumentsUpdateComponent } from './documents-update/documents-update.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'carnets', component: CarnetsComponent },
  { path: 'carnets/add', component: CarnetsAddComponent },
  { path: 'carnets/update/:id', component: CarnetsUpdateComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'documents/add', component: DocumentsAddComponent },
  { path: 'documents/update/:id', component: DocumentsUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
