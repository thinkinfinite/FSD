import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/service/ipo.service';
import { Ipo } from 'src/app/service/shared.model';

@Component({
  selector: 'app-ipo-details',
  templateUrl: './ipo-details.component.html',
  styleUrls: ['./ipo-details.component.scss']
})
export class IpoDetailsComponent implements OnInit {
  public ipoList: Ipo[];
  constructor(private ipoService: IpoService) { }

  ngOnInit() {
    this.initData();
  }

  private async initData() {
    this.ipoList = await this.ipoService.getIpoList();
 }

}
