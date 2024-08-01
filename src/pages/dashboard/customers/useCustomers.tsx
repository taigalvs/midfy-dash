import { TCustomerItem, useEditCustomerMutation, useGetCustomersList } from '@/integration/resources/customers'
import { Button } from '@mui/material'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { useMemo, useState } from 'react'

export const useCustomers = () => {
  const { data: customers } = useGetCustomersList()
  const editCustomerMutation = useEditCustomerMutation()

  const [open, setOpen] = useState(false)
  const [selectedCustomer, setSelectedCustomer] = useState<TCustomerItem | null>(null)

  const handleEditClick = (customer: TCustomerItem) => {
    setSelectedCustomer(customer)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedCustomer(null)
  }

  const handleSave = (values: TCustomerItem) => {
    editCustomerMutation.mutate(values)
    handleClose()
  }

  const columns: GridColDef<TCustomerItem>[] = useMemo(
    () => [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'name', headerName: 'Name', width: 150, editable: true },
      {
        field: 'avatar',
        headerName: 'Avatar',
        width: 110,
        renderCell: (params: GridRenderCellParams<TCustomerItem, string>) => (
          <img src={params.value} alt='avatar' style={{ width: 50, height: 50, borderRadius: '50%' }} />
        )
      },
      {
        field: 'createdAt',
        headerName: 'Created At',
        type: 'date',
        width: 150,
        valueGetter: (_, row) => new Date(row.createdAt)
      },
      {
        field: 'actions',
        headerName: 'Actions',
        sortable: false,
        width: 150,
        renderCell: (params: GridRenderCellParams<TCustomerItem>) => (
          <Button variant='contained' color='primary' onClick={() => handleEditClick(params.row)}>
            Edit
          </Button>
        )
      }
    ],
    []
  )

  const hasData = customers && customers.length > 0
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
    hasData
  }
}
