import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {GithubService} from './github.service';
import {LinechartModule, BarchartModule } from 'charts-d3';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LinechartModule,
    BarchartModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
