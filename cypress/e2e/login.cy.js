describe('Automação E2E - ServeRest Front', () => {
  it('Deve acessar a página de login e validar os elementos da tela', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('[data-testid="email"]').should('be.visible');
    cy.get('[data-testid="senha"]').should('be.visible');
    cy.get('[data-testid="entrar"]').should('be.visible');
  });

  it('Deve preencher os dados de login e tentar autenticar', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('[data-testid="email"]').type('fulano@qa.com');
    cy.get('[data-testid="senha"]').type('teste123');
    cy.get('[data-testid="entrar"]').click();
    cy.get('.alert-dismissible').should('contain.text', 'Email e/ou senha inválidos');
  });

  it('Deve navegar para a tela de cadastro ao clicar no link correspondente', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('a').contains('Cadastre-se').click();
    
    // Valida que a URL contém o caminho correto sem acento
    cy.url().should('include', '/cadastrarusuarios');
    
    // Valida o texto principal da página de cadastro
    cy.get('h2').should('contain.text', 'Cadastro');
  });
});