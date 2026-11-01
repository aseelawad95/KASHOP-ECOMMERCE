import { useState } from "react";
import { Box, Card, Divider, Stack, Tab, Tabs, Typography } from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import ReviewsSection from "./ReviewsSection";
import { tabClass } from "./styles";

tabClass
export default function ProductTabs({ product }) {
  const [tab, setTab] = useState(0);
  const reviews = product.reviews ?? [];

  const details = [
    ["Price", `$${product.price}`],
    ["Rating", `${product.rate} / 5`],
    ["Available quantity", product.quantity],
    ["Reviews", reviews.length],
  ];

  return (
    <>
      <Tabs
        value={tab}
        onChange={(_, v) => setTab(v)}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        className="mt-6 border-b border-slate-200 sm:mt-8 [&_.MuiTabs-indicator]:bg-[#0f6b5a]"
      >
        <Tab
          icon={<ArticleOutlinedIcon fontSize="small" />}
          iconPosition="start"
          label="Details"
          className={tabClass}
        />
        <Tab
          icon={<RateReviewOutlinedIcon fontSize="small" />}
          iconPosition="start"
          label={`Customer Reviews (${reviews.length})`}
          className={tabClass}
        />
      </Tabs>

      {tab === 0 && (
        <Card variant="outlined" className="mt-4 rounded-xl px-4 py-2 sm:mt-6 md:px-7">
          {details.map(([key, value], i) => (
            <Box key={key}>
              {i > 0 && <Divider />}
              <Stack direction="row" justifyContent="space-between" className="gap-4 py-3">
                <Typography variant="body2" className="text-slate-500">
                  {key}
                </Typography>
                <Typography variant="body2" className="text-right font-semibold text-[#1b2233]">
                  {value}
                </Typography>
              </Stack>
            </Box>
          ))}
        </Card>
      )}

      {tab === 1 && <ReviewsSection reviews={reviews} rate={product.rate} />}
    </>
  );
}