import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { DataGrid } from '@mui/x-data-grid'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  CircularProgress,
  Slide,
  Typography
} from '@mui/material'
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
  isLoading
}: ReturnType<typeof useCustomers>) => {
  return (
    <Grid container spacing={2} justifyContent='center'>
      <Grid item xs={12} md={8} lg={9}>
        <Paper sx={{ p: 4, overflowX: 'auto', px: 2, width: '100%' }}>
          <Typography variant='h6' gutterBottom>
            List of Customers
          </Typography>
          <DataGrid loading={isLoading} rows={customers} columns={columns} autoHeight />
        </Paper>
      </Grid>

      <Dialog open={open} onClose={handleClose} TransitionComponent={Slide} transitionDuration={500}>
        <DialogTitle>Edit Customer</DialogTitle>
        <DialogContent>
          <Formik initialValues={selectedCustomer!} validationSchema={validationSchema} onSubmit={handleSave}>
            {({ errors, touched, isSubmitting }) => (
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
                  <Button fullWidth onClick={handleClose} color='primary' variant='outlined' disabled={isSubmitting}>
                    Cancel
                  </Button>
                  <Button fullWidth type='submit' color='primary' variant='contained' disabled={isSubmitting}>
                    Save
                  </Button>
                  {isSubmitting && <CircularProgress size={24} sx={{ ml: 2 }} />}
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </Grid>
  )
}
