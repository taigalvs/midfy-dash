import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import * as requests from './requests'
import { toast } from 'react-toastify'

export const KEY_GET_CUSTOMERS_LIST = 'getCustomersList'

export const useGetCustomersList = () =>
  useQuery({
    queryKey: [KEY_GET_CUSTOMERS_LIST],
    queryFn: () => requests.getCustomersList(),
    placeholderData: keepPreviousData
  })

export const useEditCustomerMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: requests.editCustomer,
    onSuccess: () => {
      toast.success('Customer edited successfully.')
      queryClient.invalidateQueries({ queryKey: [KEY_GET_CUSTOMERS_LIST] })
    },
    onError: () => {
      toast.error(`An error occurred while trying to edit the customer.`)
    }
  })
}

export const useDeleteCustomerMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: requests.deleteCustomer,
    onSuccess: () => {
      toast.success('Client deleted successfully.')
      queryClient.invalidateQueries({ queryKey: [KEY_GET_CUSTOMERS_LIST] })
    },
    onError: () => {
      toast.error(`An error occurred while trying to delete the customer.`)
    }
  })
}
