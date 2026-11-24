import { Paper, Typography } from "@mui/material";

export default function StatCard({ value, label, description, color }) {
  return (
    <Paper
      elevation={0}
      className="flex-1 rounded-xl bg-white px-4 py-6 text-center shadow-md"
    >
      <Typography
        component="p"
        className="text-[40px] font-bold leading-none"
        sx={{ color }}
      >
        {value}
      </Typography>

      <Typography
        component="p"
        className="mt-3 text-base font-semibold text-slate-900"
      >
        {label}
      </Typography>

      <Typography
        component="p"
        className="mt-1 text-xs leading-4 text-slate-600"
      >
        {description}
      </Typography>
    </Paper>
  );
}