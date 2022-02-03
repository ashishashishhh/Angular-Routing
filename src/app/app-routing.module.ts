import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { HotelComponent } from './hotel/hotel.component';
import { FlightComponent } from './flight/flight.component';
import { TravelComponent } from './travel/travel.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactComponent},
  {path:'hotel',component:HotelComponent},
  {path:'flight',component:FlightComponent},
  {path:'travel',component:TravelComponent},
  {path:'services',component:ServicesComponent}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
