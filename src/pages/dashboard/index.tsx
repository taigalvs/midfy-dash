import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { Cards } from '@/components/organisms'

export function DashboardHome() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240
          }}
        >
          <Cards.SummaryChart />
        </Paper>
      </Grid>

      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240
          }}
        >
          <Cards.Deposits />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Cards.RecentOrders />
        </Paper>
      </Grid>
    </Grid>
  )
}
