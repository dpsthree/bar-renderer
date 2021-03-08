import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BarRendererComponent } from './bar-renderer/bar-renderer.component';
import { BarRendererNativeComponent } from './bar-renderer-native/bar-renderer-native.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BarRendererComponent, BarRendererNativeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
