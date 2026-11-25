import { Box, Paper, Typography ,InputBase, Button} from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) return;
    console.log("Subscribe:", email);
    setEmail("");
  };
  
  return (
    <Box className="w-full bg-page px-2 py-6 shadow-sm">
      <Paper
        elevation={0}
        className="mx-auto w-full max-w-200 rounded-2xl bg-white px-6 pb-9 pt-10 "
      >
        <Box className="mx-auto w-full max-w-200 rounded-2xl bg-white px-6 pb-9 pt-10 shadow-sm">
          <Box className="flex w-full flex-col items-center text-center">
            <MarkEmailReadOutlinedIcon className="text-[22px] text-brand" />

            <Typography
              variant="h4"
              component="h2"
              className="mt-2 text-[28px] font-bold leading-9 text-slate-900"
            >
              Join our member circle
            </Typography>

            <Typography
              component="p"
              className="mt-1 max-w-100 text-sm leading-5.5 text-slate-600"
            >
              Receive curated seasonal dispatches, intimate artisan interviews,
              and early access to numbered capsule editions.
            </Typography>
             <Box className='mt-6 w-full max-w-102.5 flex-col gap-1 sm:flex-row'>
                     <InputBase
                     type="email"
                     placeholder="Enter Your Email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     className="flex-1 rounded-lg bg-field"
                     inputProps={{
                      className:'h-9 px-4 py-0 text-sm placeholder:text-slate-500'
                     }}
                     />
                     <Button
                      variant="contained"
                      onClick={handleSubscribe}
                      disableElevation
                     className="h-9 min-w-27 rounded-lg bg-brand px-6 text-sm font-semibold normal-case">
                      Subscribe
                     </Button>
                  </Box>

              {/* Note */}
             <Typography 
             component='p'
             className="mt-3 text-[11px] font-semibold leading-4 text-slate-700">
              No spam. Unsubscribe with a single click anytime.
             </Typography>

          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
