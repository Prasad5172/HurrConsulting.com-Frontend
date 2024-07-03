import React from 'react'
import { toast } from 'react-toastify';

export const toastSuccess = (message) => {
    toast.success(message);
}

export const toastFailed = (message) => {
    toast.error(message);
}
