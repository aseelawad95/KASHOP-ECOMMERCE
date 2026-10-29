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
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { loginSchema } from '../../Validations/authSchemas';

const inputClass =
  'rounded-lg bg-[#f5f6fe] text-sm [&_fieldset]:border-0 [&_input]:py-3 ' +
  'focus-within:ring-2 focus-within:ring-[#00695c]/40 ' +
  '[&.Mui-error]:ring-1 [&.Mui-error]:ring-red-400';

const labelClass = 'mb-1.5 block text-sm font-medium text-slate-700';

const socialBtnClass =
  'rounded-lg bg-[#eef0fb] py-2.5 text-sm font-medium normal-case text-slate-700 ' +
  'shadow-none hover:bg-[#e2e6f8]';

export default function Login() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    setServerError(null);
    try {
      await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Login', data);
      navigate('/');
    } catch (error) {
      setServerError(
        error.response?.data?.message || 'An error occurred while logging in.'
      );
    }
  };

  return (
    <Box
      component="main"
      className="flex min-h-screen items-center justify-center bg-[#f8f8ff] p-4"
    >
      <Paper
        elevation={0}
        className="w-full max-w-sm overflow-hidden rounded-2xl shadow-xl shadow-slate-200/70"
      >
        <Box className="p-8">
          {/* Header */}
          <Box className="flex flex-col items-center">
            <Box className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00695c]">
              <ShoppingBagOutlinedIcon fontSize="small" className="text-white" />
            </Box>

            <Box className="mt-2 flex items-center gap-2">
              <Typography component="span" className="text-sm font-bold text-[#00695c]">
                TealMarket
              </Typography>
              <Box
                component="span"
                className="rounded bg-teal-100 px-2 py-0.5 text-[10px] font-bold tracking-wider text-teal-700"
              >
                STORE
              </Box>
            </Box>

            <Typography component="h1" className="mt-5 text-2xl font-bold text-slate-900">
              Welcome Back
            </Typography>
            <Typography className="mb-6 mt-1 text-center text-sm text-slate-500">
              Sign in to access your orders and saved wishlist
            </Typography>
          </Box>

          {serverError && (
            <Alert severity="error" className="mb-4">
              {serverError}
            </Alert>
          )}

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Box className="mb-4">
              <Typography component="label" htmlFor="email" className={labelClass}>
                Email address
              </Typography>
              <TextField
                id="email"
                type="email"
                fullWidth
                placeholder="name@example.com"
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
                slotProps={{
                  input: {
                    className: inputClass,
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon fontSize="small" className="text-slate-500" />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>

            <Box>
              <Typography component="label" htmlFor="password" className={labelClass}>
                Password
              </Typography>
              <TextField
                id="password"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                placeholder="Enter your password"
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password?.message}
                slotProps={{
                  input: {
                    className: inputClass,
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon fontSize="small" className="text-slate-500" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          size="small"
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword((prev) => !prev)}
                        >
                          {showPassword ? (
                            <VisibilityOffOutlinedIcon fontSize="small" />
                          ) : (
                            <VisibilityOutlinedIcon fontSize="small" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>

            {/* Remember me + Forgot password */}
            <Box className="my-4 flex items-center justify-between">
              <FormControlLabel
                className="-ml-2"
                control={
                  <Checkbox
                    size="small"
                    className="text-slate-400 [&.Mui-checked]:text-[#00695c] px-2"
                  />
                }
                label={
                  <Typography className="text-sm text-slate-600">Remember me</Typography>
                }
              />
              <Link
                component={RouterLink}
                to="/forgotpassword"
                underline="none"
                className="text-sm font-semibold text-[#00695c] hover:underline"
              >
                Forgot password?
              </Link>
            </Box>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isSubmitting}
              endIcon={<ArrowForwardIcon fontSize="small" />}
              className="rounded-lg bg-[#00695c] py-3 text-sm font-semibold normal-case shadow-none text-white hover:bg-[#004d40] hover:shadow-none"
            >
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </Button>

            <Divider className="my-6 text-[10px] font-semibold tracking-widest text-slate-400">
              OR CONTINUE WITH
            </Divider>

            <Box className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                color="inherit"
                startIcon={<GoogleIcon fontSize="small" className="text-[#4285f4]" />}
                className={socialBtnClass}
              >
                Google
              </Button>
              <Button
                type="button"
                color="inherit"
                startIcon={<AppleIcon fontSize="small" className="text-slate-900" />}
                className={socialBtnClass}
              >
                Apple
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Footer */}
        <Box className="border-t border-slate-100 bg-slate-50 py-4 text-center">
          <Typography className="text-sm text-slate-600">
            Don't have an account?{' '}
            <Link
              component={RouterLink}
              to="/register"
              underline="none"
              className="font-semibold text-[#00695c] hover:underline"
            >
              Register
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}