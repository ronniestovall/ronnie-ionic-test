import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProjectsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {
  projects:any=[

{
  name:'Claim Academy', 
  description:'We taugh here',
 image:'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg'
},
{
  name:'Decsphere',
description: 'Business Card Scanning',
image:'http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-21.jpg'
},

{
  name:'java jquery',
  description: 'Learn Jquery',
image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLWQbteZGjVbU9BwN9k0s9dhTgBCROrjMd2zAfJGC-1ovvuo8Wsw'
}
  ];

  constructor(public navCtrl: NavController,public navParams: NavParams) {
  }

 test(project){
  console.log(project);
 }
}
