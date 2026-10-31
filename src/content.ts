// All site copy for Stallion Connect Pvt Ltd lives here.

export const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

// TODO: replace with the company's real contact details
export const CONTACT = {
  address: 'Office address, City, State – PIN',
  phone: '+91 00000 00000',
  phoneHref: 'tel:+910000000000',
  email: 'info@stallionconnect.in',
  careersEmail: 'careers@stallionconnect.in',
  hours: 'Monday – Saturday, 9:30 AM – 6:30 PM',
};

// TODO: confirm these figures with the client
export const HIGHLIGHTS = [
  { value: '7', label: 'Core service lines under one roof' },
  { value: '2', label: 'Markets served: domestic & international' },
  { value: '24×7', label: 'Support coverage available' },
  { value: '1', label: 'Partner for front & back office' },
];

export type Service = {
  id: string;
  title: string;
  short: string;
  lead: string;
  points: string[];
  idealFor: string;
  youGet: string[];
};

export const SERVICES: Service[] = [
  {
    id: 'call-centre',
    title: 'Domestic & International Call Centre Operations',
    short: 'Domestic and international voice support, run by trained and quality-monitored agents.',
    lead: 'Professionally managed voice operations for customers across India and overseas markets, with trained agents, quality monitoring and flexible shift coverage.',
    points: ['Inbound customer care & helpdesk', 'Outbound calling campaigns', 'Multilingual support in English, Hindi & regional languages', 'International voice processes for US, UK & Australian time zones', 'Call quality monitoring & audits', 'Escalation & complaint management'],
    idealFor: 'Banks, telecom, e-commerce, travel and any business with high call volumes.',
    youGet: ['Dedicated or shared agent teams', 'Flexible shifts across time zones', 'Daily and monthly MIS reports'],
  },
  {
    id: 'banking',
    title: 'Banking & Financial Services Outsourcing',
    short: 'Card and loan sales, onboarding, KYC and collections support for banks, NBFCs and fintechs.',
    lead: 'Specialised teams for banks, NBFCs, fintechs and insurers, handling sales, service and verification with the care financial customers expect.',
    points: ['Credit card & personal loan sales', 'Customer onboarding & KYC verification', 'Account and card servicing support', 'Collections & payment reminder calls', 'Insurance tele-sales & renewals', 'Document collection & verification'],
    idealFor: 'Banks, NBFCs, fintechs, insurers and payment companies.',
    youGet: ['Process-trained BFSI agents', 'Compliance-first scripts and checks', 'Conversion and quality tracking'],
  },
  {
    id: 'sales',
    title: 'Inbound & Outbound Sales',
    short: 'Teams that turn enquiries into orders and reach new prospects with compliant outreach.',
    lead: 'Revenue-focused teams that convert enquiries into customers and reach new prospects with well-scripted, compliant outreach.',
    points: ['Inbound sales & order taking', 'Outbound telesales campaigns', 'Cross-sell & up-sell to existing customers', 'Appointment setting & demo booking', 'Renewals & customer win-back', 'Sales funnel & conversion reporting'],
    idealFor: 'Businesses that want more conversions from enquiries, campaigns and existing customers.',
    youGet: ['Target-driven sales teams', 'Script and pitch refinement', 'Lead-to-sale funnel reporting'],
  },
  {
    id: 'bpo-ites',
    title: 'BPO & ITES Operations',
    short: 'Email, chat, helpdesk and data processing that keep your operations lean and fast.',
    lead: 'End-to-end business process and IT-enabled services that help you run leaner, faster operations.',
    points: ['Email & chat support', 'L1 technical helpdesk', 'Data processing & management', 'Order & transaction processing', 'Content review & moderation', 'SOP documentation & process improvement'],
    idealFor: 'Companies that want to offload repeatable processes and scale without hiring in-house.',
    youGet: ['SOP-driven delivery', 'Accuracy and turnaround SLAs', 'Teams that scale with your volumes'],
  },
  {
    id: 'support-leads',
    title: 'Customer Support & Lead Generation',
    short: 'Omnichannel support paired with targeted lead generation to keep your pipeline full.',
    lead: 'Keep customers happy and your pipeline full, with omnichannel support paired with targeted lead generation.',
    points: ['Support across voice, email, chat & social', 'Ticket management & resolution', 'Customer feedback & satisfaction surveys', 'B2B & B2C lead generation', 'Lead qualification & nurturing', 'Database building & enrichment'],
    idealFor: 'Brands that need responsive customer care and a steady flow of qualified leads.',
    youGet: ['Omnichannel coverage', 'CSAT and resolution tracking', 'Qualified, sales-ready leads'],
  },
  {
    id: 'recruitment',
    title: 'Recruitment & Training',
    short: 'Volume hiring, assessments and job-ready training for customer-facing roles.',
    lead: 'We source, assess and train talent for our own floors and for clients who need ready-to-work teams.',
    points: ['Volume hiring for customer-facing roles', 'Screening, assessments & interviews', 'Induction & process training', 'Communication, soft skills & voice training', 'Product & compliance training', 'Ongoing coaching & refresher programmes'],
    idealFor: 'Businesses scaling customer-facing teams quickly, in-house or outsourced.',
    youGet: ['Faster hiring for volume roles', 'A structured training curriculum', 'Assessed, job-ready candidates'],
  },
  {
    id: 'back-office',
    title: 'Back-Office & Administrative Services',
    short: 'Accurate data entry, document processing, verification and MIS reporting.',
    lead: 'Accurate, secure handling of the everyday work that keeps your business running.',
    points: ['Data entry & digitisation', 'Document processing & indexing', 'Verification & validation checks', 'Records & database management', 'Billing, invoicing & reconciliation support', 'MIS reporting & administrative support'],
    idealFor: 'Organisations that need reliable, accurate processing without growing headcount.',
    youGet: ['Accuracy-checked output', 'Secure data handling', 'Turnaround-time SLAs'],
  },
];

