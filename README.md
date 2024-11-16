# API Documentation

## 1. Get All Templates

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

### Endpoint:

```bash
GET /api/templates
```

### Description:

Retrieve all available WhatsApp templates.

### Response

```python
[
  {
    "id": 1,
    "name": "Order Confirmation",
    "template": "Hello, {{name}}! Your order #{{orderNumber}} is confirmed for Rs.{{amount}}. We'll deliver it to {{deliveryAddress}}.
  }
]
```

## 2. Generate Template Preview

### Endpoint:

```bash
POST /api/templates/preview
```

### Description:

Generate a preview of the template with the provided dynamic variables.

### Request Body:

```bash
{
  "templateId": 1,
  "variables": {
    "name": "Abhi",
    "orderNumber": "12345",
    "amount": "1500",
    "deliveryAddress": "Jaipur, Rajasthan",
  }
}
```

### Response

```bash
{
  "preview": "Hello, Abhi! Your order #12345 is confirmed for Rs.1500. We'll deliver it to Jaipur, Rajasthan.
}
```

### Error Responses

- 400: Missing or invalid input (e.g., missing variables or templateId).

```bash
{ "error": "Template ID is required" }
```

- 404: Template not found.

```bash
{ "error": "Template not found" }
```