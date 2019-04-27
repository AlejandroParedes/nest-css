import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateTemplateDto } from './dto/create-template.dto';
import { Template } from './interface/template.interface';



@Injectable()
export class TemplateService {
  constructor(
    @Inject('TEMPLATE') private readonly templateModel: Model<Template>
  ) {}

  async create(createTemplateDto: CreateTemplateDto): Promise<Template> {
    const createdCat = new this.templateModel(createTemplateDto);
    return await createdCat.save();
  }

  async findAll(): Promise<Template[]> {
    return await this.templateModel.find().exec();
  }
}
