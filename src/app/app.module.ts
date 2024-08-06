import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SearchUserComponent } from './search-user/search-user.component';
import { FormsModule } from '@angular/forms';
import { filterDataPipe } from './custom-pipes/filter-data.pipe';

@NgModule({
  imports: [CommonModule, BrowserModule, HttpClientModule, FormsModule],
  declarations: [AppComponent, SearchUserComponent, filterDataPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
