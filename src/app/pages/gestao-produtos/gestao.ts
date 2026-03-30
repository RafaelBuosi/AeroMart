import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoFormComponent } from './produto-form/produto-form';
import { ProdutoTabelaComponent } from './produto-tabela/produto-tabela';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-gestao-produtos',
  standalone: true,
  imports: [CommonModule, ProdutoFormComponent, ProdutoTabelaComponent],
  templateUrl: './gestao.html',
  styleUrl: './gestao.css'
})
export class GestaoProdutos implements OnInit {
  listaProdutos: Produto[] = [];
  produtoSelecionado: Produto | null = null;
  
  exibirModalExclusao = false;
  idParaExcluir: number | undefined = undefined;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.carregarDados();
  }

  carregarDados() {
    this.listaProdutos = this.produtoService.listar();
    this.produtoSelecionado = null;
  }

  prepararEdicao(produto: Produto) {
    this.produtoSelecionado = { ...produto };
  }

  abrirConfirmacao(id: number | undefined) {
    this.idParaExcluir = id;
    this.exibirModalExclusao = true;
  }

  fecharModal() {
    this.exibirModalExclusao = false;
    this.idParaExcluir = undefined;
  }

  confirmarRemocao() {
    if (this.idParaExcluir !== undefined) {
      this.produtoService.remover(this.idParaExcluir);
      this.carregarDados();
    }
    this.fecharModal();
  }
}