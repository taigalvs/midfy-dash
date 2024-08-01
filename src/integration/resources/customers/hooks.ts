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
      toast.success('Alteração realizada com sucesso.')
      queryClient.invalidateQueries({ queryKey: [KEY_GET_CUSTOMERS_LIST] })
    },
    onError: () => {
      toast.error(`Ocorreu um erro ao tentar alterar os dados do cliente.`)
    }
  })
}

export const useDeleteCustomerMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: requests.deleteCustomer,
    onSuccess: () => {
      toast.success('Cliente excluído com sucesso.')
      queryClient.invalidateQueries({ queryKey: [KEY_GET_CUSTOMERS_LIST] })
    },
    onError: () => {
      toast.error(`Ocorreu um erro ao tentar excluir o cliente.`)
    }
  })
}
