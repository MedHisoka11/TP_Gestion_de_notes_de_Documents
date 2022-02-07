import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarnetsService {
  liste: any;

  constructor() {
    this.liste = [];
  }

  getListe() {
    let res = localStorage.getItem('carnet');

    if (res != null) this.liste = JSON.parse(res);
    return this.liste;
  }

  generateId(): number {
    return Date.now();
  }

  addCarnet(form: any): void {
    const id = this.generateId();
    form.id = id;
    this.liste.push(form);
    localStorage.setItem('carnet', JSON.stringify(this.liste));
  }
  getId(id: number): number {
    let elem = this.getCarnetById(id);
    return elem;
    console.log(elem);
  }

  updateCarnet(form: any): void {
    const id = form.id;
    let elem = this.getCarnetById(id);
    if (!elem.id) {
      alert('Erreur lors de la modification!!');
    } else {
      let indice = this.liste.indexOf(elem);
      if (indice > -1) this.liste[indice] = form;
      localStorage.setItem('carnet', JSON.stringify(this.liste));
      this.getListe();
    }
  }

  getCarnetById(id: number): any {
    return this.liste.find((elem: any) => elem.id == id);
  }

  deleteCarnet(id: number): void {
    let elem = this.getCarnetById(id);
    if (!elem.id) {
      alert('Erreur lors de la suppresion!!');
    } else {
      let indice = this.liste.indexOf(elem);
      this.liste.splice(indice, 1);
      localStorage.setItem('carnet', JSON.stringify(this.liste));
      this.getListe();
    }
  }
}
