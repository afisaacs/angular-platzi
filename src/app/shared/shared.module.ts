import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    ExponentialPipe,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    ExponentialPipe,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
