import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppRoutingModule, AppComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieService } from './movie/movie.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [...AppComponents, AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CoreModule],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
