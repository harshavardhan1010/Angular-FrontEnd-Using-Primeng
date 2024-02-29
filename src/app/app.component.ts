import { Component, OnInit, HostBinding } from '@angular/core';
import { IconDefinition, faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { AppService } from './services/app.service';

// Theme vars
const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark').matches;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-ecommerce';
  // theme vars vars
  isDarkModeEnabled: boolean = false;
  @HostBinding('class.dark') darkClasses: boolean = true;

  sidebarVisible: boolean = false;
  sunIcon: IconDefinition = faSun;
  moonIcon: IconDefinition = faMoon;
  themes = {
    light: 'lara-light-teal',
    dark: 'lara-dark-purple',
  };
  constructor(private appservice: AppService) {}
  ngOnInit(): void {
    userTheme === 'dark' || (!userTheme && systemTheme)
      ? this.toggleDarkMode(true)
      : this.toggleDarkMode(false);
  }
  darkMode(): boolean {
    this.isDarkModeEnabled = !this.isDarkModeEnabled;
    this.toggleDarkMode(this.isDarkModeEnabled);
    return this.isDarkModeEnabled;
  }
  toggleDarkMode(change: boolean) {
    this.darkClasses = change;
    this.isDarkModeEnabled = change;
    console.log(change ? this.themes.dark : this.themes.light);
    this.appservice.switchTheme(change ? this.themes.dark : this.themes.light);
    localStorage.setItem('theme', change ? 'dark' : 'light');
  }
}
