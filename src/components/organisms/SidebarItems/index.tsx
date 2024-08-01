import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PeopleIcon from '@mui/icons-material/People'
import BarChartIcon from '@mui/icons-material/BarChart'
import LayersIcon from '@mui/icons-material/Layers'
import AssignmentIcon from '@mui/icons-material/Assignment'
import { Divider } from '@mui/material'

export default function SidebarItems() {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <div>
        <ListItemButton onClick={() => navigate('/')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary='Dashboard' />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/orders')}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary='Orders' />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/customers')}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary='Customers' />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/reports')}>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary='Reports' />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/integrations')}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary='Integrations' />
        </ListItemButton>
      </div>
      <Divider sx={{ my: 1 }} />
      <div>
        <ListSubheader component='div' inset>
          Saved reports
        </ListSubheader>
        <ListItemButton onClick={() => navigate('/current-month')}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary='Current month' />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/last-quarter')}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary='Last quarter' />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/year-end-sale')}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary='Year-end sale' />
        </ListItemButton>
      </div>
    </React.Fragment>
  )
}
