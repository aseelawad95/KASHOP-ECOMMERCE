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
import FormHelperText from '@mui/material/FormHelperText';
import LinearProgress from '@mui/material/LinearProgress';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LoginIcon from '@mui/icons-material/Login';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { registerSchema } from '../../Validations/authSchemas';

const iconClass = 'text-slate-500';

const strengthBarClasses = [
  '[&_.MuiLinearProgress-bar]:bg-red-500',
  '[&_.MuiLinearProgress-bar]:bg-orange-400',
  '[&_.MuiLinearProgress-bar]:bg-yellow-500',
  '[&_.MuiLinearProgress-bar]:bg-emerald-600',
];
const strengthTextClasses = [
  'text-red-500',
  'text-orange-500',
  'text-yellow-600',
  'text-emerald-600',
];
const strengthLabels = ['Too weak', 'Weak', 'Good', 'Strong'];

function Field({ id, label, icon, placeholder, type = 'text', error, endAdornment, registerProps }) {
  return (
    <Box>
      <Box
        className={
          'rounded-lg bg-[#f1f2fd] px-3 pb-1.5 pt-2 focus-within:ring-2 focus-within:ring-[#00695c]/40 ' +
          (error ? 'ring-1 ring-red-400' : '')
        }
      >
        <Typography
          component="label"
          htmlFor={id}
          className="block text-[11px] font-semibold text-slate-700"
        >
          {label}
        </Typography>
        <TextField
          id={id}
          type={type}
          variant="standard"
          fullWidth
          placeholder={placeholder}
          {...registerProps}
          error={!!error}
          slotProps={{
            input: {
              disableUnderline: true,
              className: 'text-sm',
              startAdornment: (
                <InputAdornment position="start" className="mr-1.5">
                  {icon}
                </InputAdornment>
              ),
              endAdornment,
            },
            htmlInput: { className: 'py-0.5' },
          }}
        />
      </Box>
      {error && <FormHelperText error className="mx-0 mt-1">{error}</FormHelperText>}
    </Box>
  );
}

