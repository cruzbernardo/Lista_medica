### Desenvolver um sistema que faça a gestão de cadastros de médicos. O Sistema deve suportar as seguintes operações: ###

* Insert
* Update
* Select
* Soft Delete


### No cadastro do médico, devem ser cadastrados os seguintes itens: ###

* Nome do médico com no máximo 120 caractÃ©res
* CRM: somente números com no máximo 7 caracteres
* Telefone fixo: somente números
* Telefone celular: somente nÃºmeros
* CEP: somente números (Ao cadastrar o CEP, deve ser feita uma requisição via XHR para a API dos correios e retornar todos os dados de endereço do cliente).
* Especialidade médica (máximo de duas especialidades)


### Itens importantes: ###

* Esta no padrão REST
* Criado mecanismo de busca por todos os campos do cadastro do médico, incluindo o endereço
* Utilizado ferramenta de validação
* Funções especialistas
* Para documentação e requisição será utilizado Swagger
* Testes unitários
* Testes "end to end"
