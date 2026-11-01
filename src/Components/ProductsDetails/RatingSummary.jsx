import { Box, Card, LinearProgress, Rating, Stack, Typography } from "@mui/material";
import { getRatingBreakdown } from "./utils";
import { starsClass } from "./styles";


export default function RatingSummary({ reviews, rate }) {
  const breakdown = getRatingBreakdown(reviews);

  return (
    <Card variant="outlined" className="rounded-xl p-4 sm:p-5">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        className="gap-4 sm:gap-6"
      >
        <Box className="text-center sm:shrink-0">
          <Typography variant="h3" className="text-4xl font-bold text-[#1b2233] sm:text-5xl">
            {rate}
          </Typography>
          <Rating value={rate} precision={0.1} readOnly size="small" className={starsClass} />
          <Typography variant="caption" className="block text-slate-500">
            Based on {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
          </Typography>
        </Box>

        <Stack className="w-full min-w-0 grow gap-1.5">
          {breakdown.map((row) => (
            <Stack key={row.star} direction="row" alignItems="center" className="gap-2 sm:gap-3">
              <Typography variant="caption" className="w-10 shrink-0 text-slate-600">
                {row.star} Star
              </Typography>
              <LinearProgress
                variant="determinate"
                value={row.percent}
                className="h-2 grow rounded-full bg-slate-200 [&_.MuiLinearProgress-bar]:rounded-full [&_.MuiLinearProgress-bar]:bg-[#f5a623]"
              />
              <Typography variant="caption" className="w-9 shrink-0 text-right text-slate-500">
                {row.percent}%
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}