import {IsEnum, MinLength} from 'class-validator';

enum CourseType {
    JS = 'JavaScript',
    Rust = 'Rust'
}

export class CreateCourseDto {
    @MinLength(3)
    name: string;

    @IsEnum(CourseType, {message: 'Use correct course type'})
    type?: string;
}
