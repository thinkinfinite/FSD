import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchForm = new FormGroup({
    searchText: new FormControl()
  });
  private hFlag = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  compareCompany() {
    console.log('test');
    this.router.navigate(['/user/compare-charts']);
    this.hFlag = true;
  }
}
