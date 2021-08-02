# Como iniciar a aplicação

### Front-end

Abrir o terminal dentro da pasta WEB e executar o comando:
```
npm install
```

Após a instalação das dependencias, inicie a aplicação com:
```
npm start
```

### Back-end

Abrir o terminal dentro da pasta API e executar o comando:
```
npm install
```

Após a instalação das dependencias, é necessário validar os dados de acesso ao banco de dados na no arquivo databaseConfig em /api/config com as credenciais do banco de dados usado, neste caso usei **MySql**, tambem é necessário criar o banco **vehicle**

## Rotas Backend

`POST /veiculos/createDumyBase`
Cria uma lista de veículos automáticamente para testes

`POST /veiculos`
Cadastra um  novo veículo 
Payload:
```
{
    "veiculo": "Supra",
    "marca": "Toyota",
    "cod_fipe": "038003-2",
    "descricao": "",
    "ano" : "2018",
    "vendido": "false"
}
```

`PUT /veiculos/:id`
Atualiza um veiculo pelo id, deve usar o mesmo **payload de criação do vehiculo**

`GET /veiculos/find`
Retorna todos os veiculos cadastrados

`GET /veiculos`
Retorna todos os veículos

`GET /veiculos/find/find?vehicle=name`
Retorna os veículos de acordo com o termo passado parâmetro query.vehicle

### Libs Front-End
- Material UI - Para os icones
- TailwindCss - FrameWork para estilização dos componentes
- Class-names - Renderização condicional do css
- Axios - Framework para as chamadas à api

### Libs Beck-end
- Mysql2 - cliente pra uso do banco de dados mysql
- Sequelize - FrameWork ORM de banco de dados.
- Express - Framework para criar o servidor Rest
