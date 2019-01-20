import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';

import { FormsModule } from '@angular/forms';
import { AlertBarComponent } from './alert-bar/alert-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    SubscribeFormComponent,
    AlertBarComponent,
    PageNotFoundComponent,
    PricingComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
