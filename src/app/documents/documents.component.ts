import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../services/documents/documents.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit {
  liste: any;
  constructor(public documentsService: DocumentsService) {}

  ngOnInit(): void {
    this.liste = this.documentsService.getListe();
  }

  delete(id: number) {
    let res = confirm('Etes-vous sûr de vouloir supprimer le document ?');
    if (res) this.documentsService.deleteDocument(id);
  }
}
