import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const modules: any = [
  ButtonModule,
  BrowserModule,
  CommonModule,
  BrowserAnimationsModule,
  SidebarModule,
  CardModule,
];
@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class PrimengModule {}
