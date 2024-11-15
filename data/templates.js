let templates = [
  {
    id: 1,
    name: 'Order Confirmation',
    template: 'Hello, {{name}}! Your order #{{orderNumber}} has been confirmed for ₹{{price}}. We will deliver it to {{address}}. Track your order here: {{trackingLink}}',
  },
  {
    id: 2,
    name: 'Shipping Notification',
    template: 'Hi {{name}}, your order is on the way! Track it here: {{trackingLink}}'
  }
];

export default templates;