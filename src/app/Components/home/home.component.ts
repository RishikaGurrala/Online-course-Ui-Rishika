import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PlansAndPricingComponent } from "../plans-and-pricing/plans-and-pricing.component";
import { CategoryComponent } from "../course/category/category.component";
import { CommonModule } from '@angular/common';
import { BrowseCourseComponent } from "../course/browse-course/browse-course.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, PlansAndPricingComponent, CategoryComponent, CommonModule, BrowseCourseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
