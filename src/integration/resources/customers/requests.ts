import { client } from '@/integration/client'

import { TCustomerItem } from './types'

export const getCustomersList = async () => {
  return client.get<TCustomerItem[]>('/customers').then(({ data }) => data)
}

export const editCustomer = async (data: { id: string; name: string }) => {
  return client.put(`/customers/${data.id}`, data).then(({ data }) => data)
}