export default function Register() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onBlur',
  });

  const password = watch('password') || '';
  const rules = [
    { label: 'Min 6 chars', ok: password.length >= 6 },
    { label: 'Uppercase letter', ok: /[A-Z]/.test(password) },
    { label: 'Number', ok: /\d/.test(password) },
  ];
  const score = rules.filter((r) => r.ok).length;

  const onSubmit = async (data) => {
    setServerError(null);

    const { confirmPassword, ...payload } = data;
    if (confirmPassword !== payload.password) {
      setError('confirmPassword', { type: 'validate', message: 'Passwords do not match' });
      return;
    }

    try {
      await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Register', payload);
      navigate('/login');
    } catch (error) {
      const resData = error.response?.data;
      console.log('Register error:', resData);

      let message = 'An error occurred while registering.';

      if (typeof resData === 'string') {
        message = resData;
      } else if (resData) {
        const details = [];

        if (Array.isArray(resData.errors)) {
          resData.errors.forEach((e) =>
            details.push(typeof e === 'string' ? e : e.description || e.Description || e.code)
          );
        } else if (resData.errors && typeof resData.errors === 'object') {
          Object.values(resData.errors).flat().forEach((e) => details.push(e));
        }

        message = [resData.message, ...details].filter(Boolean).join(' - ') || message;
      }

      setServerError(message);
    }
  };

  return (
    <Box
      component="main"
      className="flex min-h-dvh items-center justify-center bg-[#f8f8ff] p-4"
    >
      <Paper
        elevation={0}
        className="w-full max-w-md overflow-hidden rounded-2xl shadow-xl shadow-slate-200/70"
      >
        <Box className="p-6 sm:p-8">
          {/* Header */}
          <Box className="flex flex-col items-center">
            <Box className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00695c]">
              <ShoppingBagOutlinedIcon fontSize="small" className="text-white" />
            </Box>

            <Typography className="mt-3 text-base font-bold text-slate-900">
              Teal{' '}
              <Box component="span" className="text-[#00695c]">
                Market
              </Box>
            </Typography>

            <Typography component="h1" className="mt-1 text-2xl font-bold text-slate-900">
              Create an Account
            </Typography>
            <Typography className="mb-6 mt-1 max-w-xs text-center text-sm text-slate-500">
              Join TealMarket for fast ordering and personalized benefits
            </Typography>
          </Box>

          {serverError && (
            <Alert severity="error" className="mb-4">
              {serverError}
            </Alert>
          )}

          {/* Form */}
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-4"
          >
            <Field
              id="fullName"
              label="Full Name *"
              // placeholder="Jane Doe"
              icon={<PersonOutlineIcon fontSize="small" className={iconClass} />}
              registerProps={register('fullName')}
              error={errors.fullName?.message}
            />

            <Field
              id="userName"
              label="User Name *"
              // placeholder="jane.doe"
              icon={<AlternateEmailIcon fontSize="small" className={iconClass} />}
              registerProps={register('userName')}
              error={errors.userName?.message}
            />

            <Field
              id="email"
              type="email"
              label="Email Address *"
              // placeholder="jane.doe@example.com"
              icon={<EmailOutlinedIcon fontSize="small" className={iconClass} />}
              registerProps={register('email')}
              error={errors.email?.message}
            />

            <Field
              id="phoneNumber"
              type="tel"
              label="Phone Number"
              // placeholder="+1 (555) 000-0000"
              icon={<PhoneOutlinedIcon fontSize="small" className={iconClass} />}
              registerProps={register('phoneNumber')}
              error={errors.phoneNumber?.message}
            />

            {/* Password + strength meter */}
            <Box>
              <Field
                id="password"
                type={showPassword ? 'text' : 'password'}
                label="Password *"
                placeholder="••••••••"
                icon={<LockOutlinedIcon fontSize="small" className={iconClass} />}
                registerProps={register('password')}
                error={errors.password?.message}
                endAdornment={
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
                }
              />

              <Box className="mt-2 flex items-center justify-between px-1">
                <Typography component="span" className="text-[11px] font-semibold text-slate-700">
                  Security Strength
                </Typography>
                <Typography
                  component="span"
                  className={`text-[11px] font-medium ${strengthTextClasses[score]}`}
                >
                  {strengthLabels[score]}
                </Typography>
              </Box>

              <LinearProgress
                variant="determinate"
                value={(score / 3) * 100}
                className={`mx-1 mt-1.5 h-1 rounded-full bg-slate-200 ${strengthBarClasses[score]}`}
              />

              <Box className="mt-2 flex flex-wrap gap-x-4 gap-y-1 px-1">
                {rules.map((rule) => (
                  <Box
                    key={rule.label}
                    component="span"
                    className={`flex items-center gap-1 text-[11px] ${
                      rule.ok ? 'text-emerald-600' : 'text-slate-500'
                    }`}
                  >
                    {rule.ok ? (
                      <CheckCircleIcon sx={{ fontSize: 12 }} />
                    ) : (
                      <RadioButtonUncheckedIcon sx={{ fontSize: 12 }} />
                    )}
                    {rule.label}
                  </Box>
                ))}
              </Box>
            </Box>

            <Field
              id="confirmPassword"
              type={showConfirm ? 'text' : 'password'}
              label="Confirm Password *"
              placeholder="••••••••"
              icon={<VerifiedUserOutlinedIcon fontSize="small" className={iconClass} />}
              registerProps={register('confirmPassword')}
              error={errors.confirmPassword?.message}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    size="small"
                    aria-label="toggle confirm password visibility"
                    onClick={() => setShowConfirm((prev) => !prev)}
                  >
                    {showConfirm ? (
                      <VisibilityOffOutlinedIcon fontSize="small" />
                    ) : (
                      <VisibilityOutlinedIcon fontSize="small" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />

            {/* Terms */}
            <FormControlLabel
              className="-ml-2 mt-1"
              control={
                <Checkbox
                  size="small"
                  className="text-slate-400 [&.Mui-checked]:text-[#00695c]"
                />
              }
              label={
                <Typography className="text-xs text-slate-600 px-2">
                  I agree to the{' '}
                  <Link href="#" underline="none" className="font-bold text-[#00695c] hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="#" underline="none" className="font-bold text-[#00695c] hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </Typography>
              }
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isSubmitting}
              endIcon={<ArrowForwardIcon fontSize="small" />}
              className="rounded-lg bg-linear-to-r from-[#00695c] to-[#00897b] py-3 text-sm font-semibold normal-case shadow-none text-white hover:from-[#004d40] hover:to-[#00695c] hover:shadow-none"
            >
              {isSubmitting ? 'Creating account...' : 'Create Account'}
            </Button>
          </Box>
        </Box>

        {/* Footer */}
        <Box className="border-t border-slate-100 bg-slate-50 py-4 text-center">
          <Typography className="text-sm text-slate-600">
            Already have an account?{' '}
            <Link
              component={RouterLink}
              to="/login"
              underline="none"
              className="inline-flex items-center gap-1 font-semibold text-[#00695c] hover:underline"
            >
              Login
              <LoginIcon sx={{ fontSize: 14 }} />
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}