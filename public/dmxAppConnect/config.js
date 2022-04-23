dmx.config({
  "users": {
    "data_detailUser": {
      "meta": [
        {
          "type": "number",
          "name": "userID"
        },
        {
          "type": "text",
          "name": "firstname"
        },
        {
          "type": "text",
          "name": "lastname"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "text",
          "name": "password"
        },
        {
          "type": "number",
          "name": "group"
        },
        {
          "type": "number",
          "name": "status"
        },
        {
          "type": "datetime",
          "name": "created"
        }
      ],
      "outputType": "array"
    }
  },
  "expenses": {
    "data_detailExpense": {
      "meta": [
        {
          "type": "number",
          "name": "expenseID"
        },
        {
          "type": "date",
          "name": "date"
        },
        {
          "type": "number",
          "name": "expense_amount"
        },
        {
          "type": "text",
          "name": "expense_note"
        }
      ],
      "outputType": "array"
    }
  }
});
