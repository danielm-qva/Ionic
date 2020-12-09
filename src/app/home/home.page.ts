import { Component, OnInit } from '@angular/core';

import {FileDataService} from '../Service/fileData.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  list: any;

  constructor(public fileData: FileDataService) {
  }


  ionViewDidLoad() {

    }


  getPosts() {
    this.fileData.getPosts()
    .then(data => {
      this.list = data;
    });
  }


  ngOnInit() {
       }


}
