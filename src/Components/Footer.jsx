import {
  Box,
  Container,
  Grid,
  Typography,
  ListItem,
  List,
  Link,
} from "@mui/material";

export default function Footer() {
  const columns = [
    {
      title: "Shop",
      links: ["All Products", "Featured Collections", "New Arrivals"],
    },
    {
      title: "Support",
      links: ["Help Center", "Order Tracking", "Returns & Exchanges"],
    },
    {
      title: "Account",
      links: ["Sign In", "Create Account", "Preferences"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press & Media"],
    },
  ];

  return (
    <Box component="footer" className="w-full bg-white font-sans">
      <Container className="px-8 py-8">
        <Grid
          container
          columnSpacing={{ xs: 2, sm: 4, md: 8 }}
          rowSpacing={{ xs: 4, md: 4 }}
        >
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography
              component="h2"
              className="mb-3 text-[15px] font-bold leading-none text-[#0f6b5c]"
            >
              TealMarket
            </Typography>
            <Typography
              component="p"
              className="max-w-47.5 text-xs leading-[1.45] text-gray-700"
            >
              Thoughtfully curated essentials designed with minimalism, clarity,
              and dependable quality.
            </Typography>
          </Grid>

          {/* Link columns */}
          {columns.map((col) => (
            <Grid key={col.title} size={{ xs: 12, sm: 6, md: 2 }}>
              <Typography
                component="h3"
                className="mb-2 text-[13px] font-semibold leading-none text-gray-900"
              >
                {col.title}
              </Typography>
              <List disablePadding>
                {col.links.map((label) => (
                  <ListItem key={label} disablePadding className="block">
                    <Link
                      href="#"
                      underline="none"
                      className="text-xs leading-[1.4] text-gray-600 transition-colors hover:text-[#0f6b5c]"
                    >
                      {label}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
