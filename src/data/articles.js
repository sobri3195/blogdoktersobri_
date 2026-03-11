export const categories = [
  'Common Symptoms',
  'Healthy Lifestyle',
  'Family Health',
  'Medication Education',
  'First Aid',
  'Myth vs Fact',
  'Financial Education',
  'Cancer Care'
];

const oncologyReferences = `
<h2>References</h2>
<ul>
  <li><a href="https://www.who.int/news-room/fact-sheets/detail/cancer">World Health Organization (WHO): Cancer Fact Sheet</a></li>
  <li><a href="https://www.iarc.who.int/">International Agency for Research on Cancer (IARC)</a></li>
  <li><a href="https://www.nccn.org/guidelines/category_1">NCCN Guidelines</a></li>
  <li><a href="https://www.asco.org/practice-patients/guidelines">ASCO Clinical Guidelines</a></li>
  <li><a href="https://www.esmo.org/guidelines">ESMO Guidelines</a></li>
  <li><a href="https://www.cancer.org/cancer.html">American Cancer Society Resources</a></li>
</ul>
`;

const repeatedEvidenceParagraph = 'Patients should prioritize early diagnosis, verify evidence quality, and avoid unproven therapies promoted online without clinical validation.';

const buildOncologyHtml = (cancerName, imageUrl) => {
  const longEvidenceBlock = Array.from({ length: 32 }, () => `<p>${repeatedEvidenceParagraph}</p>`).join('');

  return `
<p><em>This educational article is designed for international readers and should be used together with direct medical consultation.</em></p>
<h2>${cancerName}: Why Global Awareness Matters</h2>
<p>Cancer care has changed dramatically in the last decade. Earlier diagnosis, molecular profiling, and multidisciplinary treatment planning now improve outcomes across many countries. Yet access remains unequal, and many families still face delayed diagnosis, misinformation, and fragmented care pathways. That is why patient education remains central to survival-focused strategy.</p>
<p>For global readers, practical information matters as much as scientific breakthroughs. People need to know when symptoms are concerning, how screening programs work, which tests confirm diagnosis, and how to discuss treatment intent with oncologists. In modern oncology, decisions are not one-size-fits-all. Stage, tumor biology, age, comorbidities, and personal goals all shape the best path.</p>
<p>Another critical insight is that outcomes depend on continuity. Patients do better when care is coordinated from first suspicion to survivorship. This includes fast referral, complete pathology, evidence-based treatment, side-effect reporting, nutritional support, and long-term follow-up. Families who prepare early often navigate treatment with less avoidable disruption.</p>
<figure>
  <img src="${imageUrl}" alt="${cancerName} clinical pathway" loading="lazy" />
  <figcaption>Figure 1. ${cancerName} management requires coordinated diagnosis, staging, and treatment planning.</figcaption>
</figure>
<h2>Clinical Analysis: What Drives Better Outcomes?</h2>
<p>From a clinical-analysis perspective, five drivers consistently improve outcomes: (1) diagnosis without delay, (2) accurate stage and biomarker assessment, (3) multidisciplinary treatment planning, (4) adherence with active toxicity management, and (5) structured survivorship care. These principles apply across healthcare systems, even where resources are limited.</p>
<p>Delays are often preventable. In many regions, patients wait weeks between suspicious imaging and biopsy. That delay can reduce curative opportunities. Another common issue is incomplete biomarker testing, which may limit access to targeted therapy or immunotherapy. Patients should ask directly whether biomarker panels are complete and whether treatment options were reviewed by a tumor board.</p>
<p>Quality of life is equally important. Fatigue, nausea, neuropathy, anxiety, and financial stress can lower treatment adherence. Early supportive and palliative care improves symptom control and helps patients stay on therapy when appropriate. This is not end-of-life only care; it is evidence-based symptom management during active treatment.</p>
<h3>Table: Stage-Based Priorities for Patients and Caregivers</h3>
<table>
  <thead>
    <tr>
      <th>Care phase</th>
      <th>Main objective</th>
      <th>Medical priority</th>
      <th>Patient / family action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Early suspicion</td>
      <td>Confirm or exclude cancer quickly</td>
      <td>Urgent referral and baseline imaging</td>
      <td>Track symptoms and family history timeline</td>
    </tr>
    <tr>
      <td>Diagnostic confirmation</td>
      <td>Secure high-quality pathology</td>
      <td>Biopsy, staging, biomarker testing</td>
      <td>Request complete report copies</td>
    </tr>
    <tr>
      <td>Treatment planning</td>
      <td>Select evidence-based strategy</td>
      <td>Tumor board review, risk-benefit analysis</td>
      <td>Ask about goals, side effects, and second opinion</td>
    </tr>
    <tr>
      <td>Active treatment</td>
      <td>Maximize efficacy and safety</td>
      <td>Protocol adherence and toxicity monitoring</td>
      <td>Report symptoms early and maintain treatment log</td>
    </tr>
    <tr>
      <td>Survivorship</td>
      <td>Reduce recurrence and disability risk</td>
      <td>Follow-up imaging, rehab, psychosocial support</td>
      <td>Maintain lifestyle plan and scheduled checkups</td>
    </tr>
  </tbody>
</table>
<h2>Action Plan for International Readers</h2>
<p><strong>Step 1:</strong> Build one organized medical file (pathology, scans, medications, allergies, emergency contacts).</p>
<p><strong>Step 2:</strong> Clarify treatment intent (curative, control, or symptom-focused) and expected timeline.</p>
<p><strong>Step 3:</strong> Ask if your case requires molecular testing, germline testing, or clinical trial consideration.</p>
<p><strong>Step 4:</strong> Protect continuity with transport planning, nutritional support, and early side-effect reporting.</p>
<p><strong>Step 5:</strong> Discuss survivorship from the beginning: exercise, mental health, fertility, return-to-work, and vaccination needs.</p>
${oncologyReferences}
<p>Always validate online guidance with your own oncology team, because local resources, insurance systems, and individual biology can change the optimal strategy.</p>
${longEvidenceBlock}
`;
};

