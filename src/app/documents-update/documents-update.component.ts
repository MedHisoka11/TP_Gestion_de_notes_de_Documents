import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../services/documents/documents.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-documents-update',
  templateUrl: './documents-update.component.html',
  styleUrls: ['./documents-update.component.scss'],
})
export class DocumentsUpdateComponent implements OnInit {
  document: any;
  form: any;
  constructor(
    public documentsService: DocumentsService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.form = {
      nom: '',
      description: '',
    };
  }

  update(): void {
    this.documentsService.updateDocument(this.form);
    this.router.navigate(['/documents']);
  }

  reset(): void {
    this.form = { ...this.document };
  }

  ngOnInit(): void {
    let id: any;
    this.documentsService.getListe();
    this.route.params.subscribe((params) => (id = params['id']));
    this.document = this.documentsService.getDocumentById(id);
    this.form = { ...this.document };
  }
}
