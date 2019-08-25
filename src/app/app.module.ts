import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from  '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { LedgerBarComponent } from './ledger-bar/ledger-bar.component';
import { NavComponent } from './nav/nav.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatIconModule, RouterModule ],
  declarations: [ AppComponent, HelloComponent, SidebarComponent, LedgerBarComponent, NavComponent, BannerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
