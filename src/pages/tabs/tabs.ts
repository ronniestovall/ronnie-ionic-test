import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProjectsPage} from '../Projects/Projects';
import {YoutubePage} from '../youtube/youtube';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ProjectsPage;
  tab5Root = YoutubePage
  constructor() {

  }
}
