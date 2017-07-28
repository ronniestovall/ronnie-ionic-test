import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the ProjectsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html'
})
export class ProjectsPage {
  newProject:any = {};
  projects:any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
    private db: AngularFireDatabase
  ) {
    //ON LOAD
    storage.get('projects').then((data) => {
      this.projects=data;
      if(!this.projects) {
        this.projects = [];
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  }
  
  test(project){
    console.log(project);
    project.name = 'Hello There';
  }
  
  addProject() {
    this.projects.push(this.newProject);
    this.storage.set('projects', this.projects);
  }
}
