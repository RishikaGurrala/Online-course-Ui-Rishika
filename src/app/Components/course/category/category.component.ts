import { Component, Input } from '@angular/core';
import { CourseCategory } from '../../../models/category';
import { MOCK_COURSE_CATEGORIES } from '../../../mock-data/mock-course-categories';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
@Input() categories: CourseCategory[] = [];
@Input() ViewType: 'tabs' | 'list' = 'list';

constructor() {
  this.categories=MOCK_COURSE_CATEGORIES
}

}