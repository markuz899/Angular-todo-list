import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { GitHubService } from './service/github.service';

@NgModule({
  declarations: [AppComponent, TodosComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [GitHubService],
  bootstrap: [AppComponent],
})
export class AppModule {}
