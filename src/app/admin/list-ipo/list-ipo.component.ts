import { Component, OnInit } from '@angular/core';
import { Ipo } from 'src/app/service/shared.model';
import { IpoService } from 'src/app/service/ipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-ipo',
  templateUrl: './list-ipo.component.html',
  styleUrls: ['./list-ipo.component.scss']
})
export class ListIpoComponent implements OnInit {

  public ipoList: Ipo[];
  constructor(private ipoService: IpoService,
              private router: Router) { }

  ngOnInit() {
    this.initData();
  }

  private async initData() {
     this.ipoList = await this.ipoService.getIpoList();
  }

  addIpo() {
    this.router.navigate(['admin/add-ipo']);
  }

  getIpoDetail(id: number) {
    console.log('get ipo detail:', id);
  }
}
