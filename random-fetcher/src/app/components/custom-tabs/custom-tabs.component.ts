import { Component } from '@angular/core';
import {  TabBehavior, TabsBehavior } from 'src/app/model/tabs.model';
import { CustomTabComponent } from '../custom-tab/custom-tab.component';


@Component({
  selector: 'app-custom-tabs',
  templateUrl: './custom-tabs.component.html',
  styleUrls: ['./custom-tabs.component.scss']
})
export class CustomTabsComponent {
tabs: CustomTabComponent[] = []

constructor(){}

add(tab: CustomTabComponent) {
if (this.tabs.length === 0) tab.active = true
this.tabs.push(tab)
}

selectTab(tab: CustomTabComponent) {
  this.tabs.forEach(tb => {
    tb.active = false
  })

  tab.active = true
}

}
