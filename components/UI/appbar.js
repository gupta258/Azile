import * as React from "react";
import { Box } from "@mui/system";
import Image from "next/image";
import Section from "./section";
import SectionContainer from "./sectionContainer";
import DrawerScreen from "../drawerScreen";
import Link from "next/link";

export default function AppBar({ background }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <SectionContainer background={background} sx={{ py: 4 }}>
      <Section>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Link href="/" passHref>
            <Image
              height={80 * 0.677}
              width={80}
              src="/assets/brand-logo-white.png"
              alt="brand-logo"
              style={{cursor: "pointer"}}
            />
          </Link>
          <DrawerScreen />
        </Box>
      </Section>
    </SectionContainer>
  );
}
