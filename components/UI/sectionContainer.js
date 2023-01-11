import { Box } from "@mui/system";

export default function SectionContainer({
  children,
  background = "#FFF",
  sx,
  className,
  ...rest
}) {
  return (
    <Box
      {...rest}
      width="100vw"
      sx={{
        backgroundColor: background,
        overflow: "hidden",
        ...sx,
      }}
      className={className}>
      {children}
    </Box>
  );
}
