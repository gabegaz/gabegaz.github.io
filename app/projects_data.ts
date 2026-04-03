export interface Project {
  title: string;
  description: string;
  category: string;
  tags: string[];
  link: string;
  code?: string;
  role?: string;
}

const projects: Project[] = [
  // Category 1: Market Intelligence & Capital Strategy
  {
    title: "Potential Market Size Estimation and Projection for the Developing Ethiopian Capital Market",
    description: "Strategic lead on market projection for the ECMA, utilizing advanced econometric modeling to forecast capital flows and provide institutional-grade investment clarity.",
    category: "Market Intelligence & Capital Strategy",
    tags: ["Capital Market", "Market Size Estimation", "Forecasting", "Investment Strategy"],
    link: "https://ecma.gov.et/download/potential-market-size-estimation-and-projection-for-the-developing-ethiopian-capital-market/",
    role: "Researcher"
  },
  {
    title: "Poverty and Access to Credit in Rural Ethiopia: Empirical Evidence from Coffee-Growing Households",
    description: "Ground-level research on financial inclusion and credit market dynamics. Highlights the critical role of credit access in scaling agricultural output and de-risking rural investments.",
    category: "Market Intelligence & Capital Strategy",
    tags: ["Financial Inclusion", "Agri-Finance", "Credit Markets", "Coffee Sector"],
    link: "https://eea-et.org/wp-content/uploads/2025/09/7TH_vol-II.pdf",
    role: "Lead Researcher"
  },
 

  // Category 2: Macroeconomic Risk & Volatility Analysis
  {
    title: "The Short-term Impact of Price Shocks on Food Security—Evidence from Ethiopia",
    description: "Advanced modeling of price volatility and climate-induced shocks. Provides the analytical frameworks required to navigate market complexity and mitigate food security risks.",
    category: "Macroeconomic Risk & Volatility Analysis",
    tags: ["Price Analytics", "Food Security", "Inflation Shocks"],
    link: "https://link.springer.com/article/10.1007/s12571-015-0467-4",
    role: "Researcher"
  },
  
  // Category 3: Sectoral Strategy & Structural Transformation
  {
    title: "Structural Transformation via Services or Manufacturing? Evidence from Ethiopia",
    description: "Analysis of sectoral shifts and the role of agricultural transition in the broader economy. Positions modernization as a primary driver of structural growth.",
    category: "Sectoral Strategy & Structural Transformation",
    tags: ["Agriculture", "Manufacturing", "Sectoral Strategy", "Economic Policy", "Structural Transformation"],
    link: "https://www.theigc.org/publications/structural-transformation-services-or-manufacturing-evidence-ethiopia",
    role: "Research Analyst"
  },
  {
    title: "Cereal Productivity in Ethiopia: An Analysis Based on ERHS Data",
    description: "Empirical analysis of agricultural productivity trends. Establishes the data foundations needed for yield-based assessments and performance benchmarks.",
    category: "Sectoral Strategy & Structural Transformation",
    tags: ["Agricultural Productivity", "Yield Analysis", "Empirical Analysis", "Cereals"],
    link: "https://ethiopianjournalofeconomics.org/index.php/EJE/article/view/112",
    role: "Research Analyst"
  },
  {
    title: "Consumption of Animal Source Foods in Ethiopia: Patterns, Changes, and Determinants",
    description: "Detailed study of nutritional shifts and livestock-related consumption patterns, essential for understanding diversified agricultural economies.",
    category: "Sectoral Strategy & Structural Transformation",
    tags: ["Nutritional Economics", "Livestock Analysis", "Consumer Behavior", "Agriculture"],
    link: "https://essp.ifpri.info/2018/01/23/consumption-of-animal-source-foods-in-ethiopia-patterns-changes-and-determinants/",
    role: "Research Analyst"
  },

  // Category 4: Digital Infrastructure & Data Strategy
  {
    title: "Data Strategy for Institutional Growth",
    description: "Strategic analysis of data as a corporate asset. Focuses on how automated analytics and data governance remove guesswork and improve operational efficiency.",
    category: "Digital Infrastructure & Data Strategy",
    tags: ["Data Strategy", "Operational Efficiency", "Strategic Assets", "Medium"],
    link: "https://medium.com/@gabegaz/why-data-strategy-1b71e3c80e52",
    role: "Writer"
  },
  {
    title: "Synthesis on the Impact of ICT Sector on Growth and Employment in Ethiopia",
    description: "Expert analysis on how technology impacts growth, positioning digital infrastructure as a primary driver for scaling social impact and business reach.",
    category: "Digital Infrastructure & Data Strategy",
    tags: ["Digital Transformation", "Tech-Econometrics", "ICT Policy", "Employment"],
    link: "https://www.theigc.org/publications/synthesis-impact-ict-sector-growth-and-employment-ethiopia",
    role: "Lead Researcher"
  },
  {
    title: "Interactive Data Visualization (Racing & Sliding Bar Charts)",
    description: "Development of interactive tools to animate complex data trends, enabling stakeholders to intuitively grasp data-driven insights through custom digital infrastructure.",
    category: "Digital Infrastructure & Data Strategy",
    tags: ["Python", "Dash", "Data Storytelling", "Stakeholder Engagement"],
    link: "https://medium.com/@gabegaz/racing-bar-charts-with-python-c4b0eb838291",
    role: "Writer"
  },
];

export default projects;
