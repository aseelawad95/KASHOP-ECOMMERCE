import { Avatar, Box, Card, Rating, Stack, Typography } from "@mui/material";
import { formatDate, getInitials } from "./utils";
import { starsClass } from "./styles";

export default function ReviewCard({ userName, createdAt, rating, comment }) {
  return (
    <Card variant="outlined" className="rounded-xl p-4 md:p-5">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        className="flex-wrap gap-2 sm:gap-3"
      >
        <Stack direction="row" alignItems="center" className="min-w-0 gap-3">
          <Avatar className="h-10 w-10 shrink-0 bg-[#d7ece6] text-sm font-semibold text-[#0f6b5a]">
            {getInitials(userName)}
          </Avatar>
          <Box className="min-w-0">
            <Typography variant="subtitle2" className="truncate font-bold text-[#1b2233]">
              {userName}
            </Typography>
            <Typography variant="caption" className="block text-slate-500">
              {formatDate(createdAt)}
            </Typography>
          </Box>
        </Stack>
        <Rating value={rating} readOnly size="small" className={starsClass} />
      </Stack>

      <Typography
        variant="body2"
        className="mt-3 wrap-break-word leading-relaxed text-slate-700"
      >
        {comment}
      </Typography>
    </Card>
  );
}