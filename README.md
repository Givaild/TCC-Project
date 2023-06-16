# TCC-Project

Trabalho de Conclusão de Curso de graduação
da Universidade Virtual do Estado de São
Paulo (UNIVESP), como parte dos requisitos
para obtenção do título de Bacharel em
Engenharia de Computação.
Orientadora: Natália de Souza Pelinson

Desenvolvimento de Aplicativo para monitoramento Real-time
de Pets em Clínicas Veterinárias, utilizando Web-App em HTML, CSS
e TypeScript e Framework Angular


O objetivo principal desse projeto é  monitorar a
distância de animais de estimação para empresas de hotelaria Pet sendo um diferencial
durante a ausência de seu(s) tutor(es). Nosso web-app permite com 
segurança (através da implementação de acesso via login e senha), o acesso de tutores a 
câmeras IP localizadas em Hotéis ou clínicas pet, permitindo que acompanhem a estadia de 
seu pet à distância. Pelo lado do estabelecimento, além de oferecer o serviço como um 
diferencial a seus clientes, o sistema permite de forma simples fazer o gerenciamento das 
câmeras e dos acessos dos clientes, podendo inserir, excluir ou editar logins de acesso e
câmeras de forma intuitiva. Hotéis e clínicas pets se beneficiariam de um sistema simples, 
porém com recursos estruturados que poderia facilmente agregar novas funcionalidades. 
Com um visual limpo, o acesso remoto pode ser feito com rapidez, facilitando o acesso 
para tutores que estejam em locais com conexão limitada ou em deslocamento.
Em próximas versões, pode ser implementado login associado ao tempo de estádia do pet 
no Hotel, fornecendo o acesso do tutor às câmeras de forma automática baseada na data de 
entrada e saída do pet no estabelecimento.
Como implementação do aplicativo, a depender do tipo de câmera disponível no 
estabelecimento, seria possível o tutor interagir com seu pet utilizando câmeras com áudio 
bidirecional.O web-app oferece praticidade, uma vez que a 
disponibilidade de tecnologia e acesso à internet hoje está bem difundida. O monitoramento 
em tempo real oferece transparência e segurança aos tutores. Quanto ao custo para 
implementação do projeto, dependerá da infraestrutura atual do estabelecimento, porém o 
investimento dos comerciantes pode reverter em retorno financeiro rápido ao oferecer aos 
tutores um serviço diferenciado à distância que pode ser um atrativo da parte do tutor

# Entendendo a estrutura do projeto

## Requisitos para rodar o projeto

### Setup de ambiente:

- [Node LTS](https://nodejs.org/en)
  - Usando [`nvm`](https://github.com/nvm-sh/nvm)
    - `nvm install`
    - `nvm use`

### Como rodar na minha máquina?

### Clonar repositorio:
```console
  git clone https://github.com/Givaild/TCC-Project 
```

### No terminal escolhar o diretorio "TCC-Project":
```console
  cd TCC-Project
```

### Rodar backend:
```console
  cd backend
  npm start
```

### Rodar frontend:

```console
  cd frontendHotel
  npm start
```

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 15.2.4.

## Servidor de desenvolvimento

Execute `ng serve` para um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

### Estrutura do projeto

- `./backend`: É o diretorio aonde temos um JSON-Server para simular um backend.
- `./frontendHotel`: É o diretorio aonde temos o front e basicamente todo o codigo do projeto
- `./src/components` e `./src/views`: São todos os pedaços primordiais de interface
 

### Como me localizar no projeto?

- O projeto esta todo em modulos o que facilita seu entendimento e manutenção`
   - Pode-se  ir navegando pelos componentes para ir se encontrando e fazer a alteração que deseja




