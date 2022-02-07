import { Component, OnInit } from '@angular/core';
import { CarnetsService } from '../services/carnet/carnets.service';

@Component({
  selector: 'app-carnets',
  templateUrl: './carnets.component.html',
  styleUrls: ['./carnets.component.scss'],
})
export class CarnetsComponent implements OnInit {
  liste: any;

  constructor(private carnetsService: CarnetsService) {}

  ngOnInit(): void {
    this.liste = this.carnetsService.getListe();
  }

  delete(id: number) {
    let res = confirm('Etes-vous sûr de vouloir supprimer le carnet ?');
    if (res) this.carnetsService.deleteCarnet(id);
  }
}
