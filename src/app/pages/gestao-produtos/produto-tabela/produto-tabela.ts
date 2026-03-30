import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../../models/produto.model';

@Component({
  selector: 'app-produto-tabela',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto-tabela.html',
  styleUrl: './produto-tabela.css'
})
export class ProdutoTabelaComponent {
  @Input() produtos: Produto[] = [];
  @Output() editarEvento = new EventEmitter<Produto>();
  @Output() excluirEvento = new EventEmitter<number>();

  aoEditar(p: Produto) {
    this.editarEvento.emit(p);
  }

  aoExcluir(id: number) {
    this.excluirEvento.emit(id);
  }
}