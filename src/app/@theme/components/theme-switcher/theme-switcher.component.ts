import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { NbJSThemeOptions } from '@nebular/theme/services/js-themes/theme.options';
import { AnalyticsService } from '../../../@core/utils/analytics.service';

@Component({
  selector: 'ngx-theme-switcher',
  styleUrls: ['./theme-switcher.component.scss'],
  template: `
  <div hidden>
    <label class="theme-switch">
      <span class="light">Light</span>
      <div class="switch">
        <input type="checkbox" [checked]="false" (change)="this.toggleTheme('false')" #theme>
        <span class="slider"></span>
      </div>
      <span class="cosmic">Cosmic</span>
    </label>
    </div>
  `,
})
export class ThemeSwitcherComponent implements OnInit {
  theme: NbJSThemeOptions;

  constructor(private themeService: NbThemeService, private analyticsService: AnalyticsService) {
  }

  ngOnInit() {
    
      this.toggleTheme(false);
  }

  toggleTheme(theme: boolean) {
    const boolTheme = this.boolToTheme(theme);
    this.themeService.changeTheme(boolTheme);
    this.analyticsService.trackEvent('switchTheme');
  }

  currentBoolTheme() {
    return this.themeToBool(this.theme);
  }

  private themeToBool(theme: NbJSThemeOptions) {
    return false;
  }

  private boolToTheme(theme: boolean) {
    return theme ? 'default' : 'default';
  }
}