export const ABOUT = {
  paragraphs: [
    'Stallion Connect Pvt Ltd is a business process outsourcing (BPO) company providing call centre, sales, customer support and back-office services to businesses across India and overseas.',
    "We partner with banks, financial services firms and fast-growing brands to manage the customer conversations and operational work that matter most, from answering a customer's first call to closing a sale, verifying a document or updating a record.",
    'Every engagement is built around clear goals, trained teams and transparent reporting, so you always know how your process is performing.',
  ],
  scope: ['Domestic & international call centre operations', 'Banking & financial services outsourcing', 'Inbound & outbound sales', 'BPO & ITES operations', 'Customer support & lead generation', 'Recruitment & training', 'Back-office & administrative services'],
  drives: [
    { title: 'Mission', text: 'To deliver reliable, high-quality outsourcing services that help our clients grow, while building rewarding careers for our people.' },
    { title: 'Vision', text: 'To be a trusted name in customer experience and business process outsourcing, known for quality, integrity and results.' },
    { title: 'Values', text: 'The principles behind every call, every process and every hire.', tags: ['Integrity', 'Customer first', 'Accountability', 'Teamwork', 'Continuous learning'] },
  ],
  why: ['Agents trained and assessed on every process before going live', "Secure, confidential handling of your customers' data", 'Quick ramp-up with flexible team sizes', 'Transparent reporting with clear KPIs and SLAs', 'Multilingual teams: English, Hindi and regional languages', 'Cost-effective delivery without cutting corners'],
  pillars: [
    { title: 'People', text: 'Carefully hired, continuously coached teams that represent your brand well.' },
    { title: 'Process', text: 'Documented SOPs, quality audits and regular calibration sessions.' },
    { title: 'Technology', text: 'CRM, dialer and reporting tools that fit the way you already work.' },
    { title: 'Security', text: 'Access controls and confidentiality built into every process.' },
  ],
  apart: [
    { title: 'Industry-trained teams', text: 'Agents learn your products, compliance rules and customer expectations before they go live.' },
    { title: 'Quality you can measure', text: 'Call audits, KPIs and regular reports show exactly how your process is performing.' },
    { title: 'Built to scale', text: 'Start with a pilot and grow the team as your volumes increase, without the hiring headache.' },
    { title: 'Data security first', text: "Access controls and confidentiality agreements protect your customers' information." },
  ],
};

