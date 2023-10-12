import { Box, Grid, GridItem } from "@chakra-ui/react";
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

  // const mortgageInfo =
  //   data !== undefined
  //     ? {
  //         type: data.type,
  //         mortgage: data.mortgage,
  //         mortgagePayment: data.mortgagePayment,
  //       }
  //     : {};

  // const schedulePayments = data !== undefined ? data.schedulPayments : [];
  return (
    <Box padding={5}>
      <Grid
        gridTemplate={{
          base: `"input output"
                "table table"`,
        }}
        gridTemplateColumns={{
          base: `1fr 1fr`,
        }}
      >
        <GridItem area="input">
          <Box>
            <Calculator calculate={(data) => setCalculateData(data)} />
            <ColorModeSwitch />
          </Box>
        </GridItem>
        <GridItem area="output">
          <Box marginLeft={5}>
            <MortgageShow calculateData={calculateData} />
          </Box>
        </GridItem>
        <GridItem area="table">
          <SchedulePayment calculateData={calculateData} />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
