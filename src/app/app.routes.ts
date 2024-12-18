import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/Core/about-us/about-us.component';
import { PlansAndPricingComponent } from './Components/plans-and-pricing/plans-and-pricing.component';
import { BrowseCourseComponent } from './Components/course/browse-course/browse-course.component';
import { ContactUsComponent } from './Components/Core/contact-us/contact-us.component';
import { CourseByCategoryComponent } from './Components/course/course-by-category/course-by-category.component';
import { CategoryComponent } from './Components/course/category/category.component';

export const routes: Routes = [
    {path:'' , redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path:'course/category', component:CategoryComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: 'plans-and-price', component: PlansAndPricingComponent},
    //{path: 'course/browse', component:BrowseCourseComponent},
    {path: "course/category/:categoryId", component:CourseByCategoryComponent}
];
