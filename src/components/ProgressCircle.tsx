import { Box } from "@mui/material";

type Props = {
  progress?: number;
  size?: number;
};

const ProgressCircle = ({ progress = 0.75, size = 40 }: Props) => {
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(primary.main 55%, transparent 56%),
    conic-gradient(transparent 0deg ${angle}deg, info.main ${angle}deg 360deg),
    secondary.main`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    ></Box>
  );
};

export default ProgressCircle;
