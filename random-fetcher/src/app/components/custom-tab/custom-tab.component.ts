import { Component, Inject, Input } from '@angular/core';
import { TabsBehavior } from 'src/app/model/tabs.model';
import { CustomTabsComponent } from '../custom-tabs/custom-tabs.component';

@Component({
  selector: 'app-custom-tab',
  templateUrl: './custom-tab.component.html',
  styleUrls: ['./custom-tab.component.scss']
})
export class CustomTabComponent {
  @Input() src: string = ""
  @Input() description: string = ""
  @Input() value: string = ""
  active: boolean = false

  constructor(@Inject(CustomTabsComponent) tabs: CustomTabsComponent) {
    tabs.add(this)
  }
}
