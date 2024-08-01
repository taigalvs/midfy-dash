import { client } from '@/integration/client'

import { TCustomerItem, TCustomerPayload } from './types'

export const getCustomersList = async () => {
  return client.get<TCustomerItem[]>('/customers').then(({ data }) => data)
}

export const editCustomer = async (data: TCustomerPayload) => {
  return client.put(`/customers/${data.id}`, data).then(({ data }) => data)
}
