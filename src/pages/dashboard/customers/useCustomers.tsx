import { TCustomerItem, useEditCustomerMutation, useGetCustomersList } from '@/integration/resources/customers'
import { Button } from '@mui/material'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { useMemo, useState } from 'react'

export const useCustomers = () => {
  const { data: customers, isLoading, isRefetching } = useGetCustomersList()
  const editCustomerMutation = useEditCustomerMutation()

  const [open, setOpen] = useState(false)
  const [selectedCustomer, setSelectedCustomer] = useState<TCustomerItem>()

  const handleEditClick = (customer: TCustomerItem) => {
    setSelectedCustomer(customer)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedCustomer(undefined)
  }

  const handleSave = (values: TCustomerItem) => {
    return editCustomerMutation.mutateAsync({ id: values.id, name: values.name }).finally(() => {
      handleClose()
    })
  }

  const columns: GridColDef<TCustomerItem>[] = useMemo(
    () => [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'name', headerName: 'Name', width: 150 },
      {
        field: 'avatar',
        headerName: 'Avatar',
        width: 110,
        renderCell: (params: GridRenderCellParams<TCustomerItem, string>) => (
          <img src={params.value} alt='avatar' style={{ width: 50, height: 50, borderRadius: '50%' }} />
        ),
        filterable: false,
        sortable: false
      },
      {
        field: 'createdAt',
        headerName: 'Created At',
        type: 'date',
        width: 150,
        valueGetter: (_, row) => new Date(row.createdAt),
        filterable: false,
        sortable: false
      },
      {
        field: 'actions',
        headerName: 'Actions',
        width: 150,
        renderCell: (params: GridRenderCellParams<TCustomerItem>) => (
          <Button variant='contained' color='primary' onClick={() => handleEditClick(params.row)}>
            Edit
          </Button>
        ),
        filterable: false,
        sortable: false
      }
    ],
    []
  )

  return {
    customers,
    columns,
    handleEditClick,
    handleSave,
    open,
    selectedCustomer,
    setOpen,
    setSelectedCustomer,
    handleClose,
    isLoading: isLoading || isRefetching
  }
}
