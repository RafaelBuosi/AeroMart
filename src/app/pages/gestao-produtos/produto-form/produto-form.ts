import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../../models/produto.model';
import { ThemeService } from '../../../services/theme.service';
import { ProdutoService } from '../../../services/produto.service';

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produto-form.html',
  styleUrl: './produto-form.css'
})
export class ProdutoFormComponent implements OnInit, OnChanges {
  @Input() produtoParaEditar: Produto | null = null;
  @Output() salvoComSucesso = new EventEmitter<void>();

  isEditing: boolean = false;
  isDarkMode: boolean = false;

  produto: Produto = this.getNovoProduto();

  constructor(
    private themeService: ThemeService,
    private produtoService: ProdutoService
  ) {}

  ngOnInit() {
    this.isDarkMode = this.themeService.isDark();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['produtoParaEditar'] && this.produtoParaEditar) {
      this.produto = { ...this.produtoParaEditar };
      this.isEditing = true;
    }
  }

  salvar() {
    if (this.isEditing && this.produto.id) {
      this.produtoService.alterar(this.produto);
    } else {
      this.produtoService.inserir(this.produto);
    }
    this.limparFormulario();
    this.salvoComSucesso.emit();
  }

  cancelarEdicao() {
    this.isEditing = false;
    this.limparFormulario();
  }

  limparFormulario() {
    this.produto = this.getNovoProduto();
    this.isEditing = false;
  }

  private getNovoProduto(): Produto {
    return { nome: '', categoria: '', preco: 0, estoque: 0 };
  }
}