# 🚀 Automação de Testes E2E (UI) - ServeRest E-commerce

Projeto de automação de testes End-to-End (UI) desenvolvido com **Cypress** e **JavaScript**, com foco na validação de fluxos críticos de interface (Autenticação, Gestão de Erros de Negócio e Navegação de Rotas) utilizando a aplicação frontend **ServeRest**.

---

## 🎯 Objetivo do Projeto
Demonstrar competência técnica na criação de uma suíte de testes automatizados de ponta a ponta (E2E), aplicando boas práticas de mercado, seletores resilientes (`data-testid`), validações de rotas e verificação de mensagens de feedback visual na interface.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas
* **Cypress** (v15+) - Framework principal de testes E2E.
* **JavaScript (ES6+)** - Linguagem de programação.
* **ServeRest Front** (https://front.serverest.dev) - Aplicação Alvo de Testes.
* **Git & GitHub** - Versionamento de código e controle de versões.

---

## 🧪 Cenários de Teste Mapeados

| ID | Cenário | Descrição / Comportamento Validado | Status |
| :--- | :--- | :--- | :--- |
| **CT01** | Validação de Elementos Visuais | Verifica se os campos de e-mail, senha e o botão de acesso estão visíveis na página de login. | ✅ Passou |
| **CT02** | Tratamento de Erro de Autenticação | Insere credenciais inválidas/não cadastradas e valida a exibição da mensagem de alerta na interface. | ✅ Passou |
| **CT03** | Navegação de Rotas (Cadastro) | Valida a transição fluida da tela de login para o formulário de cadastro de novos usuários. | ✅ Passou |

---

## 🎥 Demonstração Prática (Execução do Teste)

Abaixo é apresentada a gravação real da execução da suíte de testes automatizados:

*(Dica: O vídeo completo da execução encontra-se salvo no repositório no diretório `cypress/videos/login.cy.js.mp4`)*

---

## 🚀 Como Executar o Projeto Localmente

1. **Pré-requisitos:** Certifique-se de ter o **Node.js** instalado na sua máquina.
2. **Clonar o repositório:**
   ```bash
   git clone [https://github.com/eumesmooliveira/automacao-ui-cypress.git](https://github.com/eumesmooliveira/automacao-ui-cypress.git)