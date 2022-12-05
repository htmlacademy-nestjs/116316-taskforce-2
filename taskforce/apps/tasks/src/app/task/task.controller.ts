import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query} from '@nestjs/common';
import {TaskDto} from './dto/task.dto';
import {TaskRdo} from './rdo/task.rdo';
import {TaskService} from './task.service';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {fillObject} from '@taskforce/core';
import {UpdateTaskDto} from './dto/update-task.dto';

@ApiTags('task')
@Controller('task')
export class TaskController {
  constructor(
    private readonly taskService: TaskService,
  ) {}

  @Post('create')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new task has been successfully created.'
  })
  async create(@Body() dto: TaskDto) {
    const newTask = await this.taskService.create(dto);

    return fillObject(TaskRdo, newTask);
  }

  @Put(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Task has been update'
  })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateTaskDto
  ) {
    const updatedTask = await this.taskService.update(id, dto);

    return fillObject(TaskRdo, updatedTask);
  }

  @Delete(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Task has been deleted'
  })
  async remove(id: string) {
    return await this.taskService.destroy(id);
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Show task'
  })
  async getTaskById(@Param('id') id: string) {
    return await this.taskService.show(id);
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List tasks'
  })
  async getAllTasks(
    @Query() limit?: string,
    @Query() tags?: string,
    @Query() categories?: string,
    @Query() sortBy?: string,
    @Query() orderBy?: string,
  ) {
    return 'Return all tasks';
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Tasks by user'
  })
  async getAllTasksByUser(
    @Param('id') id: string,
    @Query() status: string,
  ) {
    return 'Return all tasks by user';
  }
}
