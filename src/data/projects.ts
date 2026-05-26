export interface Metric {
  label: string
  value: string
}

export interface Project {
  id: string
  title: string
  subtitle: string
  domain: string
  domainColor: string
  description: string
  longDescription?: string
  metrics: Metric[]
  tech: string[]
  github?: string
  featured?: boolean
  isCapsone?: boolean
}

export const projects: Project[] = [
  {
    id: 'access-management',
    title: 'Access Management Platform',
    subtitle: 'IAM Anomaly Detection',
    domain: 'Cybersecurity / IAM',
    domainColor: 'emerald',
    isCapsone: true,
    description:
      'Mines implicit RBAC roles from 32,769 access events using Non-negative Matrix Factorization (k=15, BIC-optimised), then detects permission drift via a hybrid rule + XGBoost scorer with plain-language SHAP explanations. Full 6-service containerised deployment: Nginx + FastAPI/gunicorn + Streamlit + PostgreSQL + Redis + Alembic migrations.',
    longDescription: `Built as an open-source alternative to SailPoint / Saviynt for organisations that need
auditable, explainable access risk scoring without €50–200k/yr commercial licensing.

The system ingests Amazon's anonymised IAM dataset (343 employees × 7,518 systems), mines 15
implicit organisational roles via NMF, and scores every (employee, system) pair with a balanced
risk score derived from overlap with that employee's role cluster.

A FastAPI backend (gunicorn + 2 uvicorn workers) exposes drift scoring, fleet analytics, and role
detail endpoints. A three-page Streamlit dashboard — Access Intelligence, User Access Review, User
Access Simulation — makes results actionable for non-technical security reviewers. PostgreSQL stores
simulation history and audit trail. Redis caches fleet analytics with 24h TTL.

Unsupervised evaluation: NMF reconstruction MSE, role coverage (strong/partial/weak membership),
self-consistency gap (own vs non-access drift scores), and intra vs inter-cluster separation.`,
    metrics: [
      { label: 'XGBoost AUC', value: '0.694' },
      { label: 'Roles Mined', value: '15' },
      { label: 'Systems', value: '7,518' },
    ],
    tech: ['NMF', 'XGBoost', 'SHAP', 'FastAPI', 'Streamlit', 'PostgreSQL', 'Redis', 'Docker', 'Nginx', 'scikit-learn'],
    github: 'https://github.com/shah-data-scientist',
    featured: true,
  },
  {
    id: 'sportsee-nba',
    title: 'SportsSee NBA Analyst AI',
    subtitle: 'Agentic AI System · LangGraph · LangSmith Observability',
    domain: 'Sports Analytics / Agentic AI',
    domainColor: 'blue',
    description:
      'Full agentic AI system built on LangGraph: 4 specialised agents (Orchestrator, DataRetrieval, Analysis, Report) with tool use, typed StateGraph, and LangSmith end-to-end observability (@traceable spans on every LLM call, separate projects per agent). Hybrid RAG backend combining SQL generation and FAISS vector search. LangSmith 4-metric evaluation (routing, sql_accuracy, correctness, is_error): 91.7% LangGraph routing, correctness 0.875 (Claude Haiku 4.5 judge). 688 automated tests.',
    metrics: [
      { label: 'LG Routing', value: '91.7%' },
      { label: 'LG Correctness', value: '0.875' },
      { label: 'Tests', value: '688' },
    ],
    tech: ['LangGraph', 'LangSmith', 'LangChain', 'RAGAS', 'Gemini 2.0 Flash', 'Claude Haiku 4.5', 'Mistral Embed', 'FAISS', 'FastAPI', 'Streamlit', 'Playwright'],
    github: 'https://github.com/shah-data-scientist',
    featured: true,
  },
  {
    id: 'iam-policy-llm',
    title: 'IAM Policy Generator',
    subtitle: 'QLoRA Fine-tuned Llama 3.2 3B · Red-Team Evaluated',
    domain: 'Cloud Security / AI Governance',
    domainColor: 'rose',
    description:
      'Fine-tuned Llama 3.2 3B (QLoRA, LoRA rank 16, 0.28% of parameters) on 502 AWS IAM policy examples. JSON validity +17.7pp, NIST SP 800-53 recall +53.3pp vs base model. Includes a full adversarial red-team evaluation: 20-attack qualitative audit (100% detection) + 150-prompt quantitative benchmark (62.5% content detection, 8% false positive rate vs 100% for base). Post-generation policy_validator with 7 security flags (wildcard action/resource, privilege escalation, missing MFA condition).',
    metrics: [
      { label: 'JSON Validity', value: '96.1%' },
      { label: 'Red-Team FP Rate', value: '8%' },
      { label: 'NIST Recall', value: '53.3%' },
    ],
    tech: ['QLoRA', 'Llama 3.2 3B', 'unsloth', 'HuggingFace PEFT', 'trl', 'Gemini Flash Lite', 'Gradio', 'scikit-learn'],
    github: 'https://github.com/shah-data-scientist',
    featured: true,
  },
  {
    id: 'cropwise',
    title: 'CropWise',
    subtitle: 'Agricultural ML Platform',
    domain: 'AgTech / MLOps',
    domainColor: 'green',
    description:
      'Production MLOps platform predicting crop yields and recommending optimal crops. Ridge regression pipeline trained on 666K farm records achieves R²=0.913. Full CI/CD with GitHub Actions, MLflow experiment tracking, and Docker Compose deployment.',
    metrics: [
      { label: 'R²', value: '0.913' },
      { label: 'Test Records', value: '666K' },
      { label: 'Automated Tests', value: '106' },
    ],
    tech: ['scikit-learn', 'MLflow', 'FastAPI', 'Streamlit', 'Docker', 'GitHub Actions', 'Poetry'],
    github: 'https://github.com/shah-data-scientist',
    featured: true,
  },
  {
    id: 'credit-scoring',
    title: 'Credit Scoring MLOps',
    subtitle: 'EU AI Act Conformity · ONNX · 459 Tests',
    domain: 'Financial Services / AI Governance',
    domainColor: 'yellow',
    description:
      'Production credit default prediction (LightGBM, 189 features, ROC-AUC 0.832, −47% business cost vs baseline). Full EU AI Act conformity assessment under Annex III Point 5(b) HIGH-RISK — covering Articles 9–15: risk management, data governance, transparency, human-in-the-loop oversight, and fairness testing across gender, age, education, and income type (gender DIR 0.612, calibration bias < 0.002). ONNX Runtime 55× inference speedup, automated drift detection (KS, PSI), 459 tests, MLflow v3.6, full CI/CD.',
    metrics: [
      { label: 'ROC-AUC', value: '0.832' },
      { label: 'ONNX Speedup', value: '55×' },
      { label: 'EU AI Act', value: 'Annex III' },
    ],
    tech: ['LightGBM', 'ONNX Runtime', 'SHAP', 'Optuna', 'MLflow', 'FastAPI', 'Streamlit', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/shah-data-scientist',
    featured: true,
  },
  {
    id: 'brainscanai',
    title: 'BrainScanAI',
    subtitle: 'Semi-Supervised Medical Imaging',
    domain: 'Medical Imaging / Deep Learning',
    domainColor: 'purple',
    description:
      'Brain tumor detection with only 100 labeled MRI scans (1,400 unlabeled). ResNet50 extracts 2048-D features → PCA to 50 dimensions → K-Means weak labeling → regularised MLP. Includes scaling analysis for a 4M-image deployment at €5K budget.',
    metrics: [
      { label: 'F2 Score', value: '96.43%' },
      { label: 'Labeled Images', value: '100' },
      { label: 'Total MRI Scans', value: '2,824' },
    ],
    tech: ['PyTorch', 'ResNet50', 'PCA', 'K-Means', 'scikit-learn', 'FAISS', 't-SNE', 'NumPy'],
    github: 'https://github.com/shah-data-scientist',
    featured: true,
  },
  {
    id: 'cultural-events-rag',
    title: 'Cultural Events RAG',
    subtitle: 'Intelligent Event Recommendation · RAGAS Evaluated',
    domain: 'LLM / RAG',
    domainColor: 'indigo',
    description:
      'RAG assistant recommending Île-de-France cultural events using live OpenAgenda API data. Combines Mistral embeddings, FAISS semantic search, metadata filtering (date, location, category), and FR/EN language auto-detection. Evaluated with RAGAS for retrieval quality.',
    metrics: [
      { label: 'Live Events', value: '1,000+' },
      { label: 'Response Time', value: '2–7s' },
      { label: 'Languages', value: 'FR / EN' },
    ],
    tech: ['Mistral AI', 'FAISS', 'LangChain', 'RAGAS', 'FastAPI', 'Streamlit', 'SQLite', 'OpenAgenda API'],
    github: 'https://github.com/shah-data-scientist',
    featured: true,
  },
  {
    id: 'employee-attrition',
    title: 'Employee Attrition System',
    subtitle: 'EDA → Production API',
    domain: 'HR Analytics',
    domainColor: 'orange',
    description:
      'Full lifecycle from EDA notebooks to production: Logistic Regression + SMOTE for class imbalance, SHAP explanations for HR decision-making, batch prediction API, async Excel report generation, and a complete PostgreSQL audit trail.',
    metrics: [
      { label: 'ROC-AUC', value: '0.824' },
      { label: 'Recall', value: '86.4%' },
      { label: 'Features', value: '28' },
    ],
    tech: ['scikit-learn', 'SHAP', 'SMOTE', 'FastAPI', 'Streamlit', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/shah-data-scientist',
    featured: false,
  },
  {
    id: 'fashioninsta',
    title: 'FashionInsta Vision PoC',
    subtitle: 'Visual Similarity Recommendation',
    domain: 'Computer Vision / Fashion Tech',
    domainColor: 'pink',
    description:
      'PoC for AI-powered clothing recommendation from user photos for a €10.4M fashion retailer. Evaluates CLIP / ResNet-50 visual embeddings + FAISS cosine similarity across 8 product categories, with Azure AI Search scalability path.',
    metrics: [
      { label: 'Business Revenue', value: '€10.4M' },
      { label: 'Product Categories', value: '8' },
      { label: 'Architecture', value: 'CLIP + FAISS' },
    ],
    tech: ['CLIP', 'ResNet-50', 'FAISS', 'FastAPI', 'Azure AI Search', 'Python'],
    github: 'https://github.com/shah-data-scientist',
    featured: false,
  },
]

export const skills = {
  'Machine Learning': [
    'scikit-learn', 'XGBoost', 'LightGBM', 'CatBoost', 'PyTorch',
    'SHAP', 'NMF', 'Ridge Regression', 'Random Forest',
  ],
  'LLM & RAG': [
    'Mistral AI', 'LangChain', 'FAISS', 'LangGraph (ReAct)',
    'CLIP', 'ResNet-50', 'Embeddings', 'Vector Search',
  ],
  'MLOps & DevOps': [
    'Docker', 'GitHub Actions', 'MLflow', 'FastAPI', 'Nginx',
    'PostgreSQL', 'Redis', 'Alembic', 'Poetry',
  ],
  'Data & Visualisation': [
    'pandas', 'NumPy', 'Parquet', 'Plotly', 'Streamlit', 'SQLite', 'Matplotlib',
  ],
  'Methods & Practices': [
    'CRISP-DM', 'SMOTE', 'Semi-supervised Learning',
    'ABAC / RBAC', 'Cost-sensitive Learning', 'BIC Optimisation',
  ],
}

export const domainColorMap: Record<string, string> = {
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  green: 'bg-green-500/10 text-green-400 border-green-500/20',
  yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  pink: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  rose: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
}
