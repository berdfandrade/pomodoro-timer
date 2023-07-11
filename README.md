# Pomodoro Timer

O componente `Pomodoro` é um timer baseado na técnica de gerenciamento de tempo conhecida como Pomodoro. Ele exibe um contador regressivo e fornece opções para iniciar, pausar e reiniciar o timer. O componente foi construído utilizando a biblioteca React e o framework de UI Chakra UI.

Para utilizar o componente `Pomodoro`, você precisará instalar as seguintes dependências:

- React: A biblioteca JavaScript para construir interfaces de usuário.
- Chakra UI: Um framework de componentes de interface de usuário para React.
- react-icons: Uma biblioteca de ícones para React.

Você pode instalar essas dependências executando o seguinte comando no seu terminal:

```shell
npm install react @chakra-ui/react @emotion/react @emotion/styled framer-motion react-icons
```

Certifique-se de que você esteja no diretório do seu projeto antes de executar o comando.

Após a instalação das dependências, você poderá importar e usar o componente `Pomodoro` no seu aplicativo.

O Relógio possui também um modo escuro!

## Props

O componente `Pomodoro` não aceita nenhuma prop.

## Uso

```jsx
import Pomodoro from './Pomodoro';

const App = () => {
  return (
    <div>
      <Pomodoro />
    </div>
  );
};

export default App;
```

## Comportamento

O componente `Pomodoro` inicia com um tempo padrão de 25 minutos (1500 segundos) e exibe esse tempo formatado em minutos e segundos. O timer pode ser iniciado, pausado ou reiniciado pelo usuário. O usuário também pode selecionar a duração do timer entre opções predefinidas (15, 20, 25, 30 minutos ou 1 hora). Quando o timer está em andamento, a barra de progresso é atualizada para mostrar o progresso do tempo restante.

O componente utiliza o ícone `GiTomato` do pacote `react-icons/gi` para exibir um ícone de tomate.

## Componentes

O componente `Pomodoro` utiliza os seguintes componentes do Chakra UI:

- `Box`: um componente de contêiner usado para envolver todo o conteúdo do timer.
- `Button`: um componente de botão usado para os botões "Iniciar", "Pausar" e "Reiniciar".
- `Text`: um componente de texto usado para exibir o tempo formatado.
- `Flex`: um componente de layout flexível usado para alinhar elementos horizontalmente.
- `Select`: um componente de seleção usado para escolher a duração do timer.
- `Progress`: um componente de barra de progresso usado para exibir o progresso do tempo restante.
- `Center`: um componente de layout usado para centralizar o conteúdo verticalmente.
- `Icon`: um componente usado para exibir o ícone de tomate.

## Hooks

O componente `Pomodoro` utiliza os seguintes hooks do React:

- `useState`: um hook para gerenciar o estado do timer ativo, duração selecionada e tempo restante.
- `useEffect`: um hook para lidar com efeitos colaterais, como atualizar o tempo restante a cada segundo e adicionar e remover um event listener para pausar o timer ao pressionar a tecla Espaço.

## Funções

O componente `Pomodoro` define as seguintes funções:

- `formatarTempo(segundos)`: uma função que recebe a quantidade de segundos e retorna uma string formatada no formato "mm:ss" representando minutos e segundos.
- `iniciar()`: uma função que inicia o timer, definindo o estado `ativo` como verdadeiro.
- `pausar()`: uma função que pausa o timer, definindo o estado `ativo` como falso.
- `reiniciar()`: uma função que reinicia o timer, definindo o estado `ativo` como falso e o tempo restante como a duração selecionada.
- `handleChangeDuracao(event)`: uma função que é chamada quando o usuário seleciona uma nova duração para o timer. Ela atualiza o estado `duracao` com o valor selecionado.
- `calcularProgresso()`: uma função que calcula e retorna a porcentagem de progresso do tempo restante em relação à duração selecionada.

## Exemplo

Aqui está um exemplo de código que utiliza o componente `Pomodoro`:

```jsx
import Pomodoro from './Pomodoro';

const App = () => {
  return (
    <div>
      <Pomodoro />
    </div>
  );
};

export default App;
```

Este exemplo renderiza o componente `Pomodoro` em um aplicativo React.

Isso conclui a documentação do componente `Pomodoro`. Certifique-se de importar corretamente os componentes e as dependências necessárias para garantir o funcionamento adequado do componente em seu projeto.


