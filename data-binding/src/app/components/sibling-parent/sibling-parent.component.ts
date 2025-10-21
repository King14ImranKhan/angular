import { Component } from '@angular/core';
import { SiblingAComponent } from '../sibling-a/sibling-a.component';
import { SiblingBComponent } from '../sibling-b/sibling-b.component';

@Component({
  selector: 'app-sibling-parent',
  standalone: true,
  templateUrl: './sibling-parent.component.html',
  imports: [SiblingAComponent, SiblingBComponent]
})
export class SiblingParentComponent {}
