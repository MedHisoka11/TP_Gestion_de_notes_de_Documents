import { Component, OnInit } from '@angular/core';
import { CarnetsService } from '../services/carnet/carnets.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carnets-update',
  templateUrl: './carnets-update.component.html',
  styleUrls: ['./carnets-update.component.scss'],
})
export class CarnetsUpdateComponent implements OnInit {
  carnet: any;
  form: any;
  constructor(
    public carnetsService: CarnetsService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.form = {
      nom: '',
      description: '',
    };
  }

  update(): void {
    this.carnetsService.updateCarnet(this.form);
    this.router.navigate(['/carnets']);
  }

  reset(): void {
    this.form = { ...this.carnet };
  }

  ngOnInit(): void {
    let id: any;
    this.carnetsService.getListe();
    this.route.params.subscribe((params) => (id = params['id']));
    this.carnet = this.carnetsService.getCarnetById(id);
    this.form = { ...this.carnet };
  }
}
