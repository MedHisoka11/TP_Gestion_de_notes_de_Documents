import { Component, OnInit } from '@angular/core';
import { CarnetsService } from '../services/carnet/carnets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carnets-add',
  templateUrl: './carnets-add.component.html',
  styleUrls: ['./carnets-add.component.scss'],
})
export class CarnetsAddComponent implements OnInit {
  form: any;
  constructor(public carnetsService: CarnetsService, public router: Router) {
    this.form = {
      nom: '',
      description: '',
    };
  }

  add(): void {
    this.carnetsService.addCarnet(this.form);
    this.router.navigate(['/carnets']);
  }

  reset(): void {
    this.form = {
      nom: '',
      description: '',
    };
  }

  ngOnInit(): void {}
}
