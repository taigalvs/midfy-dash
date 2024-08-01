import { CustomersUI } from './CustomersUI'
import { useCustomers } from './useCustomers'

export const CustomersPage = () => {
  const props = useCustomers()
  return <CustomersUI {...props} />
}
