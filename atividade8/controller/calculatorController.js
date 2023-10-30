const express = require('express');
const path = require('path');

exports.getCalculatorForm = (req, res) => {
  res.sendFile(path.join(__dirname, '../calculadora/index.html'));
};

exports.calculate = (req, res) => {
  const { numA, numB, operation } = req.body;

  let result;
  switch (operation) {
    case '+':
      result = parseFloat(numA) + parseFloat(numB);
      break;
    case '-':
      result = parseFloat(numA) - parseFloat(numB);
      break;
    case '*':
      result = parseFloat(numA) * parseFloat(numB);
      break;
    case '/':
      result = parseFloat(numA) / parseFloat(numB);
      break;
    default:
      result = 'Operação inválida';
  }

  res.send(`Resultado: ${result}`);
};
