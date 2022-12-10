import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Query} from '@nestjs/common';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {TaskCommentService} from './task-comment.service';
import {CreateCommentDto} from './create-comment.dto';
import {TaskCommentRdo} from './task-comment.rdo';
import {fillObject} from '@taskforce/core';

@ApiTags('comment')
@Controller('comment')
export class TaskCommentController {
  constructor(
    private readonly taskCommentService: TaskCommentService
  ) {}

  @Post('create')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new comment has been successfully created.'
  })
  async create(@Body() dto: CreateCommentDto) {
    const newComment = await this.taskCommentService.create(dto);

    return fillObject(TaskCommentRdo, newComment);
  }

  @Delete(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Comment has been deleted'
  })
  async destroy(@Param('id') id: string) {
    return await this.taskCommentService.destroy(id);
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List comments'
  })
  async show(
    @Param('id') id: string,
    @Query() limit?: string
  ) {
    const existComments = await this.taskCommentService.show(id);

    return fillObject(TaskCommentRdo, existComments);
  }
}
