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
  Typography,
  Avatar,
  IconButton,
  Box,
  FormControl,
  FormLabel
} from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import { Formik, Form, Field, FieldProps } from 'formik'
import * as Yup from 'yup'
import { useCustomers } from './useCustomers'

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  avatar: Yup.mixed().required('Avatar é obrigatório')
})

export const CustomersUI = ({
  customers,
  columns,
  handleSave,
  open,
  selectedCustomer,
  handleClose,
  isLoading,
  imagePreview,
  handleAvatarChange
}: ReturnType<typeof useCustomers>) => {
  return (
    <Grid container spacing={2} justifyContent='center'>
      <Grid item xs={12} md={8} lg={9}>
        <Paper sx={{ p: 4, overflowX: 'auto', px: 2, width: '100%' }}>
          <Typography variant='h6' gutterBottom fontWeight={600}>
            Customers List
          </Typography>
          <DataGrid loading={isLoading} rows={customers} columns={columns} autoHeight />
        </Paper>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Slide}
        transitionDuration={500}
        maxWidth='xs'
        fullWidth
      >
        <DialogTitle>Edit Customer</DialogTitle>
        <DialogContent>
          <Formik initialValues={selectedCustomer!} validationSchema={validationSchema} onSubmit={handleSave}>
            {({ errors, touched, isSubmitting, setFieldValue }) => (
              <Form>
                <Box>
                  <FormControl fullWidth>
                    <FormLabel>Profile Picture</FormLabel>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src={imagePreview} sx={{ width: 56, height: 56 }} />
                      <IconButton color='primary' component='label'>
                        <PhotoCamera />
                        <input
                          type='file'
                          accept='image/*'
                          hidden
                          onChange={e => handleAvatarChange(e, setFieldValue)}
                        />
                      </IconButton>
                    </Box>
                  </FormControl>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Field name='name'>
                    {({ field }: FieldProps) => (
                      <TextField
                        {...field}
                        label='Name'
                        fullWidth
                        margin='dense'
                        error={touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                      />
                    )}
                  </Field>
                </Box>
                <DialogActions sx={{ mt: 3 }}>
                  <Button onClick={handleClose} color='primary' variant='outlined' disabled={isSubmitting}>
                    Cancel
                  </Button>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button type='submit' color='primary' variant='contained' disabled={isSubmitting}>
                      Save
                    </Button>
                    {isSubmitting && <CircularProgress size={24} sx={{ ml: 2 }} />}
                  </Box>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </Grid>
  )
}
