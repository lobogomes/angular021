import {Component, inject} from '@angular/core';
import {Button} from 'primeng/button';
import {Skeleton} from 'primeng/skeleton';
import {Tooltip} from 'primeng/tooltip';
import {ThemeService} from '@core/theme/theme.service';
import {LayoutService} from '@core/layout/layout.service';
import {AuthService} from '@core/auth/auth.service';

@Component({
  selector: 'app-menubar',
  imports: [
    Button,
    Skeleton,
    Tooltip
  ],
  templateUrl: './menubar.html',
})
export class Menubar {

  protected readonly layoutService = inject(LayoutService);
  protected readonly themeService = inject(ThemeService);
  protected readonly authService = inject(AuthService);

}
