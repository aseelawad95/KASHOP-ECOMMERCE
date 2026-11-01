import { Grid, Stack, Typography } from "@mui/material";
import RatingSummary from "./RatingSummary";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

export default function ReviewsSection({ reviews, rate }) {
  const handleSubmitReview = (review) => {
    // TODO: ابعت الريفيو للـ API (useMutation) وبعدها اعمل invalidate للـ product query
    console.log("new review", review);
  };

  return (
    <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} className="mt-1">
      <Grid size={{ xs: 12, md: 7 }} className="min-w-0">
        <Stack className="gap-3 sm:gap-4">
          <RatingSummary reviews={reviews} rate={rate} />

          {reviews.length === 0 ? (
            <Typography variant="body2" className="text-slate-500">
              No reviews yet. Be the first to review this product.
            </Typography>
          ) : (
            reviews.map((review, i) => (
              <ReviewCard key={`${review.userName}-${review.createdAt}-${i}`} {...review} />
            ))
          )}
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, md: 5 }} className="min-w-0">
        <ReviewForm onSubmit={handleSubmitReview} />
      </Grid>
    </Grid>
  );
}