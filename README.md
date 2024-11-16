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

```json
[
  {
    "id": 1,
    "name": "Order Confirmation",
    "template": "Hello, {{Name}}! Your order #{{OrderNumber}} is confirmed for Rs.{{Amount}}. We'll deliver it to {{DeliveryAddress}}."
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

```json
{
  "templateId": 1,
  "variables": {
    "name": "Abhi",
    "orderNumber": "12345",
    "amount": "1500",
    "deliveryAddress": "Jaipur, Rajasthan"
  }
}
```

### Response

```json
{
  "preview": "Hello, Abhi! Your order #12345 is confirmed for Rs.1500.We'll deliver it to Jaipur, Rajasthan."
}
```

### Error Responses

- 400: Missing or invalid input (e.g., missing variables or templateId).

```json
{ "error": "Template ID is required" }
```

- 404: Template not found.

```json
{ "error": "Template not found" }
```
