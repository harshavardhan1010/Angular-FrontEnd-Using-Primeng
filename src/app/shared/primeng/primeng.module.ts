import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorModule } from 'primeng/paginator';
import { BadgeModule } from 'primeng/badge';
const modules: any = [
  BadgeModule,
  ButtonModule,
  BrowserModule,
  CommonModule,
  BrowserAnimationsModule,
  SidebarModule,
  CardModule,
  InputTextModule,
  PaginatorModule,
];
@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class PrimengModule {}
