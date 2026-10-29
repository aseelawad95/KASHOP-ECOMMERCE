import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import { forgotPasswordSchema } from '../../Validations/authSchemas';

const inputClass =
  'rounded-lg bg-white text-sm shadow-sm ring-1 ring-slate-100 ' +
  '[&_fieldset]:border-0 [&_input]:py-3 ' +
  'focus-within:ring-2 focus-within:ring-[#00695c]/40 ' +
  '[&.Mui-error]:ring-1 [&.Mui-error]:ring-red-400';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    setServerError(null);
    try {
      await axios.post(
        'https://knowledgeshop.runasp.net/api/auth/Account/ForgotPassword',
        data
      );
      navigate('/verify-code', { state: { email: data.email } });
    } catch (error) {
      setServerError(
        error.response?.data?.message || 'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <Box
      component="main"
      className="flex min-h-dvh flex-col items-center justify-center gap-5 bg-[#f8f8ff] p-4"
    >
      <Paper
        elevation={0}
        className="w-full max-w-md rounded-2xl p-6 shadow-xl shadow-slate-200/70 sm:p-8"
      >
        {/* Header */}
        <Box className="flex flex-col items-center">
          <Box className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#dff1ee]">
            <MarkEmailReadOutlinedIcon className="text-[#00695c]" />
          </Box>

          <Typography component="h1" className="mt-5 text-2xl font-bold text-slate-900">
            Reset Your Password
          </Typography>
          <Typography className="mb-6 mt-2 text-center text-base leading-relaxed text-slate-600">
            Enter your registered email address and we will send you a 6-digit
            verification code to recover your account.
          </Typography>
        </Box>

        {serverError && (
          <Alert severity="error" className="mb-4">
            {serverError}
          </Alert>
        )}

        {/* Form */}
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Box className="mb-1.5 flex items-center justify-between">
            <Typography
              component="label"
              htmlFor="email"
              className="text-sm font-semibold text-slate-800"
            >
              Email Address
            </Typography>
            <Typography component="span" className="text-sm text-slate-500">
              Required
            </Typography>
          </Box>

          <TextField
            id="email"
            type="email"
            fullWidth
            placeholder="name@example.com"
            {...register('email')}
            error={!!errors.email}
            slotProps={{
              input: {
                className: inputClass,
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon fontSize="small" className="text-slate-700" />
                  </InputAdornment>
                ),
              },
            }}
          />

          {errors.email ? (
            <Typography className="mt-2 flex items-center gap-1.5 text-xs text-red-500">
              <InfoOutlinedIcon sx={{ fontSize: 14 }} />
              {errors.email.message}
            </Typography>
          ) : (
            <Typography className="mt-2 flex items-center gap-1.5 text-xs text-slate-600">
              <InfoOutlinedIcon sx={{ fontSize: 14 }} />
              Enter the email associated with your Aura Store profile
            </Typography>
          )}

          {/* Info box */}
          <Box className="mt-6 flex items-start gap-3 rounded-lg bg-[#eef1fd] p-4">
            <VerifiedUserOutlinedIcon
              sx={{ fontSize: 18 }}
              className="mt-0.5 shrink-0 text-[#00695c]"
            />
            <Typography className="text-xs leading-relaxed text-slate-700">
              We'll never share your email address. Verification codes expire
              automatically after 10 minutes.
            </Typography>
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isSubmitting}
            endIcon={<ArrowForwardIcon fontSize="small" />}
            className="mt-6 rounded-lg bg-[#00695c] py-3 text-sm font-semibold normal-case text-white shadow-none hover:bg-[#004d40] hover:shadow-none"
          >
            {isSubmitting ? 'Sending...' : 'Send Verification Code'}
          </Button>

          <Link
            component={RouterLink}
            to="/login"
            underline="none"
            className="mt-8 flex items-center justify-center gap-1.5 text-sm font-semibold text-[#00695c] hover:underline"
          >
            <ArrowBackIcon sx={{ fontSize: 16 }} />
            Back to Sign In
          </Link>

          {/* Trust badges */}
          <Box className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Box
              component="span"
              className="flex items-center gap-1 text-[11px] font-medium text-slate-700"
            >
              <LockOutlinedIcon sx={{ fontSize: 14 }} className="text-[#00695c]" />
              256-Bit SSL Protection
            </Box>
            <Box component="span" className="h-1 w-1 rounded-full bg-slate-300" />
            <Box
              component="span"
              className="flex items-center gap-1 text-[11px] font-medium text-slate-700"
            >
              <GppGoodOutlinedIcon sx={{ fontSize: 14 }} className="text-[#00695c]" />
              Buyer Protection
            </Box>
          </Box>
        </Box>
      </Paper>

      {/* Under card */}
      <Typography className="flex items-center gap-1.5 text-xs text-slate-600">
        <LockOutlinedIcon sx={{ fontSize: 14 }} />
        256-bit encrypted secure authentication
      </Typography>
    </Box>
  );
}