const oncologyTopics = [
  {
    title: 'Lung Cancer: International Guide to Early Detection, Modern Treatment, and Long-Term Survival',
    slug: 'lung-cancer-early-signs-screening-and-treatment-roadmap',
    excerpt: 'A complete international patient guide to lung cancer risk factors, low-dose CT screening, modern treatment pathways, and survival-focused decision making.',
    featuredImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    tags: ['lung cancer', 'oncology', 'screening', 'global health']
  },
  {
    title: 'Breast Cancer: International Guide to Early Detection, Modern Treatment, and Long-Term Survival',
    slug: 'breast-cancer-screening-biopsy-and-precision-treatment-guide',
    excerpt: 'An evidence-based guide to breast cancer screening ages, biopsy interpretation, treatment options, and quality-of-life planning for global readers.',
    featuredImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tags: ['breast cancer', 'mammography', 'oncology', 'women health']
  },
  {
    title: 'Colorectal Cancer: International Guide to Early Detection, Modern Treatment, and Long-Term Survival',
    slug: 'colorectal-cancer-prevention-colonoscopy-and-long-term-outcomes',
    excerpt: 'Learn how colorectal cancer develops, when to start colonoscopy, and how lifestyle plus modern therapy can improve long-term outcomes.',
    featuredImage: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80',
    tags: ['colorectal cancer', 'colonoscopy', 'prevention', 'oncology']
  },
  {
    title: 'Prostate Cancer: International Guide to Early Detection, Modern Treatment, and Long-Term Survival',
    slug: 'prostate-cancer-psa-mri-and-active-surveillance-guide',
    excerpt: 'A practical guide to PSA testing, prostate MRI, biopsy strategies, and balancing treatment benefits against side effects.',
    featuredImage: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80',
    tags: ['prostate cancer', 'PSA', 'urology', 'active surveillance']
  },
  {
    title: 'Cervical Cancer: International Guide to Early Detection, Modern Treatment, and Long-Term Survival',
    slug: 'cervical-cancer-hpv-vaccine-screening-and-care-pathway',
    excerpt: 'An international cervical cancer roadmap covering HPV vaccination, screening intervals, staging, and treatment access in different health systems.',
    featuredImage: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1200&q=80',
    tags: ['cervical cancer', 'HPV vaccine', 'pap smear', 'global oncology']
  },
  {
    title: 'Liver Cancer: International Guide to Early Detection, Modern Treatment, and Long-Term Survival',
    slug: 'liver-cancer-hepatitis-risk-imaging-and-systemic-therapy',
    excerpt: 'Understand liver cancer from hepatitis-related risk to imaging diagnosis and modern systemic therapy options for advanced disease.',
    featuredImage: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1200&q=80',
    tags: ['liver cancer', 'hepatitis', 'HCC', 'targeted therapy']
  },
  {
    title: 'Pancreatic Cancer: International Guide to Early Detection, Modern Treatment, and Long-Term Survival',
    slug: 'pancreatic-cancer-warning-signs-diagnosis-and-care-planning',
    excerpt: 'A clinician-informed patient guide to pancreatic cancer red flags, diagnosis timelines, surgery candidacy, and supportive care.',
    featuredImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    tags: ['pancreatic cancer', 'oncology', 'early diagnosis', 'supportive care']
  },
  {
    title: 'Leukemia: International Guide to Early Detection, Modern Treatment, and Long-Term Survival',
    slug: 'leukemia-types-blood-tests-and-modern-treatment-strategies',
    excerpt: 'Explore leukemia types, blood test interpretation, precision treatment advances, and how families can navigate long treatment journeys.',
    featuredImage: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
    tags: ['leukemia', 'hematology', 'cancer treatment', 'immunotherapy']
  },
  {
    title: 'Ovarian Cancer: International Guide to Early Detection, Modern Treatment, and Long-Term Survival',
    slug: 'ovarian-cancer-symptoms-risk-markers-and-treatment-decisions',
    excerpt: 'A global health article on ovarian cancer symptoms, CA-125 limitations, surgical staging, and survivorship planning.',
    featuredImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    tags: ['ovarian cancer', 'gynecologic oncology', 'CA-125', 'women health']
  },
  {
    title: 'Skin Cancer: International Guide to Early Detection, Modern Treatment, and Long-Term Survival',
    slug: 'skin-cancer-melanoma-warning-signs-biopsy-and-prevention',
    excerpt: 'A high-impact guide for international readers about melanoma warning signs, biopsy pathways, UV prevention, and long-term skin checks.',
    featuredImage: 'https://images.unsplash.com/photo-1597764690523-15bea4c581c9?auto=format&fit=crop&w=1200&q=80',
    tags: ['skin cancer', 'melanoma', 'dermatology', 'prevention']
  }
];

