import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Produto } from './produto.model';

@Controller('produtos')
export class ProdutosController {
  produtos: Produto[] = [
    new Produto('LIV01', 'Livro TDD e BDD na prática', 220.55),
    new Produto('LIV02', 'Flutter from 0 to Hero', 229.99),
    new Produto('LIV03', 'Machine Learning for Dummies', 120.99),
  ];

  @Get()
  obterTodos(): Produto[] {
    return this.produtos;
  }

  @Get(':id')
  obterUm(@Param() params): Produto {
    return this.produtos[params.id];
  }

  @Post()
  criar(@Body() produto: Produto) {
    produto.id = 100;
    this.produtos.push(produto);
  }

  @Put(':id')
  alterar(@Param() params, @Body() produto): Produto {
    this.produtos[params.id] = new Produto(
      produto.codigo,
      produto.nome,
      produto.preco,
    );

    return produto;
  }

  @Delete(':id')
  excluir(@Param() params){
    this.produtos.pop();
  }
}
