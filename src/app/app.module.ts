import { ThreadsService } from './services/threads.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { MessageListComponent } from './message-list/message-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserSelectionComponent,
    ThreadSectionComponent,
    MessageSectionComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