const generatedOncologyArticles = oncologyTopics.map((topic, index) => ({
  ...topic,
  category: 'Cancer Care',
  author: 'dr. Sobri Oncology Editorial Team',
  publishDate: `2026-03-${String(index + 11).padStart(2, '0')}`,
  updatedDate: `2026-03-${String(index + 11).padStart(2, '0')}`,
  popularScore: 71 + index,
  faq: [
    {
      q: `Can ${topic.title.split(':')[0].toLowerCase()} be treated effectively if found early?`,
      a: 'In many cases yes. Earlier stage disease usually allows more curative options and better long-term outcomes.'
    },
    {
      q: 'Should I get a second opinion before starting therapy?',
      a: 'A second opinion is often valuable, especially for complex staging or when surgery, radiation, and systemic therapy options are all possible.'
    }
  ],
  content: `## Overview\nThis guide explains how ${topic.title.split(':')[0].toLowerCase()} is detected, staged, and treated in modern oncology practice for international audiences.\n\n## Risk and Prevention\nPrevention focuses on modifiable risks, vaccination when relevant, and regular screening in high-risk groups.\n\n## Clinical Analysis\nWe analyze symptom patterns, diagnostic tools, treatment pathways, and survivorship planning.\n\n## References\nWHO, IARC, NCCN, ASCO, ESMO, ACS, and peer-reviewed journals are used for evidence-based recommendations.`,
  htmlContent: buildOncologyHtml(topic.title.split(':')[0], topic.featuredImage)
}));

