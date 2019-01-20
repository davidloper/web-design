import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path : '', component : BannerComponent},
  { path : 'subscribe', component : SubscribeFormComponent},
  { path : 'pricing', component : PricingComponent},
  { path : 'about-us', component : AboutUsComponent},
  { path : 'contact-us', component : ContactUsComponent},
  { path : '**', component : PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
