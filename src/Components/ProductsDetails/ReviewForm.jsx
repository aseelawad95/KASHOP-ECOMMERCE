import { useState } from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { fieldClass, primaryBtn, starsClass } from "./styles";

export default function ReviewForm({ onSubmit }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [certified, setCertified] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    onSubmit?.({ rating, comment: comment.trim() });
    setComment("");
    setRating(5);
  };

  return (
    <Card
      component="form"
      onSubmit={handleSubmit}
      variant="outlined"
      className="rounded-xl p-4 sm:p-5 md:sticky md:top-6 md:p-6"
    >
      <Stack className="gap-4">
        <Box>
          <Typography variant="h3" className="text-lg font-bold text-[#1b2233]">
            Write a Review
          </Typography>
          <Typography variant="caption" className="text-slate-500">
            Share your experience with other customers.
          </Typography>
        </Box>

        <Box>
          <Typography
            component="label"
            variant="body2"
            className="mb-1.5 block font-semibold text-[#1b2233]"
          >
            Your Rating
          </Typography>
          <Rating
            value={rating}
            onChange={(_, v) => setRating(v ?? 1)}
            className={starsClass}
          />
        </Box>

        <Box>
          <Typography
            component="label"
            htmlFor="review-comment"
            variant="body2"
            className="mb-1.5 block font-semibold text-[#1b2233]"
          >
            Your Review
          </Typography>
          <TextField
            id="review-comment"
            fullWidth
            multiline
            minRows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="What did you like or dislike about this product?"
            className={fieldClass}
          />
        </Box>

        <FormControlLabel
          className="mx-0 items-start"
          control={
            <Checkbox
              size="small"
              checked={certified}
              onChange={(e) => setCertified(e.target.checked)}
              className="pt-0.5 [&.Mui-checked]:text-[#0f6b5a]"
            />
          }
          label={
            <Typography variant="caption" className="text-slate-600">
              I certify that this feedback is based on my genuine experience.
            </Typography>
          }
        />

        <Button
          type="submit"
          variant="contained"
          disableElevation
          fullWidth
          disabled={!certified || !comment.trim()}
          startIcon={<SendOutlinedIcon fontSize="small" />}
          className={primaryBtn}
        >
          Submit Review
        </Button>
      </Stack>
    </Card>
  );
}