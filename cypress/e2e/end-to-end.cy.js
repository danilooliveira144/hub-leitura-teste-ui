/// <reference types="Cypress" />

import cadastroPage from "../support/pages/cadastro-page"
import { faker } from '@faker-js/faker';

describe('Testes End To End do fluxo de cadastro e login', () => {
  beforeEach(() => {
    cadastroPage.visitarPaginaCadastro()
  })

  it('Deve fazer o cadastro e validar o login com o usuário cadastrado', () => {
    let email = `teste${Date.now()}@teste.com`
    let senha = 'user123'

    cadastroPage.preencherCadastro('Danilo', email, '83988888888', senha, senha)
    cy.url().should('include', 'dashboard')
    cy.get('.user-actions > .btn-outline-danger').click()
    cy.login(email, senha)
    cy.url().should('include', 'dashboard')
  })
})