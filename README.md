# Ficha de RPG

Este projeto é uma aplicação de ficha de RPG desenvolvida com [Create React App](https://github.com/facebook/create-react-app).

## Funcionalidades

- **Informações do Personagem**: Adicione e edite informações básicas do personagem, como nome, raça, elemento, nível e imagem de perfil.
- **Atributos**: Gerencie os atributos do personagem, incluindo agilidade, constituição, força, intelecto, sabedoria e presença.
- **Recursos**: Controle os recursos do personagem, como saúde, mana e stamina, com barras de progresso que mostram os valores atuais e máximos.
- **Perícias**: Adicione e edite as perícias do personagem, incluindo rolagens, atributos associados, treinamento e outros modificadores.
- **Armas**: Gerencie as armas do personagem, incluindo tipo de arma, ataque, tipo de ataque e imagem da arma.
- **Mochila**: Adicione e edite itens na mochila do personagem, incluindo nome, quantidade e descrição.
- **Informações Adicionais**: Controle informações adicionais do personagem, como CA, RD, movimento e taxa crítica.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-la no seu navegador.

A página será recarregada quando você fizer alterações.\
Você também verá quaisquer erros de lint no console.

### `npm test`

Inicia o executor de testes no modo interativo de observação.\
Veja a seção sobre [executando testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run build`

Compila a aplicação para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

A compilação é minificada e os nomes dos arquivos incluem os hashes.\
Sua aplicação está pronta para ser implantada!

Veja a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

### `npm run eject`

**Nota: esta é uma operação sem retorno. Uma vez que você `eject`, você não pode voltar!**

Se você não estiver satisfeito com a ferramenta de compilação e as escolhas de configuração, você pode `eject` a qualquer momento. Este comando removerá a dependência única de compilação do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc) diretamente para o seu projeto para que você tenha controle total sobre eles. Todos os comandos, exceto `eject`, ainda funcionarão, mas eles apontarão para os scripts copiados para que você possa ajustá-los. Neste ponto, você está por sua conta.

Você nunca precisa usar `eject`. O conjunto de recursos curado é adequado para pequenas e médias implantações, e você não deve se sentir obrigado a usar este recurso. No entanto, entendemos que esta ferramenta não seria útil se você não pudesse personalizá-la quando estivesse pronto para isso.

## Estrutura do Projeto

- **`src/components`**: Contém todos os componentes React utilizados na aplicação, como `Header`, `CharacterInfo`, `Stats`, `ResourceBars`, `SkillTable`, `AdditionalInfo`, `WeaponTable` e `Backpack`.
- **`src/App.js`**: Componente principal que organiza e renderiza todos os componentes da ficha de RPG.
- **`src/index.js`**: Ponto de entrada da aplicação React.
- **`src/reportWebVitals.js`**: Arquivo para medir e relatar métricas de desempenho.
- **`src/setupTests.js`**: Configuração para testes.

## Personalização

Você pode personalizar a ficha de RPG editando os componentes em `src/components`. Cada componente é responsável por uma parte específica da ficha, permitindo fácil manutenção e expansão.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Aprenda Mais

Você pode aprender mais na [documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, confira a [documentação do React](https://reactjs.org/).
