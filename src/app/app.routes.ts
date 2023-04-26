import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Home Page - Zebek Tecnologia',
            description: 'Bem-vindo à página principal do nosso site, onde você pode acessar todo o conteúdo disponível. Explore nossos artigos e ferramentas úteis em diversas categorias, desde negócios e finanças pessoais até tecnologia e ciência. Encontre conteúdos relevantes para suas necessidades e interesses, com novos artigos adicionados regularmente. Navegue em nosso site com facilidade e encontre tudo o que precisa em um só lugar. Obrigado por visitar nosso site, esperamos que você encontre o que procura!',
        },
        loadChildren: () => import('./pages/home/home.routes').then((m) => m.routes),
    },
    {
        path: 'calculadora-porcentagem',
        data: {
            title: 'Calculadora de Porcentagem - Zebek Tecnologia',
            description: 'Calcule porcentagens com facilidade usando nossa calculadora online. Não importa se você precisa calcular a porcentagem de um valor ou a porcentagem entre dois valores, nossa ferramenta é simples de usar e eficiente. Além disso, você pode verificar o passo a passo de cálculo e obter a fórmula do Excel ou Google Sheets do cálculo para entender como chegamos ao resultado. Se você está acostumado a calcular porcentagens no Excel, vai adorar a nossa calculadora, que faz todo o trabalho por você. Descubra como calcular porcentagem de aumento e de lucro com rapidez e precisão. Faça cálculos de porcentagem com confiança usando a nossa calculadora de porcentagem online gratuita.',
            keywords: 'Zebek Tecnologia, Calculadora de Porcentagem, Calculo de porcentagem online, Luiz Maciel'
        },
        loadComponent: () => import('./pages/calculate-percentage/calculate-percentage.page').then( m => m.CalculatePercentagePage)
    },
    {
        path: 'sobre',
        data: {
            title: 'Sobre - Zebek Tecnologia',
            description: 'Descubra a história por trás do nosso blog. Saiba mais sobre os nossos valores, objetivos e paixões que nos impulsionam a criar conteúdo útil e relevante para nossos leitores. Conheça a equipe por trás do blog e o que nos inspira a compartilhar nossas experiências e conhecimentos com você. Junte-se a nós em nossa jornada de aprendizado e descoberta enquanto exploramos temas relevantes em nosso blog.',
        },
        loadComponent: () => import('./pages/about/about.page').then( m => m.AboutPage)
    },
    {
        path: 'ferramentas',
        data: {
            title: 'Ferramentas - Zebek Tecnologia',
            description: 'Encontre todas as ferramentas que precisa para tornar suas tarefas intelectuais mais eficientes em um só lugar. Nossa página de ferramentas oferece uma ampla variedade de opções para simplificar suas tarefas diárias, desde calculadoras e conversores de imagem até conversores de formato de texto. Economize tempo e esforço com nossas ferramentas intuitivas e precisas, projetadas para atender às suas necessidades específicas. Acesse agora e descubra como nossas ferramentas podem ajudar a melhorar sua produtividade.',
        },
        loadComponent: () => import('./pages/tools/tools.page').then( m => m.ToolsPage)
    },
    {
        path: 'calculadora-regra-tres',
        data: {
            title: 'Calculadora de Regra de Tres - Zebek Tecnologia',
            description: 'Calcule de forma fácil e rápida a regra de três com nossa calculadora online. Descubra como fazer regra de três simples ou composta e verifique a porcentagem em segundos. Além disso, você pode usar nossa calculadora para resolver problemas de regra de três inversamente proporcional e até mesmo descobrir como fazer a regra de três no Excel. Simplifique seus cálculos e economize tempo com nossa calculadora de regra de três. Experimente agora mesmo!',
            keywords: 'Zebek Tecnologia, Regra de três, Regra de três online, Calcular Regra de Três, Luiz Maciel'
        },
        loadComponent: () => import('./pages/calculate-rule-of-three/calculate-rule-of-three.page').then( m => m.CalculateRuleOfThreePage)
    },
    {
        path: 'calculadora-juros-compostos',
        data: {
            title: 'Calculadora de Juros Compostos - Zebek Tecnologia',
            description: 'Calcule seus juros compostos com facilidade e precisão usando nossa calculadora financeira online. Descubra seus rendimentos com aportes mensais e compare com os juros simples. Com nossa calculadora, você pode planejar seu futuro financeiro com mais segurança e tomar decisões informadas. Experimente agora e descubra como nossas ferramentas podem ajudá-lo a alcançar seus objetivos financeiros!',
            keywords: 'Zebek Tecnologia, Calculadora de Juros Compostos, Calculo de juros compostos online, Luiz Maciel'
        },
        loadComponent: () => import('./pages/calculate-compound-interest/calculate-compound-interest.page').then( m => m.CalculateCompoundInterestPage)
    },
    {
        path: 'calculadora-juros-compostos/resultado',
        data: {
            title: 'Calculadora de Juros Compostos - Resultado - Zebek Tecnologia',
            description: 'Resultado da calculadora de juros compostos',
        },
        loadComponent: () => import('./pages/result-compound-interest/result-compound-interest.page').then( m => m.ResultCompoundInterestPage)
    },
    {
        path: 'blog/post/:id',
        loadComponent: () => import('./pages/post/post.page').then( m => m.PostPage)
    },
    {
        path: 'blog',
        data: {
            title: 'Blog - Zebek Tecnologia',
            description: 'Bem-vindo ao nosso blog, onde compartilhamos histórias sobre como construímos o blog e o que aprendemos ao longo do caminho. Além disso, você encontrará conteúdos interessantes sobre tecnologia e séries sobre como os jogos mais populares foram construídos. Descubra quais tecnologias foram usadas, como foram criados e quais foram os desafios enfrentados pelos desenvolvedores. Aprenda com nossos artigos e fique por dentro das últimas tendências e inovações em tecnologia. Junte-se a nós em nossa jornada de aprendizado e descoberta enquanto exploramos temas relevantes em nosso blog.',
        },
        loadComponent: () => import('./pages/blog/blog.page').then( m => m.BlogPage)
    },
    {
        path: 'link-tree',
        data: {
            title: 'Link Tree - Zebek Tecnologia',
            description: 'Link tree construído do zero em Ionic Angular e hospedado no Firebase hosting.',
            keywords: 'Luiz Maciel, Link Tree, Luiz Maciel Segura dos Santos, Linkedin, Github'
        },
        loadComponent: () => import('./pages/link-tree/link-tree.page').then( m => m.LinkTreePage)
    },
];
