import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { CoreModule } from "./core/core.module";
import { HttpModule } from '@angular/http';
import { ShellComponent } from "./core/shell/shell.component";


@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ShellComponent]
})
export class AppModule { }
