export interface Project {
    title: string;
    description: string;
    category: "Power BI" | "SQL" | "Python";
    image?: string;
    link?: string;
    tags: string[];
}

export const projectsData: Project[] = [
    {
        title: "Análise de Vendas B2B",
        description: "Dashboard interativo para análise de KPIs comerciais, Churn e LTV.",
        category: "Power BI",
        tags: ["Power BI", "DAX", "ETL", "Figma"],
        link: "#"
    },
    {
        title: "Modelagem de Risco de Crédito",
        description: "Pipeline de dados para cálculo de score de crédito utilizando dados históricos.",
        category: "Python",
        tags: ["Python", "Pandas", "Scikit-learn"],
        link: "#"
    },
    {
        title: "Otimização de Query para E-commerce",
        description: "Análise de performance de vendas e segmentação de clientes via SQL.",
        category: "SQL",
        tags: ["SQL", "PostgreSQL", "Data Warehousing"],
        link: "#"
    },
    {
        title: "Relatório de Mercado Financeiro",
        description: "Visualização de dados de mercado para suporte a decisões de investimento.",
        category: "Power BI",
        tags: ["Power BI", "Finance", "Data Viz"],
        link: "#"
    },
    {
        title: "Automação de Relatórios",
        description: "Script Python para geração automática de relatórios diários em PDF.",
        category: "Python",
        tags: ["Python", "Automation", "Matplotlib"],
        link: "#"
    },
    {
        title: "Análise de Cohort",
        description: "Query complexa para análise de retenção de usuários por safra.",
        category: "SQL",
        tags: ["SQL", "Analytics", "BigQuery"],
        link: "#"
    }
];
