import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { DataGrid } from '@mui/x-data-grid'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useCustomers } from './useCustomers'

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório')
})

export const CustomersUI = ({
  customers,
  columns,
  handleSave,
  open,
  selectedCustomer,
  handleClose,
  hasData
}: ReturnType<typeof useCustomers>) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          {hasData ? (
            <DataGrid rows={customers} columns={columns} autoHeight />
          ) : (
            <Typography variant='h6' sx={{ textAlign: 'center' }}>
              Nenhum cliente cadastrado
            </Typography>
          )}
        </Paper>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Customer</DialogTitle>
        <DialogContent>
          {selectedCustomer && (
            <Formik initialValues={selectedCustomer} validationSchema={validationSchema} onSubmit={handleSave}>
              {({ errors, touched }) => (
                <Form>
                  <Field
                    as={TextField}
                    name='name'
                    label='Name'
                    fullWidth
                    margin='dense'
                    error={touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                  />
                  <DialogActions>
                    <Button onClick={handleClose} color='primary'>
                      Cancel
                    </Button>
                    <Button type='submit' color='primary'>
                      Save
                    </Button>
                  </DialogActions>
                </Form>
              )}
            </Formik>
          )}
        </DialogContent>
      </Dialog>
    </Grid>
  )
}
