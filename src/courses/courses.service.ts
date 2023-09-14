import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  findAll(type?: string) {
    return `This action returns all courses${ type ? " by type-" +  type : "" }`;
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }
  
  create(createCourseDto: CreateCourseDto) {
    return `This action adds a new course with name: ${ createCourseDto.name }`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
