require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(morgan('dev'));
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());

const projects = [
  {
    id: 1,
    title: 'Campus Sustainability App',
    description: 'Full-stack web app to track and promote sustainable practices at LUMS. Led system design, database schema, and backend API in an agile team across the Software Engineering course.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Figma', 'Android Studio'],
    github: 'https://github.com/aahadj2',
    demo: 'https://github.com/aahadj2',
    image: 'sustainability',
    category: 'Full Stack',
    featured: true,
  },
  {
    id: 2,
    title: 'Database & MLOps Pipeline',
    description: 'Designed relational schemas and complex SQL queries on Microsoft Azure. Built end-to-end MLOps workflows in Databricks — model training, versioning, and deployment pipelines. Implemented the backend of a food delivery app.',
    tech: ['Python', 'SQL', 'Azure', 'Databricks', 'MLOps'],
    github: 'https://github.com/aahadj2',
    demo: 'https://github.com/aahadj2',
    image: 'mlops',
    category: 'AI/ML',
    featured: true,
  },
  {
    id: 3,
    title: 'Quantum Computing Lab',
    description: 'Implementing quantum circuits and algorithms using IBM Qiskit as part of the Quantum Technologies minor. Simulating quantum gates, superposition, and entanglement experiments — working toward IBM Qiskit Developer Certification.',
    tech: ['Python', 'IBM Qiskit', 'MATLAB', 'Quantum Circuits'],
    github: 'https://github.com/aahadj2',
    demo: 'https://github.com/aahadj2',
    image: 'quantum',
    category: 'Research',
    featured: true,
  },
  {
    id: 4,
    title: 'Chatbot-Integrated Web App',
    description: 'Built responsive web applications following FreeCodeCamp curriculum. Integrated a Botpress chatbot into a web interface and connected external REST APIs for dynamic content delivery during the Stratosphere Studio internship.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Botpress', 'REST APIs'],
    github: 'https://github.com/aahadj2',
    demo: 'https://github.com/aahadj2',
    image: 'chatbot',
    category: 'Frontend',
    featured: false,
  },
];

const skills = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'C++', 'SQL', 'MATLAB', 'HTML', 'CSS'] },
  { category: 'Frontend & Tools', items: ['React', 'Node.js', 'Figma', 'Android Studio', 'Botpress', 'Git/GitHub'] },
  { category: 'Cloud & Data', items: ['Microsoft Azure', 'Databricks', 'PostgreSQL', 'MLOps Pipelines'] },
  { category: 'Specialisations', items: ['Machine Learning', 'Quantum Computing', 'IBM Qiskit', 'Database Design', 'REST APIs'] },
];

app.get('/api/projects', (req, res) => {
  const { category, featured } = req.query;
  let result = projects;
  if (category && category !== 'All') result = result.filter(p => p.category === category);
  if (featured === 'true') result = result.filter(p => p.featured);
  res.json({ success: true, data: result });
});

app.get('/api/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) return res.status(404).json({ success: false, message: 'Project not found' });
  res.json({ success: true, data: project });
});

app.get('/api/skills', (req, res) => {
  res.json({ success: true, data: skills });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }
  console.log('Contact form submission:', { name, email, message });
  res.json({ success: true, message: 'Message received! I will get back to you soon.' });
});

app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
