
import { Connection } from 'mongoose';
import { TemplateSchema } from './schema/template.schema';

export const templateProviders = [
  {
    provide: 'TEMPLATE',
    useFactory: (connection: Connection) => connection.model('Template', TemplateSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];