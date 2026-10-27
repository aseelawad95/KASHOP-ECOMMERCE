import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonIcon from "@mui/icons-material/Person";

export default function Navbar() {
  return (
    <Box
      component="nav"
      className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md"
    >
      <Box className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 lg:px-8">
        {/* يسار: اللوجو + الروابط */}
        <Box className="flex items-center gap-6">
          <a href="/" className="text-xl font-bold text-[#00685F]">
            TealMarket
          </a>

          <Box className="hidden items-center gap-2 md:flex">
            <Button
              href="/"
              disableElevation
              className="rounded-lg bg-indigo-100 px-4 py-2 text-sm font-semibold normal-case text-slate-900"
            >
              Home
            </Button>
            <Button
              href="/products"
              className="rounded-lg px-4 py-2 text-sm font-medium normal-case text-slate-600 hover:bg-gray-100"
            >
              Products
            </Button>
          </Box>
        </Box>

        {/* نص: البحث */}
        <Box className="hidden w-full max-w-md items-center gap-3 rounded-xl bg-white px-4 py-2 shadow-sm md:flex">
          <SearchIcon className="text-slate-500" fontSize="small" />
          <InputBase
            placeholder="Search products, categories..."
            className="w-full text-sm text-slate-900"
          />
        </Box>

        <Box className="flex items-center gap-4">
          <IconButton className="text-slate-800">
            <Badge
              badgeContent={3}
              classes={{
                badge: "!bg-[#00685F] !text-white !text-[10px] !font-semibold",
              }}
            >
              <ShoppingBagOutlinedIcon fontSize="small" />
            </Badge>
          </IconButton>

          <Button
            href="/login"
            className="text-sm font-semibold normal-case text-[#00685F]"
          >
            Sign In
          </Button>

          <Avatar className="h-9 w-9 bg-[#00685F]">
            <PersonIcon fontSize="small" />
          </Avatar>
        </Box>
      </Box>
    </Box>
  );
}