import { obtemNovoId } from '../services/geraId';

export const listaDeCartoes = [
  {
    titulo: 'JSX',
    descricao:
      'JavaScript and XML. Linguagem de marcação que pode ser utilizada para a criação de componentes React de forma mais declarativa. É bem semelhante ao HTML.',
  },
  {
    titulo: 'React',
    descricao:
      'Biblioteca criada pelo Facebook para renderização otimizada. Pode ser utilizada em diversas plataformas como web, mobile e Realidade Virtual.',
  },
  {
    titulo: 'Componente React',
    descricao:
      'Representa código reutilizável pelo React. Em regra, deve começar com letra maiúscula. Pode ser customizável através de props',
  },
  {
    titulo: 'Hooks',
    descricao:
      'Estruturas que são acopladas às funções para aumentar o poder de componentes React. Podem permitir a utilização de estado e gerenciamento de efeitos colaterais, por exemplo.',
  },
  {
    titulo: 'Function Components',
    descricao:
      'Componentes baseados em função. São amplamente utilizados atualmente em detrimento às Class Components, que aos poucos podem se tornar obsoletas.',
  },
  {
    titulo: 'useState',
    descricao:
      'Hook nativo do React que permite o gerenciamento de estado da aplicação e de componentes.',
  },
  {
    titulo: 'Estado',
    descricao:
      "Também conhecido como 'state'. Pode ser representando por 'dados que mudam com o tempo' e que também podem ser manipulados pelos usuários, geralmente através de formulários, e também por API's, outros componentes, etc.",
  },
  {
    titulo: 'Efeitos colaterais',
    descricao:
      "Também conhecido como 'side effects'. Representa tudo o que o React não controla diretamente. Bons exemplos são a manipulação manual do DOM e requisições HTTP.",
  },
  {
    titulo: 'useEffect',
    descricao: 'Hook nativo do React para lidar com efeitos colaterais.',
  },
  {
    titulo: 'Virtual DOM',
    description:
      'Estrutura utilizada pelo React para manipulação do DOM em memória. Permite a atualização do DOM real somente onde necessário, o que pode garantir uma melhor performance da aplicação.',
  },
]
  .map(item => {
    return { ...item, id: obtemNovoId() };
  })
  .sort((a, b) => a.titulo.localeCompare(b.titulo));
