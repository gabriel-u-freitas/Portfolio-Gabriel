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
        title: "Simulação de Monte Carlo com VaR e ES",
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
        title: "Gráfico Cohort: Taxa Cancelamento",
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

    // ---- Placeholders Power BI ----
    {
        title: "Análise de Vendas B2B",
        description: "Dashboard interativo para análise de KPIs comerciais, Churn e LTV.",
        category: "Power BI",
        tags: ["Power BI", "DAX", "ETL", "Figma"],
        link: "#"
    },
    {
        title: "Relatório de Mercado Financeiro",
        description: "Visualização de dados de mercado para suporte a decisões de investimento.",
        category: "Power BI",
        tags: ["Power BI", "Finance", "Data Viz"],
        link: "#"
    }
];
