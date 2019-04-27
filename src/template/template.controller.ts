import { Controller, Get, Post, Body } from '@nestjs/common';
import { TemplateService } from './template.service';
import { Template } from './interface/template.interface';
import { CreateTemplateDto } from './dto/create-template.dto';

@Controller("template")
export class TemplateController {
  constructor(
    private readonly templateService: TemplateService
  ) {}

  @Get()
  getTemplates(): Promise<Template[]> {
    return this.templateService.findAll();
  }

  @Post()
  save(@Body() createCatDto: CreateTemplateDto): Promise<Template> {
    return this.templateService.create(createCatDto);
  }
}
