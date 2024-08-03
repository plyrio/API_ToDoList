import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [TodoModule, DbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
