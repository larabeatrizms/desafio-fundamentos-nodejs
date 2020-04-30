import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

/**
 * {
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income"
    }
 */

transactionRouter.get('/', (request, response) => {
  try {
    // TODO
    const transactions = transactionsRepository.all();
    const balance = transactionsRepository.getBalance();

    const result = {
      transactions,
      balance,
    };

    return response.json(result);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    // TODO
    const { id, title, value, type } = request.body;

    const createTransaction = new CreateTransactionService(
      transactionsRepository,
    );

    const transaction = createTransaction.execute({
      id,
      title,
      value,
      type,
    });

    return response.json(transaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
