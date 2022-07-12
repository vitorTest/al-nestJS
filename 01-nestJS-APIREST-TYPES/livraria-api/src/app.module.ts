import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { LivrosController } from './livros.controller';
import { AppService } from './app.service';
import { LivrosService } from './livros.service';
import { Livro } from './livros.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
      database: 'livraria_nest_alura',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Livro]),
  ],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule {}
