import * as expenseAPI from './expense-api';

export async function create(expenseData) {
    return await expenseAPI.createExpense(expenseData);
  }