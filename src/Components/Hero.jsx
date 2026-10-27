import {
  Box,
  Button,
  Card,
  CardMedia,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import RecyclingRoundedIcon from "@mui/icons-material/RecyclingRounded";
import heroImage from "../assets/hero_1.png";


// const HERO_IMAGE =
//   "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80";

export default function Hero() {
  return (
    <Box component="section" className="flex min-h-screen items-center bg-[#f8f9ff] px-18">
      <Container maxWidth="lg" className="px-12 py-12 md:px-12 lg:px-12">
        <Grid container spacing={6} alignItems="center">
          {/* ============ 1 ============ */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Stack alignItems="flex-start">
              <Chip
                size="small"
                label="Spring Living Collection 2025"
                icon={
                  <Box
                    component="span"
                    className="ml-2 inline-block h-2 w-2 rounded-full bg-[#0f6b5a]"
                  />
                }
                className="bg-[#e8edfb] text-xs font-medium text-[#0f6b5a] [&_.MuiChip-label]:pl-2"
              />

              <Typography
                variant="h1"
                className="mt-6 text-5xl font-bold leading-[1.1] tracking-tight text-[#1b2233] md:text-6xl"
              >
                Thoughtful objects for modern daily living
              </Typography>

              <Typography
                variant="body1"
                className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600"
              >
                Engineered with purposeful restraint and circular materials.
                Elevate your everyday rituals with timeless, tactile essentials
                built to endure.
              </Typography>

              <Stack direction="row" className="mt-8 flex-wrap gap-3">
                <Button
                  variant="contained"
                  disableElevation
                  endIcon={<ArrowForwardIcon fontSize="small" />}
                  className="rounded-xl bg-linear-to-b from-[#2f8573] to-[#1d6b5a] px-6 py-3 font-semibold normal-case text-white hover:brightness-110"
                >
                  Explore Products
                </Button>

                <Button
                  variant="contained"
                  disableElevation
                  endIcon={<MenuBookOutlinedIcon fontSize="small" />}
                  className="rounded-xl bg-[#eef0fb] px-6 py-3 font-semibold normal-case text-[#1b2233] hover:bg-[#e3e7f7]"
                >
                  Our Story
                </Button>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                className="mt-10 flex-wrap gap-x-4 gap-y-2"
              >
                <Stack direction="row" alignItems="center" className="gap-2">
                  <VerifiedRoundedIcon fontSize="small" className="text-[#0f6b5a]" />
                  <Typography variant="body2" className="text-slate-600">
                    Certified B Corp
                  </Typography>
                </Stack>

                <Box component="span" className="h-1.5 w-1.5 rounded-full bg-slate-300" />

                <Stack direction="row" alignItems="center" className="gap-2">
                  <RecyclingRoundedIcon fontSize="small" className="text-[#0f6b5a]" />
                  <Typography variant="body2" className="text-slate-600">
                    100% Recyclable Packaging
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          {/* ============ 2 ============ */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Card
              elevation={0}
              className="relative mx-auto h-105 max-w-md rounded-2xl shadow-xl md:h-127.5 lg:mr-0! lg:ml-auto!"
            >
              <CardMedia
                component="img"
                image={heroImage}
                alt="The Terra Vessel Series teapot"
                className="h-full w-full object-cover"
              />

              <Paper
                elevation={0}
                className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl bg-white/95 px-4 py-3 backdrop-blur"
              >
                <Box>
                  <Typography
                    variant="caption"
                    className="block text-[10px] font-medium uppercase tracking-wider text-slate-500"
                  >
                    Featured Release
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className="font-semibold text-[#1b2233]"
                  >
                    The Terra Vessel Series
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  component="span"
                  className="font-bold text-[#0f6b5a]"
                >
                  $84.00
                </Typography>
              </Paper>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}