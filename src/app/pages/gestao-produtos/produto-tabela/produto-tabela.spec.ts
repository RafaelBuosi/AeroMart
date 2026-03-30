import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoTabela } from './produto-tabela';

describe('ProdutoTabela', () => {
  let component: ProdutoTabela;
  let fixture: ComponentFixture<ProdutoTabela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoTabela]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoTabela);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
