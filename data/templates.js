export const templates = [
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
