import { Box, Typography } from "@mui/material";
import { SvgIconProps } from "@mui/material";
import ProgressCircle from "./ProgressCircle";

type Props = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  progress: number;
  increase: string;
};

const StatBox = ({ title, subtitle, icon, progress, increase }: Props) => {
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          <>
            {icon}
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ fontSize: "20px", color: "#141414" }}
            >
              {title}
            </Typography>
          </>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography
            variant="h5"
            sx={{ fontSize: "16px", color: "secondary.main" }}
          >
            {subtitle}
          </Typography>
          <Typography
            variant="h5"
            fontStyle="italic"
            sx={{ fontSize: "16px", color: "secondary.dark" }}
          >
            {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
