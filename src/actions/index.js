export const setAccounts = (id, name, balance) => {
    return {
        type: 'SET_ACCOUNTS',
        payload: {
            id, name, balance
        }
    }
}

export const setTransactions = (transactIndex, accountid, type, amount, description) => {
    return {
        type: 'SET_TRANSACTIONS',
        payload: {
            transactIndex, accountid, type, amount, description
        }
    }
}

export const addAccount = (accountid, name, balance) => {
    return {
        type: 'ADD_ACCOUNT',
        payload: accountid, name, balance
    }
}

export const depositCash = (accountid, amount) => {
    return {
        type: 'DEPOSIT_CASH',
        payload: accountid, amount
    }
}

export const withdrawCash = (accountid, amount) => {
    return {
        type: 'WITHDRAW_CASH',
        payload: accountid, amount
    }
}

export const tasksError = errorMessage => {
    return {
        type: 'TASKS_ERROR'
    }
};


