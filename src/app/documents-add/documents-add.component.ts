import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../services/documents/documents.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documents-add',
  templateUrl: './documents-add.component.html',
  styleUrls: ['./documents-add.component.scss'],
})
export class DocumentsAddComponent implements OnInit {
  form: any;
  constructor(
    public documentsService: DocumentsService,

    public router: Router
  ) {
    this.form = {
      nom: '',
      description: '',
    };
  }

  add(): void {
    this.documentsService.addDocument(this.form);

    this.router.navigate(['/documents']);
  }

  reset(): void {
    this.form = {
      nom: '',
      description: '',
    };
  }

  ngOnInit(): void {}
}
