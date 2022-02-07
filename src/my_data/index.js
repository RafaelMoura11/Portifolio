import javascript from '../images/javascript.png'
import html from '../images/html.svg.png'
import css from '../images/css.png'
import react from '../images/react.png'
import redux from '../images/redux.png'
import linux from '../images/linux.png'
import jest from '../images/jest.png'
import rtl from '../images/rtl.png'
import github from '../images/github.svg'

const MY_DATA = {
  portuguese: {
    about: {
      intro: 'Olá! Eu sou o Rafael Moura, tenho 20 anos e sou de Recife-PE. Sou um desenvolvedor front end e futuramente fullstack',
      goals: 'Entrei no mundo da programação na metade de 2021 e foi paixão a primeira vista. Meu maior desejo atualmente é conseguir meu primeiro emprego na área e aprender o máximo que puder, seja em Hard Skill ou Soft Skill.',
      formation: 'Irei finalizar meus estudos na Trybe em agosto de 2022. A Trybe é uma escola de programação com mais de 1500 horas de aulas e aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.'
    },

    skills: [
      {
        tech: 'JavaScript',
        description: 'Linguagem de programação muito utilizada no desenvolvimento web',
        image: javascript,
      },
      {
        tech: 'HTML',
        description: 'Linguagem de marcação de texto',
        image: html,
      },
      {
        tech: 'CSS',
        description: 'Linguagem de estilização',
        image: css,
      },
      {
        tech: 'React',
        description: 'Biblioteca para criação de interface de usuário',
        image: react,
      },
      {
        tech: 'Redux',
        description: 'Ferramenta de controle de estado de aplicações',
        image: redux,
      },
      {
        tech: 'Linux',
        description: 'Sistema Operacional',
        image: linux,
      },
      {
        tech: 'Jest',
        description: 'Ferramenta de testes unitários',
        image: jest,
      },
      {
        tech: 'RTL',
        description: 'Ferramenta de testes unitários em aplicações feitas no React',
        image: rtl,
      },
      {
        tech: 'GitHub',
        description: 'GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão',
        image: github,
      }
    ]
  }
};

export default MY_DATA;