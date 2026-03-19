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
  // Category 1: Agricultural Development & Risk Analytics
  {
    title: "The Short-term Impact of Price Shocks on Food Security—Evidence from Ethiopia",
    description: "Advanced modeling of agricultural price volatility and climate-induced shocks to assess food security risks. This work provides critical data frameworks for risk mitigation in rural Ethiopia.",
    category: "Agricultural Development & Risk Analytics",
    tags: ["Price Analytics", "Food Security", "Inflation Shocks"],
    link: "https://link.springer.com/article/10.1007/s12571-015-0467-4",
    role: "Researcher"
  },
  {
    title: "Cereal Productivity in Ethiopia: An Analysis Based on ERHS Data",
    description: "Empirical analysis of agricultural productivity trends using long-term household survey data. Establishes data foundations for yield-based assessments and agricultural performance benchmarks.",
    category: "Agricultural Development & Risk Analytics",
    tags: ["Agricultural Productivity", "Yield Analysis", "Empirical Analysis", "Cereals"],
    link: "https://ethiopianjournalofeconomics.org/index.php/EJE/article/view/112",
    role: "Research Analyst"
  },
  {
    title: "Consumption of Animal Source Foods in Ethiopia: Patterns, Changes, and Determinants",
    description: "Detailed study of nutritional shifts and livestock-related consumption patterns, essential for understanding diversified agricultural economies.",
    category: "Agricultural Development & Risk Analytics",
    tags: ["Nutritional Economics", "Livestock Analysis", "Consumer Behavior", "Agriculture"],
    link: "https://essp.ifpri.info/2018/01/23/consumption-of-animal-source-foods-in-ethiopia-patterns-changes-and-determinants/",
    role: "Research Analyst"
  },

  // Category 2: Financial Inclusion & Access to Capital
  {
    title: "Poverty and Access to Credit in Rural Ethiopia: Empirical Evidence from Coffee-Growing Households",
    description: "Ground-level research on financial inclusion and credit market dynamics among coffee producers. Highlights the critical role of credit access in scaling agricultural output.",
    category: "Financial Inclusion & Access to Capital",
    tags: ["Financial Inclusion", "Agri-Finance", "Credit Markets", "Coffee Sector"],
    link: "https://eea-et.org/wp-content/uploads/2025/09/7TH_vol-II.pdf",
    role: "Lead Researcher"
  },
  {
    title: "International Migration, Remittances and Poverty Alleviation in Ethiopia",
    description: "Analytical study of financial flows and their impact on household resilience. Explores how non-traditional capital can be leveraged to de-risk rural livelihoods.",
    category: "Financial Inclusion & Access to Capital",
    tags: ["Migration", "Development Finance", "Remittances", "Resilience"],
    link: "https://ejol.aau.edu.et/index.php/EJDR/article/view/3577",
    role: "Analytical Lead"
  },
  {
    title: "Potential Market Size Estimation and Projection for the Developing Ethiopian Capital Market",
    description: "Strategic lead on market projection for the ECMA, utilizing advanced econometric modeling to forecast capital flows for institutional-grade investments.",
    category: "Financial Inclusion & Access to Capital",
    tags: ["Capital Market", "Market Size Estimation", "Forecasting", "Investment Strategy"],
    link: "https://ecma.gov.et/download/potential-market-size-estimation-and-projection-for-the-developing-ethiopian-capital-market/",
    role: "Researcher"
  },

  // Category 3: Economic Resilience & Safety Nets
  {
    title: "Economy-wide Impacts of the Productive Safety Net Program (PSNP)",
    description: "Comprehensive analysis of Ethiopia's social safety net programs. Demonstrates the impact of large-scale interventions on household-level risk management and long-term economic stability.",
    category: "Economic Resilience & Safety Nets",
    tags: ["Social Safety Nets", "Macro-Simulation", "Risk Management", "Poverty Alleviation"],
    link: "https://essp.ifpri.info/2016/07/14/synopsis-economy-wide-impacts-of-the-productive-safety-net-programme-psnp/",
    role: "Research Analyst"
  },
  {
    title: "Structural Transformation via Services or Manufacturing? Evidence from Ethiopia",
    description: "Analysis of sectoral shifts, emphasizing the role of agricultural transition in the broader economy. Positions agricultural modernization as a primary driver of structural growth.",
    category: "Economic Resilience & Safety Nets",
    tags: ["Agriculture", "Manufacturing", "Sectoral Strategy", "Economic Policy", "Structural Transformation"],
    link: "https://www.theigc.org/publications/structural-transformation-services-or-manufacturing-evidence-ethiopia",
    role: "Research Analyst"
  },

  // Category 4: Data Strategy & Tech-Enabled Growth
  {
    title: "Data Strategy for Institutional Growth",
    description: "Strategic analysis of data as a corporate asset. Focuses on how automated analytics and data governance improve operational efficiency and decision-making for tech-forward organizations like Pula.",
    category: "Data Strategy & Tech-Enabled Growth",
    tags: ["Data Strategy", "Operational Efficiency", "Strategic Assets", "Medium"],
    link: "https://medium.com/@gabegaz/why-data-strategy-1b71e3c80e52",
    role: "Writer"
  },
  {
    title: "Synthesis on the Impact of ICT Sector on Growth and Employment in Ethiopia",
    description: "Expert analysis on how technology impacts the Ethiopian economy, positioning digital infrastructure as a primary driver for scaling social impact and business reach.",
    category: "Data Strategy & Tech-Enabled Growth",
    tags: ["Digital Transformation", "Tech-Econometrics", "ICT Policy", "Employment"],
    link: "https://www.theigc.org/publications/synthesis-impact-ict-sector-growth-and-employment-ethiopia",
    role: "Lead Researcher"
  },
  {
    title: "Interactive Data Visualization (Racing & Sliding Bar Charts)",
    description: "Development of interactive visualization tools built using Python and Dash to animate complex data trends. Enables non-technical stakeholders to intuitively grasp data-driven insights.",
    category: "Data Strategy & Tech-Enabled Growth",
    tags: ["Python", "Dash", "Data Storytelling", "Stakeholder Engagement"],
    link: "https://medium.com/@gabegaz/racing-bar-charts-with-python-c4b0eb838291",
    role: "Writer"
  },
];

export default projects;
