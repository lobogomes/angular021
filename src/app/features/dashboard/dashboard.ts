import {ChangeDetectionStrategy, Component,} from '@angular/core';
import {AvatarModule} from 'primeng/avatar';
import {ButtonModule} from 'primeng/button';
import {SkeletonModule} from 'primeng/skeleton';
import {DividerModule} from 'primeng/divider';

@Component({
  selector: 'app-dashboard',
  imports: [
    AvatarModule,
    ButtonModule,
    SkeletonModule,
    DividerModule,

  ],
  templateUrl: './dashboard.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {

}
