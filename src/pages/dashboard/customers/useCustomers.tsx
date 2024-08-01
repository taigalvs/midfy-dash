import {
  TCustomerItem,
  useEditCustomerMutation,
  useGetCustomersList,
  useDeleteCustomerMutation
} from '@/integration/resources/customers'
import { Avatar, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { ChangeEvent, useMemo, useState } from 'react'

export const useCustomers = () => {
  const { data: customers, isLoading, isRefetching } = useGetCustomersList()
  const editCustomerMutation = useEditCustomerMutation()
  const deleteCustomerMutation = useDeleteCustomerMutation()

  const [open, setOpen] = useState(false)
  const [selectedCustomer, setSelectedCustomer] = useState<TCustomerItem>()
  const [imagePreview, setImagePreview] = useState(selectedCustomer?.avatar || '')

  const handleEditClick = (customer: TCustomerItem) => {
    setSelectedCustomer(customer)
    setImagePreview(customer.avatar)
    setOpen(true)
  }

  const handleDeleteClick = (customerId: string) => {
    deleteCustomerMutation.mutate(customerId)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedCustomer(undefined)
  }

  const handleSave = (values: TCustomerItem) => {
    return editCustomerMutation.mutateAsync(values).finally(() => {
      handleClose()
    })
  }

  const handleAvatarChange = (
    e: ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: string) => void
  ) => {
    const file = e.currentTarget.files?.[0]
    if (file) {
      const urlFile = URL.createObjectURL(file)
      setImagePreview(urlFile)
      setFieldValue('avatar', urlFile)
    }
  }

  const columns: GridColDef<TCustomerItem>[] = useMemo(
    () => [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'name', headerName: 'Name', width: 150 },
      {
        field: 'avatar',
        headerName: 'Profile Picture',
        width: 120,
        renderCell: (params: GridRenderCellParams<TCustomerItem, string>) => (
          <Avatar src={params.value} sx={{ width: 40, height: 40, borderRadius: '50%' }} />
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
          <>
            <IconButton color='primary' onClick={() => handleEditClick(params.row)}>
              <EditIcon fontSize='small' />
            </IconButton>
            <IconButton color='error' onClick={() => handleDeleteClick(params.row.id)}>
              <DeleteIcon fontSize='small' />
            </IconButton>
          </>
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
    handleDeleteClick,
    handleSave,
    open,
    selectedCustomer,
    setOpen,
    setSelectedCustomer,
    handleClose,
    isLoading: isLoading || isRefetching,
    imagePreview,
    handleAvatarChange
  }
}
