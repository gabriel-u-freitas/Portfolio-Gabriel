export interface Project {
    title: string;
    description: string;
    category: "Power BI" | "SQL" | "Python";
    image?: string;
    link?: string;
    tags: string[];
}

export const projectsData: Project[] = [
    // ---- Projetos Reais do GitHub ----
    {
        title: "Simulação Monte Carlo com VaR e ES",
        description: "Simulação de Monte Carlo aplicada a séries financeiras em Python, com cálculo de Value at Risk (VaR) e Expected Shortfall (ES) para análise de risco de portfólios.",
        category: "Python",
        tags: ["Python", "Finance", "Monte Carlo", "Risk Analysis"],
        link: "https://github.com/gabriel-u-freitas/Simulacao_de_Monte_Carlo_com_VaR_e_ES"
    },
    {
        title: "Fronteira Eficiente de Markowitz",
        description: "Código em Python para simular 10.000 alocações de portfólio diferentes para uma carteira de ações e plot do gráfico de Fronteira Eficiente de Markowitz.",
        category: "Python",
        tags: ["Python", "Finance", "Markowitz", "Portfolio"],
        link: "https://github.com/gabriel-u-freitas/Fronteira_Eficiente_de_Markowitz"
    },
    {
        title: "Curva de Juros Brasileira e Evolução",
        description: "Código que plota a curva de juros com títulos públicos BR (ETTL) e suas evoluções de taxa ao longo do tempo (investpy).",
        category: "Python",
        tags: ["Python", "Finance", "investpy", "Data Viz"],
        link: "https://github.com/gabriel-u-freitas/Curva_de_Juros_Brasileira_e_Evolucao_Taxas_no_Tempo"
    },
    {
        title: "Gráfico Cohort Taxa Cancelamento",
        description: "Código que plota um gráfico de análise de cohort, ou de 'safra', para analisar a taxa de churn de planos de telefonia pós pago.",
        category: "SQL",
        tags: ["SQL", "Python", "Cohort Analysis", "Churn"],
        link: "https://github.com/gabriel-u-freitas/Grafico_Cohort_Taxa_Cancelamento"
    },
    {
        title: "Factors that Fuel Student Performance",
        description: "Análise de dados acadêmicos para identificar como certas variáveis influenciam o desempenho dos alunos.",
        category: "SQL",
        tags: ["SQL", "DataCamp", "Aggregations"],
        link: "https://github.com/gabriel-u-freitas/Projetos_DataCamp_SQL/tree/main/Project%20-%20Factors%20that%20Fuel%20Student%20Performance"
    },
    {
        title: "Uncovering the World's Oldest Businesses",
        description: "Exploração de dados históricos para identificação do negócio mais antigo por continente e setores que sobrevivem por séculos.",
        category: "SQL",
        tags: ["SQL", "DataCamp", "JOINs"],
        link: "https://github.com/gabriel-u-freitas/Projetos_DataCamp_SQL/tree/main/Project%20-%20Uncovering%20the%20World's%20Oldest%20Businesses"
    },
    {
        title: "Exploring Trends in American Baby Names",
        description: "Identificação de tendências de popularidade em nomes de bebês nos EUA ao longo do tempo.",
        category: "SQL",
        tags: ["SQL", "DataCamp", "Window Functions"],
        link: "https://github.com/gabriel-u-freitas/Projetos_DataCamp_SQL/tree/main/Project%20-%20Exploring%20Trends%20in%20American%20Baby%20Names"
    },

    // ---- Projetos Power BI ----
    {
        title: "Dashboard Overview Parrot Technology",
        description: "Dashboard executivo para monitorar performance comercial, incluindo vendas, rentabilidade, metas, market share, rankings (Pareto) e simulações de custos e margens.",
        category: "Power BI",
        tags: ["Power BI", "Power Query", "DAX", "Microsoft Access"],
        link: "https://github.com/gabriel-u-freitas/Projetos_Dash_PowerBI/tree/main/Projeto%20Parrot%20Technology"
    },
    {
        title: "Dashboard Sales Performance",
        description: "Dashboard de vendas focado na qualidade da receita, avaliando impactos de devoluções e descontos e oportunidades de melhoria de margem.",
        category: "Power BI",
        tags: ["Power BI", "Power Query", "DAX", "Excel"],
        link: "https://github.com/gabriel-u-freitas/Projetos_Dash_PowerBI/tree/main/Projeto%20Dashboard%20Comercial"
    }
];
