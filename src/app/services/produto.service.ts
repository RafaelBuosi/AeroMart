import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos: Produto[] = [
    { id: 1, nome: 'Café Expresso', categoria: 'Bebida', preco: 6.50, estoque: 20 },
    { id: 2, nome: 'Pão de Queijo', categoria: 'Salgado', preco: 4.50, estoque: 15 }
  ];

  private proximoId = 3;

  listar(): Produto[] {
    return this.produtos;
  }

  inserir(produto: Produto): void {
    produto.id = this.proximoId++;
    this.produtos.push(produto);
  }

  alterar(produtoAtualizado: Produto): void {
    const index = this.produtos.findIndex(p => p.id === produtoAtualizado.id);
    if (index !== -1) {
      this.produtos[index] = { ...produtoAtualizado };
    }
  }

  remover(id: number): void {
    this.produtos = this.produtos.filter(p => p.id !== id);
  }
}