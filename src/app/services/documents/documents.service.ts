import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DocumentsService {
  liste: any;

  constructor() {
    this.liste = [];
  }
  getListe() {
    let res = localStorage.getItem('document');

    if (res != null) this.liste = JSON.parse(res);
    return this.liste;
  }

  generateId(): number {
    return Date.now();
  }

  addDocument(form: any): void {
    const id = this.generateId();
    form.id = id;
    this.liste.push(form);
    localStorage.setItem('document', JSON.stringify(this.liste));
  }

  updateDocument(form: any): void {
    const id = form.id;
    let elem = this.getDocumentById(id);
    if (!elem.id) {
      alert('Erreur lors de la modification!!');
    } else {
      let indice = this.liste.indexOf(elem);
      if (indice > -1) this.liste[indice] = form;
      localStorage.setItem('document', JSON.stringify(this.liste));
      this.getListe();
    }
  }

  getDocumentById(id: number): any {
    return this.liste.find((elem: any) => elem.id == id);
  }

  deleteDocument(id: number): void {
    let elem = this.getDocumentById(id);
    if (!elem.id) {
      alert('Erreur lors de la suppresion!!');
    } else {
      let indice = this.liste.indexOf(elem);
      this.liste.splice(indice, 1);
      localStorage.setItem('document', JSON.stringify(this.liste));
      this.getListe();
    }
  }
}
