import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { templates } from './data/templates.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());


// Endpoint to get all templates
app.get('/api/templates', (req, res) => {
  res.json(templates);
});

// Endpoint to preview template
app.post('/api/preview', (req, res) => {
  const { templateId, variables } = req.body;
  const template = templates.find(t => t.id === templateId);
  
  if (!template) {
    return res.status(404).send('Template not found');
  }

  let preview = template.template;
  for (let [key, value] of Object.entries(variables)) {
    preview = preview.replace(`{{${key}}}`, value);
  }
  res.json({ preview });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

