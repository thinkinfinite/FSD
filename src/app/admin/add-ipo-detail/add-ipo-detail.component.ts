import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { IpoService } from 'src/app/service/ipo.service';
import { Ipo } from 'src/app/service/shared.model';

@Component({
  selector: 'app-add-ipo-detail',
  templateUrl: './add-ipo-detail.component.html',
  styleUrls: ['./add-ipo-detail.component.scss']
})
export class AddIpoDetailComponent implements OnInit {
  addIpoForm = new FormGroup({
    company: new FormControl(),
    stockExchange: new FormControl(),
    stockCode: new FormControl(),
    shareNums: new FormControl(),
    sharePrice: new FormControl(),
    openTime: new FormControl(),
    desc: new FormControl()
  });

  public ipo: Ipo;

  constructor(private router: Router,
              private ipoService: IpoService) { }

  ngOnInit() {
  }

  async onSubmit() {
    this.ipo = await this.ipoService.saveIpoDetail(this.addIpoForm.value);
    alert('Save successfully!');
  }
}
