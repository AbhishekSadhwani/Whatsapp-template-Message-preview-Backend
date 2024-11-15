import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

let templates = [
  {
    id: 1,
    name: 'Order Confirmation',
    template: `Hello, {{Name}}!

              Your order #{{OrderNumber}} is confirmed for Rs.{{Amount}}. 
              We'll deliver it to {{DeliveryAddress}}.`,
  },
  {
    id: 2,
    name: 'Shipping Notification',
    template: 'Hi {{Name}}, Your order #{{OrderNumber}} is on the way!'
  }
];

// Endpoint to get all templates
app.get('/api/templates', (req, res) => {
  res.json(templates);
});

// Endpoint to preview template
app.post('/api/preview', (req, res) => {
  const { templateId, variables } = req.body;
  const template = templates.find(t => t.id === templateId);
  if (!template) return res.status(404).send('Template not found');


  let preview = template.template;
  for (let [key, value] of Object.entries(variables)) {
    preview = preview.replace(`{{${key}}}`, value);
  }
  res.json({ preview });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

