export const setAccounts = (id, name, balance) => {
    return {
        type: 'SET_ACCOUNTS',
        payload: {
            id, name, balance
        }
    }
}

export const setTransactions = tasks => {
    return {
        type: 'SET_TRANSACTIONS',
        payload: userId
    }
}

export const addAccount = (text) = tasks => {
    return {
        type: 'ADD_ACCOUNT',
        payload: text
    }
}

export const depositCash = (_id) = tasks => {
    return {
        type: 'DEPOSIT_CASH',
        payload: userId
    }
}

export const withdrawCash = (_id) = tasks => {
    return {
        type: 'WITHDRAW_CASH',
        payload: userId
    }
}

export const tasksError = errorMessage => {
    return {
        type: 'TASKS_ERROR'
    }
};