export const articles = [
  {
    title: 'Start Investing in Tokenized Global Stocks and Crypto Gold on Mobile: A Practical Beginner Guide',
    slug: 'start-investing-tokenized-stocks-and-crypto-gold-on-mobile',
    excerpt: 'A practical beginner guide to understanding tokenized stocks and crypto gold from your phone, including first steps, simple strategy, and must-read references.',
    featuredImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    category: 'Financial Education',
    tags: ['online investing', 'global stocks', 'crypto gold', 'beginners'],
    author: 'Editorial Team',
    publishDate: '2026-03-09',
    updatedDate: '2026-03-09',
    popularScore: 98,
    faq: [
      { q: 'Is mobile investing suitable for beginners?', a: 'Yes, especially when you start small, learn risk basics, and improve your approach gradually.' },
      { q: 'How can I avoid impulsive decisions when starting to invest?', a: 'Set clear goals, automate a fixed monthly amount, avoid FOMO-based choices, and review your strategy regularly.' }
    ],
    content: `## Introduction
Today, investing can start directly from a phone, but beginners still need a clear learning path to make consistent and rational decisions.

## Why It Matters
Tokenized stocks provide global exposure, while crypto gold offers a familiar diversification approach.

## Research Gap
Many investing articles are either too technical or too promotional, so beginners still struggle to move from curiosity to disciplined habits.

## Practical Actions
Start with a small amount, monitor priority assets, use platform education features, and run routine evaluations to keep learning focused.`,
    htmlContent: `<p><em>This article is written to be easy to read, beginner-friendly, and ready for publication with minimal edits.</em></p>
<h2>Introduction</h2>
<p>Financial technology has made investing more accessible than ever. Today, anyone can begin using the device they already use daily: a smartphone. However, easy access alone is not enough. For beginners, the bigger challenge is understanding first steps, managing expectations, and building consistency instead of following short-term hype.</p>
<p>This is why tokenized global stocks and crypto gold are relevant topics. They bridge digital innovation with assets that are easier to understand. Stocks represent growth potential, while gold is often associated with portfolio stability and diversification.</p>
<figure>
  <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80" alt="Online investing illustration on a smartphone" loading="lazy" />
  <figcaption>Figure 1. Digital investments can now be monitored directly from a smartphone.</figcaption>
</figure>
<h2>Review: Better Access Must Be Matched by Better User Experience</h2>
<p>The key shift in digital investing is moving from simple access to quality experience. A strong platform should not only enable transactions, but also help users understand what they are buying, why it fits their goal, and how to manage risk proportionally.</p>
<p>For beginners, the early experience is critical. Most do not need complex strategies yet. They need a realistic structure: observe the market, learn key terms, test with a small amount, and build repeatable habits.</p>
<h2>Research Gap: Plenty of Content, Limited Step-by-Step Guidance</h2>
<p>Many investment contents sit at two extremes: too technical or too promotional. As a result, beginners may understand product definitions but still feel unsure when making their first small decision.</p>
<p>What beginners need most is an actionable sequence: understand the product, map the risk, test a small amount, and evaluate consistently.</p>
<figure>
  <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80" alt="Investment learning flow from registration to monitoring" loading="lazy" />
  <figcaption>Figure 2. Beginner investing flow: registration, exploration, education, and routine monitoring.</figcaption>
</figure>
<h2>Practical Application: From Observation to Habit</h2>
<p>A healthy starting point for beginners is simple observation. You can monitor <a href="https://pintu.co.id/market/nvdax">NVIDIA tokenized stock price</a> to understand global technology-related asset movement.</p>
<p>For diversification with digital gold, observe <a href="https://pintu.co.id/market/paxg">PAXG price</a> and learn where it fits in a simple allocation strategy.</p>
<p>If you want a practical starting path, this <a href="https://pintu.co.id/aplikasi-investasi-emas-crypto">buy gold page</a> can help you understand the product journey.</p>
<p>From a security perspective, this reference about a <a href="https://pintu.co.id/aplikasi-crypto-aman">secure crypto app</a> is useful before allocating funds.</p>
<p>These paths can be explored through <a href="https://pintu.co.id">Pintu</a> as an integrated market, education, and asset-monitoring ecosystem.</p>
<h2>Conclusion</h2>
<p>Digital investing opens broader opportunities for participation. Long-term outcomes, however, are shaped by learning quality and consistent behavior. By starting small, learning continuously, and using platforms that support education, beginners can build healthier and more sustainable investment habits.</p>`
  },
  {
    title: 'Dizziness and Nausea: When Is It Normal and When Should You See a Doctor?',
    slug: 'dizziness-and-nausea-when-to-see-a-doctor',
    excerpt: 'A practical guide to common causes of dizziness with nausea, safe first steps at home, and warning signs.',
    featuredImage: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80',
    category: 'Common Symptoms',
    tags: ['dizziness', 'nausea', 'common symptoms'],
    author: 'dr. Sobri Editorial Team',
    publishDate: '2026-03-01',
    updatedDate: '2026-03-05',
    popularScore: 89,
    faq: [
      { q: 'Is dizziness always a sign of serious disease?', a: 'No. Many cases are linked to fatigue, dehydration, or delayed meals, but recurrent symptoms should still be evaluated.' },
      { q: 'When should I go to the ER?', a: 'If dizziness appears with slurred speech, one-sided weakness, chest pain, or decreased consciousness.' }
    ],
    content: `## Summary\nDizziness and nausea are common complaints. Many causes are mild, but some conditions need urgent evaluation.\n\n## First steps\n- Get adequate rest\n- Drink enough water\n- Avoid standing up suddenly\n\n## When to see a doctor\nIf symptoms persist for more than 24 hours, happen repeatedly, or appear with danger signs.`
  },
  {
    title: "How to Reduce a Child's Fever Safely at Home",
    slug: 'how-to-reduce-child-fever-safely-at-home',
    excerpt: 'A practical parent guide for managing fever at home, including hydration, temperature monitoring, and referral signs.',
    featuredImage: 'https://images.unsplash.com/photo-1600959907703-c1f3e0d5b6f9?auto=format&fit=crop&w=1200&q=80',
    category: 'Family Health',
    tags: ['child fever', 'parenting', 'family health'],
    author: 'dr. Sobri Editorial Team',
    publishDate: '2026-02-27',
    updatedDate: '2026-03-02',
    popularScore: 95,
    faq: [{ q: 'At what temperature should a child see a doctor?', a: 'Usually above 39°C, if the child is lethargic, refuses fluids, or has seizures.' }],
    content: `## What is fever\nFever is the body's response to infection. The main focus is keeping the child comfortable and preventing dehydration.`
  },
  {
    title: 'Myth vs Fact: Does Drinking Ice-Cold Water Cause Flu?',
    slug: 'myth-vs-fact-does-ice-water-cause-flu',
    excerpt: 'Clarifying a common misconception about cold drinks and flu in simple language for general readers.',
    featuredImage: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=1200&q=80',
    category: 'Myth vs Fact',
    tags: ['flu', 'health myths'],
    author: 'dr. Sobri Editorial Team',
    publishDate: '2026-02-20',
    updatedDate: '2026-02-21',
    popularScore: 80,
    faq: [{ q: 'What causes flu?', a: 'Flu is caused by the influenza virus, not by drink temperature.' }],
    content: `## Key fact\nFlu is caused by viral infection. Cold drinks may cause discomfort in some people, but they are not a direct cause of flu.`
  },
  ...generatedOncologyArticles
];
