import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import Calculator from "./components/Calculator";
import ColorModeSwitch from "./components/ColorModeSwitch";
import useMortgage, {
  CalculateMortgage,
  ScheduledPayment,
} from "./hooks/useMortgage";
import MortgageShow from "./components/MortgageShow";
import SchedulePayment from "./components/SchedulePayment";

function App() {
  const [calculateData, setCalculateData] = useState<CalculateMortgage>();

  return (
    <Box padding={5}>
      <Grid
        gridTemplate={{
          base: `"main main"
                "table table"`,
        }}
        gridTemplateColumns={{
          base: `1fr 1fr`,
        }}
      >
        <GridItem area="main">
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
            spacing={6}
            padding={2}
          >
            <Calculator calculate={(data) => setCalculateData(data)} />
            {calculateData && <MortgageShow calculateData={calculateData} />}
            <ColorModeSwitch />
          </SimpleGrid>
        </GridItem>

        <GridItem area="table">
          {calculateData && <SchedulePayment calculateData={calculateData} />}
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
