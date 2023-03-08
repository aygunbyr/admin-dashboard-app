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
        background: `radial-gradient(#eee 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, #2979ff ${angle}deg 360deg),
            #64dd17`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
