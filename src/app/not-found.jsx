import { Stack, Typography } from "@mui/material";
import Image from "next/image";

function notFound() {
  return (
    <Stack alignItems="center" justifyContent="center">
      <Typography mt={10} variant="h1">404</Typography>
      <Image src={"/not-found-pic.jpg"} width={300} height={400} alt="404" />
    </Stack>
  );
}

export default notFound;