import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';

import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DemoComponent,
    PageNotFoundComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'COP' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
