import { Module } from '@nestjs/common';
import { TemplateController } from './template.controller';
import { TemplateService } from './template.service';
import { DatabaseModule } from '../database/database.module';
import { templateProviders } from './template.provider';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [TemplateController],
  providers: [
    TemplateService,
    ...templateProviders
  ],
})
export class TemplateModule {}
