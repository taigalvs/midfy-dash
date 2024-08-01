import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { DashboardHome } from '@/pages/dashboard'
import { Layout } from './pages/Layout'
import { CustomersPage } from './pages/dashboard/customers'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: DashboardHome
      },
      {
        path: '/customers',
        Component: CustomersPage
      }
    ]
  }
])

export function Routes() {
  return <RouterProvider router={router} />
}
