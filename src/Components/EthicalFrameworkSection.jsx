import { Box, Stack, Chip, Typography ,Link} from '@mui/material';
import RecyclingOutlinedIcon from "@mui/icons-material/RecyclingOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import StatCard from './StatCard';

const stats = [
  {
    value: "100%",
    label: "Traceable",
    description:
      "Full transparency from origin farm to final finishing workshop.",
    color: "#006b5f",
  },
  {
    value: "0%",
    label: "Virgin Plastics",
    description: "100% post-consumer materials or plant-based composites only.",
    color: "#006b5f",
  },
  {
    value: "Life",
    label: "Guarantee",
    description: "Free hardware repairs and component replacement pledge.",
    color: "#a66a00",
  },
];

export default function EthicalFrameworkSection() {
  return (
    <Box className="w-full bg-page px-4 py-6">
      <Box className="relative w-full overflow-hidden rounded-2xl bg-section px-6 py-14">
        <Box className="pointer-events-none absolute -bottom-16 -right-10 h-72 w-72 bg-glow opacity-70 blur-3xl" />

        <Box className="relative flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <Stack className="max-w-120" spacing={0}>
            <Chip
              icon={
                <RecyclingOutlinedIcon className="text-[16px]! text-brand!" />
              }
              label="Ethical Framework"
              size="small"
              className="w-fit bg-white! text-xs! font-medium! text-brand!"
            />
            <Typography
              variant="h4"
              component="h2"
              className="mt-3 text-[32px] font-bold"
            >
              Sustainable craftsmanship from origin to hand
            </Typography>
            <Typography  component="p" className='mt-3 leading-6 text-slate-600'>
               We partner exclusively with multi-generational workshops that
              respect both artisan dignity and raw material ecology. Every
              TealMarket item is designed for effortless repair and eternal
              recyclability.
            </Typography>


            <Link href="#"
              underline="none" className='mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand'>
                   Read our 2026 Transparency Impact Report
                   <OpenInNewIcon className="text-[16px]!" />
            </Link>
          </Stack>
          

          <Stack
          direction={{xs:'column',sm:'row'}}
          spacing={2.5}
          className='w-full lg:w-auto lg:min-w-127.5'
          >
            {stats.map((item) =>(
               <StatCard key={item.label} {...item} />
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}