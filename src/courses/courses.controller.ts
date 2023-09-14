import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
  NotFoundException,
  ParseIntPipe,
  ValidationPipe,
  UseGuards
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import {RouteGuard} from 'src/guards/route.guard';

@Controller('courses')
@UseGuards(RouteGuard)
export class CoursesController {
  private readonly courses: CoursesService;

  constructor (coursesService: CoursesService) {
    this.courses = coursesService;
  }

  @Get()
  findAll(@Query('type') type: string | undefined) {
    return this.courses.findAll(type);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.courses.findOne(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Post()
  create(@Body(new ValidationPipe()) createCourseDto: CreateCourseDto) {
    return this.courses.create(createCourseDto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCourseDto: UpdateCourseDto) {
    try {
      return this.courses.update(id, updateCourseDto);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.courses.remove(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
