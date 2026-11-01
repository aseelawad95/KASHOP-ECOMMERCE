import {
  Box,
  Button,
  Card,
  CardMedia,
  Chip,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import RecyclingRoundedIcon from "@mui/icons-material/RecyclingRounded";
import heroImage from "../assets/hero_1.png";

export default function Hero() {
  return (
        <Box
      component="section"
      className="w-full overflow-x-hidden bg-[#f8f9ff] bg-[radial-gradient(circle_at_100%_0%,#d6f1f8,transparent_35%)] px-3 pb-3 pt-[68px] sm:px-4 sm:pb-4 sm:pt-[76px] lg:px-5 lg:pb-5 lg:pt-[76px]"
    >
      <Box className="mx-auto w-full max-w-[1600px] rounded-2xl bg-white p-5 shadow-sm sm:p-8 lg:p-7">
        <Box className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_40%] lg:gap-x-12">
          
          <Stack className="min-w-0 items-center text-center lg:items-start lg:text-left">
            <Chip
              size="small"
              label="Spring Living Collection 2025"
              icon={
                <Box
                  component="span"
                  className="ml-2 inline-block h-2 w-2 rounded-full bg-[#0f6b5a]"
                />
              }
              className="max-w-full bg-[#e8edfb] text-xs font-medium text-[#0f6b5a] [&_.MuiChip-label]:pl-2"
            />

            <Typography
              variant="h1"
              className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-[#1b2233] sm:text-5xl lg:text-[clamp(2.25rem,3.6vw,3.75rem)]"
            >
              Thoughtful objects for <br className="hidden lg:block" />
              modern daily living
            </Typography>

            <Typography
              variant="body1"
              className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0"
            >
              Engineered with purposeful restraint and circular materials.
              Elevate your everyday rituals with timeless, tactile essentials
              built to endure.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              className="mt-6 w-full justify-center gap-2.5 sm:w-auto lg:justify-start"
            >
              <Button
                variant="contained"
                disableElevation
                endIcon={<ArrowForwardIcon fontSize="small" />}
                className="w-full rounded-lg bg-linear-to-b from-[#2f8573] to-[#1d6b5a] px-5 py-2.5 text-sm font-semibold normal-case text-white hover:brightness-110 sm:w-auto"
              >
                Explore Products
              </Button>

              <Button
                variant="contained"
                disableElevation
                endIcon={<MenuBookOutlinedIcon fontSize="small" />}
                className="w-full rounded-lg bg-[#eef0fb] px-5 py-2.5 text-sm font-semibold normal-case text-[#1b2233] hover:bg-[#e3e7f7] sm:w-auto"
              >
                Our Story
              </Button>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              className="mt-8 flex-wrap justify-center gap-x-4 gap-y-2 lg:justify-start"
            >
              <Stack direction="row" alignItems="center" className="gap-1.5">
                <VerifiedRoundedIcon fontSize="small" className="text-[#0f6b5a]" />
                <Typography variant="caption" className="text-slate-600">
                  Certified B Corp
                </Typography>
              </Stack>

              <Box
                component="span"
                className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block"
              />

              <Stack direction="row" alignItems="center" className="gap-1.5">
                <RecyclingRoundedIcon fontSize="small" className="text-[#0f6b5a]" />
                <Typography variant="caption" className="text-slate-600">
                  100% Recyclable Packaging
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          {/* ============ الصورة ============ */}
          <Card
            elevation={0}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm min-w-0 overflow-hidden rounded-2xl shadow-lg sm:max-w-md lg:mr-0! lg:ml-auto! lg:max-w-[520px]"
          >
            <CardMedia
              component="img"
              image={heroImage}
              alt="The Terra Vessel Series teapot"
              className="h-full w-full object-cover"
            />

            <Paper
              elevation={0}
              className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-xl bg-white/95 px-4 py-3 backdrop-blur"
            >
              <Box className="min-w-0 text-left">
                <Typography
                  variant="caption"
                  className="block text-[10px] font-medium uppercase tracking-wider text-slate-500"
                >
                  Featured Release
                </Typography>
                <Typography
                  variant="subtitle1"
                  className="truncate text-sm font-semibold text-[#1b2233] sm:text-base"
                >
                  The Terra Vessel Series
                </Typography>
              </Box>
              <Typography
                variant="h6"
                component="span"
                className="shrink-0 text-base font-bold text-[#0f6b5a] sm:text-lg"
              >
                $84.00
              </Typography>
            </Paper>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}