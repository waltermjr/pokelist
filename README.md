## Pokemon List First Generation
### Descrição do Projeto
Projeto de listagem dos pokemons da primeira geração
### Arquitetura
A arquitetura do projeto se define com a seguinte estrutura:

- assets (Arquivos onde se concentram imagens e afins)
- components (listagem dos componentes a serem utilizados por todos projeto)
- context (arquivos de contexto do projetos)
- pages (páginas dos projetos)
- services (serviços externos da aplicação)
- stylesheet (estilização comum e padrão do sistema)

Cada componente do sistema contém sua própria estilização e se necessário testes e também componentes especificos para esse componente, ambos ficam concentrados na mesma página por carater de organização e facilidade de manutenção.

As páginas seguem o mesmo modelo de organização dos componentes, contendo sua estilização e se necessário testes dentro da pasta.

Lembrando que a estilização, testes e componentes dentro das "pages" e "componenes" são exclusivos de cada aplicação, caso seja necessário utilizar um componente comum o mesmo deve ser externalizado para a pasta de componentes gerais, o mesmo serve para a estilização que for comum no projeto.

A mesma lógica se aplica pro contexto, caso seja necessário criação de demais contextos os mesmos devem ser organizados na devida hierarquia (levando em consideração que um contexto pode ser utilizado em várias telas ou componentes dependendo da sua aplicação), aconselha-se utilizar contexto apenas em aplicações macro.

O objetivo dessa arquitetura é deixar cada responsabilidade em seu devido lugar facilitando a manutenção, reaproveitamento e escalabilidade do projeto.