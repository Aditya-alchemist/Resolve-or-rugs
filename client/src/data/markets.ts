export interface Market {
  id: number;
  question: string;
  isResolve: boolean;
  explanation: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const markets: Market[] = [
  {
    id: 1,
    question: "Will Dogecoin reach $1 by end of 2025?",
    isResolve: true,
    explanation: "Specific price target with clear deadline. Cryptocurrency prices are publicly verifiable.",
    category: "Crypto",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "Will streaming kill traditional TV completely?",
    isResolve: false,
    explanation: "\"Kill completely\" lacks specific metrics for viewership or market share decline.",
    category: "Entertainment",
    difficulty: "easy"
  },
  {
    id: 3,
    question: "Will Tesla stock close above $300 by Q4 2025?",
    isResolve: true,
    explanation: "Specific price point with clear timeline. Stock prices are publicly available.",
    category: "Finance",
    difficulty: "easy"
  },
  {
    id: 4,
    question: "Will AI become smarter than humans?",
    isResolve: false,
    explanation: "No measurable criteria for \"smarter\" or specific timeline defined.",
    category: "Technology",
    difficulty: "easy"
  },
  {
    id: 5,
    question: "Will Bitcoin reach $100k by December 31, 2025?",
    isResolve: true,
    explanation: "Clear price target and specific date. Crypto prices are verifiable on exchanges.",
    category: "Crypto",
    difficulty: "easy"
  },
  {
    id: 6,
    question: "Will the next iPhone be amazing?",
    isResolve: false,
    explanation: "Subjective term \"amazing\" cannot be objectively measured or verified.",
    category: "Technology",
    difficulty: "easy"
  },
  {
    id: 7,
    question: "Will unemployment rate fall below 3% by June 2026?",
    isResolve: true,
    explanation: "Specific metric with clear deadline. Government publishes official unemployment data.",
    category: "Economics",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "Will electric cars take over the market?",
    isResolve: false,
    explanation: "\"Take over\" is vague - no specific market share percentage or timeline.",
    category: "Automotive",
    difficulty: "easy"
  },
  {
    id: 9,
    question: "Will SpaceX successfully land humans on Mars by 2030?",
    isResolve: true,
    explanation: "Clear objective event with specific timeline. Verifiable through official announcements.",
    category: "Space",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "Will the metaverse become popular?",
    isResolve: false,
    explanation: "\"Popular\" is subjective without metrics like user counts or adoption rates.",
    category: "Technology",
    difficulty: "easy"
  },
  {
    id: 11,
    question: "Will S&P 500 close above 6000 on December 31, 2025?",
    isResolve: true,
    explanation: "Specific index level with exact date. Financial data is publicly available.",
    category: "Finance",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "Will social media platforms decline?",
    isResolve: false,
    explanation: "No specific platforms, metrics, or timeline for measuring decline.",
    category: "Social Media",
    difficulty: "easy"
  },
  {
    id: 13,
    question: "Will Apple release AR glasses by end of 2025?",
    isResolve: true,
    explanation: "Specific product with clear deadline. Product launches are publicly verifiable.",
    category: "Technology",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "Will climate change get worse?",
    isResolve: false,
    explanation: "\"Worse\" needs specific metrics like temperature increase or CO2 levels.",
    category: "Environment",
    difficulty: "easy"
  },
  {
    id: 15,
    question: "Will Ethereum price exceed $5000 by March 2026?",
    isResolve: true,
    explanation: "Clear price threshold with specific date. Cryptocurrency prices are verifiable.",
    category: "Crypto",
    difficulty: "medium"
  },
  {
    id: 16,
    question: "Will remote work become the norm?",
    isResolve: false,
    explanation: "\"The norm\" needs definition - percentage of workers or companies required.",
    category: "Work",
    difficulty: "easy"
  },
  {
    id: 17,
    question: "Will US inflation rate drop below 2% by December 2025?",
    isResolve: true,
    explanation: "Specific economic metric with deadline. Government releases official CPI data.",
    category: "Economics",
    difficulty: "medium"
  },
  {
    id: 18,
    question: "Will quantum computers revolutionize computing?",
    isResolve: false,
    explanation: "\"Revolutionize\" lacks measurable criteria or timeline for assessment.",
    category: "Technology",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "Will Netflix subscriber count exceed 300M by Q2 2026?",
    isResolve: true,
    explanation: "Specific subscriber threshold with timeline. Companies report quarterly earnings.",
    category: "Entertainment",
    difficulty: "medium"
  },
  {
    id: 20,
    question: "Will mobile gaming grow?",
    isResolve: false,
    explanation: "\"Grow\" needs specification - revenue increase percentage or user growth rate.",
    category: "Gaming",
    difficulty: "easy"
  },
  {
    id: 21,
    question: "Will gold price close above $2500/oz on June 30, 2026?",
    isResolve: true,
    explanation: "Specific commodity price with exact date. Precious metal prices are publicly traded.",
    category: "Commodities",
    difficulty: "medium"
  },
  {
    id: 22,
    question: "Will 5G networks improve?",
    isResolve: false,
    explanation: "\"Improve\" is vague without metrics for speed, coverage, or reliability.",
    category: "Technology",
    difficulty: "easy"
  },
  {
    id: 23,
    question: "Will US GDP growth exceed 3% in 2025?",
    isResolve: true,
    explanation: "Specific economic metric with timeline. Bureau of Economic Analysis publishes GDP.",
    category: "Economics",
    difficulty: "medium"
  },
  {
    id: 24,
    question: "Will autonomous vehicles become mainstream?",
    isResolve: false,
    explanation: "\"Mainstream\" needs definition - market penetration percentage required.",
    category: "Automotive",
    difficulty: "easy"
  },
  {
    id: 25,
    question: "Will Microsoft stock hit $500 by end of 2025?",
    isResolve: true,
    explanation: "Clear stock price target with specific date. Publicly traded prices are verifiable.",
    category: "Finance",
    difficulty: "medium"
  },
  {
    id: 26,
    question: "Will cybersecurity threats increase?",
    isResolve: false,
    explanation: "Needs specific metrics like number of attacks or affected systems.",
    category: "Security",
    difficulty: "easy"
  },
  {
    id: 27,
    question: "Will Solana reach $500 by September 2025?",
    isResolve: true,
    explanation: "Specific cryptocurrency price with clear deadline. Exchange prices are public.",
    category: "Crypto",
    difficulty: "medium"
  },
  {
    id: 28,
    question: "Will renewable energy dominate?",
    isResolve: false,
    explanation: "\"Dominate\" lacks specifics - needs percentage of energy production.",
    category: "Energy",
    difficulty: "easy"
  },
  {
    id: 29,
    question: "Will US new home sales exceed 800K units in 2025?",
    isResolve: true,
    explanation: "Specific sales volume with timeline. Census Bureau reports housing data.",
    category: "Real Estate",
    difficulty: "medium"
  },
  {
    id: 30,
    question: "Will blockchain technology change everything?",
    isResolve: false,
    explanation: "\"Change everything\" is too vague without specific sectors or metrics.",
    category: "Technology",
    difficulty: "easy"
  },
  {
    id: 31,
    question: "Will NVIDIA stock close above $1000 on Dec 31, 2025?",
    isResolve: true,
    explanation: "Specific price point with exact date. Stock market data is publicly available.",
    category: "Finance",
    difficulty: "medium"
  },
  {
    id: 32,
    question: "Will NFTs make a comeback?",
    isResolve: false,
    explanation: "\"Comeback\" needs metrics - trading volume or active wallets required.",
    category: "Crypto",
    difficulty: "easy"
  },
  {
    id: 33,
    question: "Will US consumer confidence index exceed 110 by July 2025?",
    isResolve: true,
    explanation: "Specific economic indicator with deadline. Conference Board publishes monthly data.",
    category: "Economics",
    difficulty: "hard"
  },
  {
    id: 34,
    question: "Will AI art become accepted?",
    isResolve: false,
    explanation: "\"Accepted\" is subjective - needs specific adoption metrics or legal status.",
    category: "Art",
    difficulty: "easy"
  },
  {
    id: 35,
    question: "Will crude oil price exceed $100/barrel by August 2025?",
    isResolve: true,
    explanation: "Clear commodity price with specific date. Oil prices are publicly traded.",
    category: "Commodities",
    difficulty: "medium"
  },
  {
    id: 36,
    question: "Will gaming consoles become obsolete?",
    isResolve: false,
    explanation: "\"Obsolete\" needs definition - market share decline or production cessation.",
    category: "Gaming",
    difficulty: "easy"
  },
  {
    id: 37,
    question: "Will Amazon stock reach $250 by Q3 2026?",
    isResolve: true,
    explanation: "Specific stock price with clear timeline. Market data is publicly accessible.",
    category: "Finance",
    difficulty: "medium"
  },
  {
    id: 38,
    question: "Will voice assistants get better?",
    isResolve: false,
    explanation: "\"Better\" is subjective without accuracy metrics or specific capabilities.",
    category: "Technology",
    difficulty: "easy"
  },
  {
    id: 39,
    question: "Will Cardano (ADA) hit $5 by December 2025?",
    isResolve: true,
    explanation: "Specific cryptocurrency price target with deadline. Exchange prices are verifiable.",
    category: "Crypto",
    difficulty: "medium"
  },
  {
    id: 40,
    question: "Will online shopping continue to grow?",
    isResolve: false,
    explanation: "\"Continue to grow\" needs baseline and target growth percentage.",
    category: "E-commerce",
    difficulty: "easy"
  },
  {
    id: 41,
    question: "Will US retail sales growth exceed 5% in 2025?",
    isResolve: true,
    explanation: "Specific economic metric with timeline. Census Bureau reports retail sales.",
    category: "Economics",
    difficulty: "medium"
  },
  {
    id: 42,
    question: "Will VR headsets become popular?",
    isResolve: false,
    explanation: "\"Popular\" needs metrics - unit sales or active user counts.",
    category: "Technology",
    difficulty: "easy"
  },
  {
    id: 43,
    question: "Will Google stock close above $200 on June 30, 2026?",
    isResolve: true,
    explanation: "Clear price point with specific date. Stock prices are publicly verifiable.",
    category: "Finance",
    difficulty: "medium"
  },
  {
    id: 44,
    question: "Will subscription services take over?",
    isResolve: false,
    explanation: "\"Take over\" lacks specifics - which industries and what market share?",
    category: "Business",
    difficulty: "easy"
  },
  {
    id: 45,
    question: "Will Polygon (MATIC) reach $10 by end of 2025?",
    isResolve: true,
    explanation: "Specific crypto price with clear deadline. Exchange prices are publicly available.",
    category: "Crypto",
    difficulty: "medium"
  },
  {
    id: 46,
    question: "Will social commerce grow rapidly?",
    isResolve: false,
    explanation: "\"Rapidly\" needs quantification - specific growth rate percentage required.",
    category: "E-commerce",
    difficulty: "easy"
  },
  {
    id: 47,
    question: "Will US housing starts exceed 1.5M units in 2025?",
    isResolve: true,
    explanation: "Specific construction metric with timeline. Census Bureau publishes housing data.",
    category: "Real Estate",
    difficulty: "medium"
  },
  {
    id: 48,
    question: "Will cloud gaming replace consoles?",
    isResolve: false,
    explanation: "\"Replace\" needs definition - market share percentage or time frame.",
    category: "Gaming",
    difficulty: "easy"
  },
  {
    id: 49,
    question: "Will silver price exceed $40/oz by October 2025?",
    isResolve: true,
    explanation: "Specific precious metal price with deadline. Commodity prices are publicly traded.",
    category: "Commodities",
    difficulty: "medium"
  },
  {
    id: 50,
    question: "Will passwords become obsolete?",
    isResolve: false,
    explanation: "\"Obsolete\" needs metrics - adoption rate of alternatives required.",
    category: "Security",
    difficulty: "easy"
  },
  {
    id: 51,
    question: "Will Meta stock reach $700 by Q2 2026?",
    isResolve: true,
    explanation: "Clear stock price target with timeline. Publicly traded prices are verifiable.",
    category: "Finance",
    difficulty: "medium"
  },
  {
    id: 52,
    question: "Will digital currencies replace cash?",
    isResolve: false,
    explanation: "\"Replace\" lacks specifics - percentage of transactions or timeline needed.",
    category: "Finance",
    difficulty: "easy"
  },
  {
    id: 53,
    question: "Will Polkadot (DOT) hit $50 by September 2025?",
    isResolve: true,
    explanation: "Specific crypto price with clear deadline. Exchange prices are publicly available.",
    category: "Crypto",
    difficulty: "medium"
  },
  {
    id: 54,
    question: "Will e-sports viewership increase?",
    isResolve: false,
    explanation: "\"Increase\" needs baseline and target - specific viewer count or percentage.",
    category: "Gaming",
    difficulty: "easy"
  },
  {
    id: 55,
    question: "Will US personal savings rate exceed 10% by end of 2025?",
    isResolve: true,
    explanation: "Specific economic metric with deadline. BEA publishes savings rate data monthly.",
    category: "Economics",
    difficulty: "hard"
  },
  {
    id: 56,
    question: "Will wearable tech become ubiquitous?",
    isResolve: false,
    explanation: "\"Ubiquitous\" needs definition - adoption rate percentage required.",
    category: "Technology",
    difficulty: "easy"
  },
  {
    id: 57,
    question: "Will Coinbase stock close above $300 by December 2025?",
    isResolve: true,
    explanation: "Specific stock price with exact date. Market data is publicly accessible.",
    category: "Finance",
    difficulty: "medium"
  },
  {
    id: 58,
    question: "Will smart home adoption grow?",
    isResolve: false,
    explanation: "\"Grow\" needs specifics - baseline and target penetration rate.",
    category: "Technology",
    difficulty: "easy"
  },
  {
    id: 59,
    question: "Will Avalanche (AVAX) reach $200 by Q4 2025?",
    isResolve: true,
    explanation: "Clear cryptocurrency price with timeline. Exchange prices are verifiable.",
    category: "Crypto",
    difficulty: "medium"
  },
  {
    id: 60,
    question: "Will content creation tools improve?",
    isResolve: false,
    explanation: "\"Improve\" is subjective without specific capability or performance metrics.",
    category: "Technology",
    difficulty: "easy"
  },
  {
    id: 61,
    question: "Will US industrial production grow by 4% in 2025?",
    isResolve: true,
    explanation: "Specific economic metric with timeline. Federal Reserve publishes IP data.",
    category: "Economics",
    difficulty: "hard"
  },
  {
    id: 62,
    question: "Will online education dominate?",
    isResolve: false,
    explanation: "\"Dominate\" needs metrics - enrollment percentage or market share.",
    category: "Education",
    difficulty: "easy"
  },
  {
    id: 63,
    question: "Will AMD stock hit $250 by June 2026?",
    isResolve: true,
    explanation: "Specific stock price with clear deadline. Publicly traded prices are verifiable.",
    category: "Finance",
    difficulty: "medium"
  },
  {
    id: 64,
    question: "Will biometric authentication become standard?",
    isResolve: false,
    explanation: "\"Standard\" needs definition - adoption rate across devices or services.",
    category: "Security",
    difficulty: "easy"
  },
  {
    id: 65,
    question: "Will Chainlink (LINK) exceed $100 by end of 2025?",
    isResolve: true,
    explanation: "Specific crypto price target with deadline. Exchange prices are publicly available.",
    category: "Crypto",
    difficulty: "medium"
  },
  {
    id: 66,
    question: "Will subscription fatigue set in?",
    isResolve: false,
    explanation: "\"Fatigue\" is qualitative without cancellation rates or survey metrics.",
    category: "Business",
    difficulty: "easy"
  },
  {
    id: 67,
    question: "Will US corporate profits grow by 8% in 2025?",
    isResolve: true,
    explanation: "Specific economic metric with timeline. BEA reports corporate profit data.",
    category: "Economics",
    difficulty: "hard"
  },
  {
    id: 68,
    question: "Will foldable phones become mainstream?",
    isResolve: false,
    explanation: "\"Mainstream\" needs definition - market share percentage required.",
    category: "Technology",
    difficulty: "easy"
  },
  {
    id: 69,
    question: "Will PayPal stock reach $150 by Q3 2025?",
    isResolve: true,
    explanation: "Clear stock price with specific timeline. Market data is publicly accessible.",
    category: "Finance",
    difficulty: "medium"
  },
  {
    id: 70,
    question: "Will privacy concerns increase?",
    isResolve: false,
    explanation: "\"Increase\" needs metrics - survey results or reported incidents.",
    category: "Privacy",
    difficulty: "easy"
  },
  {
    id: 71,
    question: "Will Litecoin (LTC) hit $300 by August 2025?",
    isResolve: true,
    explanation: "Specific cryptocurrency price with deadline. Exchange prices are verifiable.",
    category: "Crypto",
    difficulty: "medium"
  },
  {
    id: 72,
    question: "Will mobile payments take over cash?",
    isResolve: false,
    explanation: "\"Take over\" lacks specifics - transaction percentage threshold needed.",
    category: "Fintech",
    difficulty: "easy"
  },
  {
    id: 73,
    question: "Will US business investment grow by 6% in 2025?",
    isResolve: true,
    explanation: "Specific economic metric with timeline. BEA publishes investment data.",
    category: "Economics",
    difficulty: "hard"
  },
  {
    id: 74,
    question: "Will holographic displays become common?",
    isResolve: false,
    explanation: "\"Common\" needs definition - market penetration or availability metrics.",
    category: "Technology",
    difficulty: "medium"
  },
  {
    id: 75,
    question: "Will Shopify stock close above $100 by December 2025?",
    isResolve: true,
    explanation: "Specific stock price with exact date. Publicly traded prices are verifiable.",
    category: "Finance",
    difficulty: "medium"
  },
  {
    id: 76,
    question: "Will data breaches become more frequent?",
    isResolve: false,
    explanation: "\"More frequent\" needs baseline comparison and specific count.",
    category: "Security",
    difficulty: "easy"
  },
  {
    id: 77,
    question: "Will Cosmos (ATOM) reach $75 by Q2 2026?",
    isResolve: true,
    explanation: "Clear crypto price with timeline. Exchange prices are publicly available.",
    category: "Crypto",
    difficulty: "medium"
  },
  {
    id: 78,
    question: "Will video content dominate marketing?",
    isResolve: false,
    explanation: "\"Dominate\" lacks specifics - budget allocation percentage needed.",
    category: "Marketing",
    difficulty: "easy"
  },
  {
    id: 79,
    question: "Will platinum price exceed $1200/oz by September 2025?",
    isResolve: true,
    explanation: "Specific precious metal price with deadline. Commodity prices are publicly traded.",
    category: "Commodities",
    difficulty: "medium"
  },
  {
    id: 80,
    question: "Will decentralized finance grow?",
    isResolve: false,
    explanation: "\"Grow\" needs metrics - TVL increase percentage or user growth rate.",
    category: "Crypto",
    difficulty: "easy"
  },
  {
    id: 81,
    question: "Will US durable goods orders exceed $280B by end of 2025?",
    isResolve: true,
    explanation: "Specific economic metric with timeline. Census Bureau reports monthly data.",
    category: "Economics",
    difficulty: "hard"
  },
  {
    id: 82,
    question: "Will personalized medicine become accessible?",
    isResolve: false,
    explanation: "\"Accessible\" needs definition - cost threshold or availability metrics.",
    category: "Healthcare",
    difficulty: "medium"
  },
  {
    id: 83,
    question: "Will Square stock hit $200 by Q4 2025?",
    isResolve: true,
    explanation: "Specific stock price with clear timeline. Market data is publicly accessible.",
    category: "Finance",
    difficulty: "medium"
  },
  {
    id: 84,
    question: "Will influencer marketing expand?",
    isResolve: false,
    explanation: "\"Expand\" needs quantification - spending increase percentage required.",
    category: "Marketing",
    difficulty: "easy"
  },
  {
    id: 85,
    question: "Will Algorand (ALGO) reach $15 by July 2025?",
    isResolve: true,
    explanation: "Specific cryptocurrency price with deadline. Exchange prices are verifiable.",
    category: "Crypto",
    difficulty: "medium"
  },
  {
    id: 86,
    question: "Will AI regulation tighten?",
    isResolve: false,
    explanation: "\"Tighten\" is vague - needs specific legislation or policy measures.",
    category: "Policy",
    difficulty: "medium"
  },
  {
    id: 87,
    question: "Will US manufacturing PMI exceed 55 by December 2025?",
    isResolve: true,
    explanation: "Specific economic indicator with deadline. ISM publishes PMI monthly.",
    category: "Economics",
    difficulty: "hard"
  },
  {
    id: 88,
    question: "Will edge computing become prevalent?",
    isResolve: false,
    explanation: "\"Prevalent\" needs definition - deployment percentage or adoption rate.",
    category: "Technology",
    difficulty: "medium"
  },
  {
    id: 89,
    question: "Will Palantir stock close above $50 by June 2026?",
    isResolve: true,
    explanation: "Clear stock price with specific date. Publicly traded prices are verifiable.",
    category: "Finance",
    difficulty: "medium"
  },
  {
    id: 90,
    question: "Will satellite internet expand globally?",
    isResolve: false,
    explanation: "\"Expand globally\" lacks metrics - coverage area or subscriber count needed.",
    category: "Technology",
    difficulty: "easy"
  },
  {
    id: 91,
    question: "Will Tezos (XTZ) hit $20 by October 2025?",
    isResolve: true,
    explanation: "Specific crypto price with clear deadline. Exchange prices are publicly available.",
    category: "Crypto",
    difficulty: "medium"
  },
  {
    id: 92,
    question: "Will carbon capture scale up?",
    isResolve: false,
    explanation: "\"Scale up\" needs metrics - capacity increase or deployment count.",
    category: "Environment",
    difficulty: "medium"
  },
  {
    id: 93,
    question: "Will copper price exceed $5/lb by end of 2025?",
    isResolve: true,
    explanation: "Specific commodity price with deadline. Metal prices are publicly traded.",
    category: "Commodities",
    difficulty: "medium"
  },
  {
    id: 94,
    question: "Will brain-computer interfaces advance?",
    isResolve: false,
    explanation: "\"Advance\" is vague without specific capability milestones or metrics.",
    category: "Technology",
    difficulty: "medium"
  },
  {
    id: 95,
    question: "Will Robinhood stock reach $75 by Q2 2026?",
    isResolve: true,
    explanation: "Specific stock price with timeline. Market data is publicly accessible.",
    category: "Finance",
    difficulty: "medium"
  },
  {
    id: 96,
    question: "Will green technology investment surge?",
    isResolve: false,
    explanation: "\"Surge\" needs quantification - percentage increase or dollar amount.",
    category: "Environment",
    difficulty: "easy"
  },
  {
    id: 97,
    question: "Will Filecoin (FIL) exceed $50 by September 2025?",
    isResolve: true,
    explanation: "Clear cryptocurrency price with deadline. Exchange prices are verifiable.",
    category: "Crypto",
    difficulty: "medium"
  },
  {
    id: 98,
    question: "Will work-from-home policies become permanent?",
    isResolve: false,
    explanation: "\"Permanent\" needs definition - percentage of companies or workers.",
    category: "Work",
    difficulty: "easy"
  },
  {
    id: 99,
    question: "Will US vehicle sales exceed 17M units in 2025?",
    isResolve: true,
    explanation: "Specific sales volume with timeline. Auto industry reports monthly sales.",
    category: "Automotive",
    difficulty: "medium"
  },
  {
    id: 100,
    question: "Will smart cities become reality?",
    isResolve: false,
    explanation: "\"Become reality\" is vague - needs specific city count or technology adoption.",
    category: "Urban",
    difficulty: "easy"
  },
  {
    id: 101,
    question: "Will VeChain (VET) reach $1 by end of 2025?",
    isResolve: true,
    explanation: "Specific crypto price with clear deadline. Exchange prices are publicly available.",
    category: "Crypto",
    difficulty: "medium"
  },
  {
    id: 102,
    question: "Will quantum supremacy be achieved?",
    isResolve: false,
    explanation: "\"Achieved\" needs specific benchmark or problem-solving criteria.",
    category: "Technology",
    difficulty: "hard"
  },
  {
    id: 103,
    question: "Will Zoom stock close above $150 by Q4 2025?",
    isResolve: true,
    explanation: "Clear stock price with timeline. Publicly traded prices are verifiable.",
    category: "Finance",
    difficulty: "medium"
  },
  {
    id: 104,
    question: "Will synthetic biology transform manufacturing?",
    isResolve: false,
    explanation: "\"Transform\" lacks metrics - market share or production volume needed.",
    category: "Biotech",
    difficulty: "hard"
  },
  {
    id: 105,
    question: "Will The Graph (GRT) hit $10 by August 2025?",
    isResolve: true,
    explanation: "Specific cryptocurrency price with deadline. Exchange prices are verifiable.",
    category: "Crypto",
    difficulty: "medium"
  }
];

export function getRandomMarkets(count: number): Market[] {
  const shuffled = [...markets].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