export const INDUSTRIES = [
  { id: 'bfsi', title: 'Banking & Financial Services', text: 'Card and loan sales, onboarding, KYC and collections for banks, NBFCs and fintechs.', tags: ['Tele-sales', 'KYC', 'Collections'] },
  { id: 'insurance', title: 'Insurance', text: 'Policy sales, renewals, claims assistance and policyholder service.', tags: ['Renewals', 'Claims support', 'Tele-sales'] },
  { id: 'telecom', title: 'Telecom & Internet', text: 'Activations, plan upgrades, billing queries and technical support.', tags: ['Helpdesk', 'Upgrades', 'Retention'] },
  { id: 'ecommerce', title: 'E-commerce & Retail', text: 'Order support, returns, seller onboarding and catalogue management.', tags: ['Order support', 'Chat', 'Back-office'] },
  { id: 'healthcare', title: 'Healthcare', text: 'Appointment scheduling, patient helpdesk and medical records administration.', tags: ['Scheduling', 'Helpdesk', 'Data entry'] },
  { id: 'travel', title: 'Travel & Hospitality', text: 'Reservations, booking changes and round-the-clock guest support.', tags: ['Reservations', 'Support', 'Upsell'] },
  { id: 'education', title: 'Education & EdTech', text: 'Admissions counselling, lead nurturing and student support.', tags: ['Lead generation', 'Counselling', 'Support'] },
  { id: 'real-estate', title: 'Real Estate', text: 'Lead qualification, site-visit scheduling and follow-ups for developers and brokers.', tags: ['Lead generation', 'Appointments'] },
];

export const APPROACH = [
  { title: 'Domain-trained agents', text: 'Training covers your products, terminology and the questions your customers actually ask.' },
  { title: 'Compliance-aware processes', text: 'Scripts and checks are designed around the rules of your sector, from KYC to data privacy.' },
  { title: 'Industry-relevant reporting', text: 'We track the metrics that matter in your business, not just generic call statistics.' },
];

export const STEPS = [
  { title: 'Discover', text: 'We learn your goals, customers, call volumes and what success looks like.' },
  { title: 'Design', text: 'We map the process, scripts, SOPs, team size and reporting.' },
  { title: 'Deploy', text: 'We hire, train and launch your team, often starting with a pilot.' },
  { title: 'Optimise', text: 'We track quality and KPIs and refine the process every month.' },
];

// TODO: confirm these perks with the client
export const PERKS = [
  { title: 'Structured training', text: 'Learn the process, products and soft skills before you take your first call.' },
  { title: 'Clear career growth', text: 'Grow from agent to team leader, trainer or quality analyst through internal promotions.' },
  { title: 'Performance incentives', text: 'Earn incentives and rewards on top of your salary for great results.' },
  { title: 'Freshers welcome', text: 'No experience needed. Good communication and a willingness to learn are what count.' },
  { title: 'Domestic & international processes', text: 'Work on voice, chat and back-office processes for clients in India and abroad.' },
  { title: 'Supportive workplace', text: 'A friendly, respectful culture with regular team engagement activities.' },
];

// TODO: sample roles; replace with the client's actual openings
export const JOBS = [
  { title: 'Customer Support Executive – Domestic Voice', meta: ['Full-time', 'Freshers welcome', 'Hindi & English'] },
  { title: 'International Voice Process Associate', meta: ['Full-time', '0–2 years', 'Night shifts (US / UK)'] },
  { title: 'Tele-sales Executive – BFSI', meta: ['Full-time', '0–2 years', 'Incentives'] },
  { title: 'Back-Office / Data Entry Executive', meta: ['Full-time', 'Freshers welcome', 'Day shift'] },
  { title: 'Team Leader – Operations', meta: ['Full-time', '2+ years in BPO', 'People management'] },
  { title: 'Process Trainer', meta: ['Full-time', '2+ years in training', 'Voice & soft skills'] },
];

export const HIRING = [
  { title: 'Apply', text: 'Apply online or share your resume with our HR team.' },
  { title: 'Screening call', text: 'A short call to understand your background and preferred role.' },
  { title: 'Interview & assessment', text: 'A conversation and a simple test of communication and role skills.' },
  { title: 'Offer & training', text: 'Receive your offer and start structured training before going live.' },
];

export const EXPERIENCE = ['Fresher', 'Less than 1 year', '1–2 years', '2–5 years', '5+ years'];
