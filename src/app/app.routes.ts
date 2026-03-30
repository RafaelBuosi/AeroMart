import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { GestaoProdutos } from './pages/gestao-produtos/gestao'; // Certifique-se do caminho correto
import { Relatorios } from './pages/relatorios/relatorios';
import { Configuracoes } from './pages/configuracoes/configuracoes';
import { Suporte } from './pages/suporte/suporte';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { 
    path: 'gestao-produtos', 
    component: GestaoProdutos
  },
  { path: 'relatorios', component: Relatorios },
  { path: 'configuracoes', component: Configuracoes },
  { path: 'suporte', component: Suporte },
  { path: '**', redirectTo: 'inicio' }
];