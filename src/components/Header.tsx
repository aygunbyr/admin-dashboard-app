import { Box, Typography } from "@mui/material";

type HeaderProps = {
  title: string;
  subtitle: string;
};

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color="#141414"
        fontWeight="bold"
        sx={{ fontSize: "32px", mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color="secondary.main" sx={{ fontSize: "16px" }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
