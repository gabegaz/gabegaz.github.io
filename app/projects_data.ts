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
    description: "Strategic lead on market projection for the ECMA, utilizing advanced econometric modeling to forecast capital flows in the newly emerging market.",
    category: "Market Intelligence & Capital Strategy",
    tags: ["Capital Market", "Market Size Estimation", "Projection", "Market Analysis", "Forecasting", "Policy Design"],
    link: "https://ecma.gov.et/download/potential-market-size-estimation-and-projection-for-the-developing-ethiopian-capital-market/",
    role: "Researcher"
  },
  {
    title: "Structural Transformation via Services or Manufacturing? Evidence from Ethiopia",
    description: "Strategic lead on analyzing sectoral shifts in the Ethiopian economy, comparing manufacturing and services as drivers of growth. Demonstrates high-level strategic thinking for emerging markets.",
    category: "Market Intelligence & Capital Strategy",
    tags: ["Agriculture", "Manufacturing", "Services", "Employment", "Sectoral Strategy", "Economic Policy", "Structural Transformation"],
    link: "https://www.theigc.org/publications/structural-transformation-services-or-manufacturing-evidence-ethiopia",
    role: "Research Analyst"
  },

  // Category 2: Digital Economy & Technology
  {
    title: "Synthesis on the Impact of ICT Sector on Growth and Employment in Ethiopia",
    description: "Expert analysis on how technology impacts the Ethiopian economy, positioning ICT as a primary driver for growth and employment dynamics.",
    category: "Digital Economy & Technology",
    tags: ["Digital Transformation", "Tech-Econometrics", "ICT Policy", "Economic Growth", "Employment"],
    link: "https://www.theigc.org/publications/synthesis-impact-ict-sector-growth-and-employment-ethiopia",
    role: "Lead Researcher"
  },

  // Category 3: Macroeconomic Risk & Volatility Analysis
  {
    title: "The Short-term Impact of Price Shocks on Food Security—Evidence from Ethiopia",
    description: "Advanced modeling of price volatility and shocks to assess food security impacts across urban and rural Ethiopia, demonstrating risk mitigation frameworks.",
    category: "Macroeconomic Risk & Volatility Analysis",
    tags: ["Risk Modeling", "Price Analytics", "Food Security", "Shock Analysis"],
    link: "https://link.springer.com/article/10.1007/s12571-015-0467-4",
    role: "Researcher"
  },
  {
    title: "Fiscal Incentives for Youth Unemployment and Informal Business in Ethiopia",
    description: "Critical analysis of regulatory and fiscal hurdles affecting youth employment and informal businesses, highlighting systemic bottlenecks for growth.",
    category: "Macroeconomic Risk & Volatility Analysis",
    tags: ["Regulatory Analysis", "Fiscal Policy", "Youth Employment"],
    link: "https://www.theigc.org/publications/fiscal-incentives-youth-unemployment-and-informal-business-ethiopia",
    role: "Research Analyst"
  },
 
  {
    title: "Economy-wide Impacts of the Productive Safety Net Program (PSNP)",
    description: "Comprehensive analysis of the macroeconomic and household-level impacts of Ethiopia's social safety net programs.",
    category: "Macroeconomic Risk & Volatility Analysis",
    tags: ["Social Safety Nets", "Macro-Simulation", "Poverty Alleviation"],
    link: "https://essp.ifpri.info/2016/07/14/synopsis-economy-wide-impacts-of-the-productive-safety-net-programme-psnp/",
    role: "Research Analyst"
  },

  // Category 4: Specialized Sectoral Depth (Agriculture/Finance)
  {
    title: "The Impact of Remittances on the Ethiopian Economy: A CGE Analysis",
    description: "Technical lead on complex CGE simulations to model the multi-variable impact of remittances on the national economy using Computable General Equilibrium models.",
    category: "Specialized Sectoral Depth (Agriculture/Finance)",
    tags: ["Advanced Econometric Modeling", "CGE Analysis", "Macroeconomics"],
    link: "https://eea-et.org/",
    role: "Researcher"
  },
  {
    title: "Poverty and Access to Credit in Rural Ethiopia: Empirical Evidence from Coffee-Growing Households",
    description: "Ground-level research on financial inclusion and credit market dynamics among coffee producers, demonstrating depth in agri-finance.",
    category: "Specialized Sectoral Depth (Agriculture/Finance)",
    tags: ["Financial Inclusion", "Agri-Finance", "Credit Markets"],
    link: "https://eea-et.org/wp-content/uploads/2025/09/7TH_vol-II.pdf",
    role: "Lead Researcher"
  },
  {
    title: "International Migration, Remittances and Poverty Alleviation in Ethiopia",
    description: "Analytical study of the linkages between migration, financial flows, and development outcomes in Ethiopia.",
    category: "Specialized Sectoral Depth (Agriculture/Finance)",
    tags: ["Migration", "Development Finance", "Poverty Alleviation"],
    link: "https://ejol.aau.edu.et/index.php/EJDR/article/view/3577",
    role: "Analytical Lead"
  },
  {
    title: "Consumption of Animal Source Foods in Ethiopia: Patterns, Changes, and Determinants",
    description: "Detailed study of nutritional shifts and consumption patterns in Ethiopia, analyzing determinants of dietary change.",
    category: "Specialized Sectoral Depth (Agriculture/Finance)",
    tags: ["Nutritional Economics", "Consumer Behavior", "Agriculture"],
    link: "https://essp.ifpri.info/2018/01/23/consumption-of-animal-source-foods-in-ethiopia-patterns-changes-and-determinants/",
    role: "Research Analyst"
  },
  {
    title: "Cereal Productivity in Ethiopia: An Analysis Based on ERHS Data",
    description: "Empirical analysis of agricultural productivity trends using long-term household survey data to inform food policy.",
    category: "Specialized Sectoral Depth (Agriculture/Finance)",
    tags: ["Agricultural Productivity", "Empirical Analysis", "Cereals"],
    link: "https://ethiopianjournalofeconomics.org/index.php/EJE/article/view/112",
    role: "Research Analyst"
  },

  // Technical Tools (Medium Articles)
  {
    title: "Racing Barchart",
    description: "Interactive visualization tool built using Python, Dash, and Plotly to animate data changes over time. Explores the nuances of dynamic data storytelling.",
    category: "Technical Tools",
    tags: ["Python", "Dash", "Data Vis", "Medium"],
    link: "https://medium.com/@gabegaz/racing-bar-charts-with-python-c4b0eb838291",
    code: "https://github.com/gabegaz/racing_bar_charts",
    role: "Writer"
  },
  {
    title: "Sliding Bar Chart",
    description: "Platform-agnostic data visualization system allowing interactive exploration for non-technical decision makers via an intuitive slider interface.",
    category: "Technical Tools",
    tags: ["Python", "Dash", "Interactive", "Medium"],
    link: "https://medium.com/@gabegaz/charts-with-a-slider-using-dash-python-5fc848742b7e",
    code: "https://github.com/gabegaz/bar_charts_with_slider",
    role: "Writer"
  },
  {
    title: "PyStata Integration",
    description: "Technical guide on bridging Stata and Python to leverage the strengths of both ecosystems in a unified research environment.",
    category: "Technical Tools",
    tags: ["Python", "Stata", "Integration", "Medium"],
    link: "https://medium.com/@gabegaz/pystata-combining-stata-and-python-9149955e9615",
    role: "Writer"
  },
  {
    title: "Data Strategy",
    description: "Analysis of data as a key strategic corporate asset, focusing on how it improves decision-making and operational efficiency in institutional entities.",
    category: "Technical Tools",
    tags: ["Data Strategy", "Strategic Assets", "Medium"],
    link: "https://medium.com/@gabegaz/why-data-strategy-1b71e3c80e52",
    role: "Writer"
  },
 
];

export default projects;
