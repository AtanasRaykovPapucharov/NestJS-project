import {IsEnum, MinLength} from 'class-validator';

enum CourseType {
    JS = 'js',
    Rust = 'rust'
}

export class CreateCourseDto {
    @MinLength(3)
    name: string;

    @IsEnum(CourseType, {message: 'Use correct course type'})
    type?: string;
}
