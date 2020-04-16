import { Course } from './course.model'

export interface CoursesJson {
    status: string;
    message: string;
    items: [Course];
}
