import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { DashboardHome } from '@/pages/dashboard'
import { Layout } from './pages/Layout'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: DashboardHome
      }
    ]
  }
])

export function Routes() {
  return <RouterProvider router={router} />
}
