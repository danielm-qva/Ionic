import { Component, OnInit } from '@angular/core';


import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {FileDataService} from './Service/fileData.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public selectedIndex = 0;

  public Elem = [
    {
      title: 'Grade',
      url: '/folder/1',
      icon: 'copy'
    },
    {
      title: 'Grade',
      url: '/folder/2',
      icon: 'copy'
    },
    {
      title: 'Grade',
      url: '/folder/3',
      icon: 'copy'
    },
    {
      title: 'Grade',
      url: '/folder/4',
      icon: 'copy'
    },
    {
      title: 'Grade',
      url: '/folder/5',
      icon: 'copy'
    },
    {
      title: 'Grade',
      url: '/folder/6',
      icon: 'copy'
    }
  ];

  public Junior =[
   {
     title: 'Grade',
     url: '/folder/7',
     icon: 'copy'
   },
    {
      title: 'Grade',
      url: '/folder/8',
      icon: 'copy'
    },
    {
      title: 'Grade',
      url: '/folder/9',
      icon: 'copy'
    }
  ];

  public Home =[
  {  title: 'Home',
    url: '/home',
    icon: 'home'}
  ];


 public Senor = [
    {
      title: 'Grade',
    url: '/folder/10',
    icon: 'copy'
  },
  {
    title: 'Grade',
  url: '/folder/11',
  icon: 'copy'
},
{
  title: 'Grade',
url: '/folder/12',
icon: 'copy'
}
];

  constructor(private platform: Platform,private splashScreen: SplashScreen,
    private statusBar: StatusBar , private filedata:FileDataService) {

    this.initializeApp();
       //localStorage.setItem("Data" , JSON.stringify("dadad"));

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.Elem.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }


}
