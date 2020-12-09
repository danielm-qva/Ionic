import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {AlertController} from '@ionic/angular' ;

import {FileDataService} from '../Service/fileData.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  public name: string;

    list: any;


  constructor(private activatedRoute: ActivatedRoute, private fileData: FileDataService , private actionCtr: AlertController) {
     this.getPosts();
   }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async lanzar(descr: string) {
    const alert = await this.actionCtr.create({
      header: 'Description',
      message: descr,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });
    await alert.present();
  }


  getPosts() {
    this.fileData.getXID(this.activatedRoute.snapshot.paramMap.get('id'))
    .then(data => {
      this.list = data;
    });
  }

}
