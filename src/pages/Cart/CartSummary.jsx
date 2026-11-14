
import { Divider, Typography,Box } from '@mui/material';
import { Button } from '@mui/material';
export default function CartSummary({total}) {
  return (
    <paper>
        <Typography variant="h6" sx={{ mb: 2 }}>Order Summary</Typography>
       
        <Divider/>
        <Box>
             <Typography variant="body1">
          Total: ${total.toFixed(2)}
        </Typography>
        </Box>
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}></Button>
    </paper>
  )
}
