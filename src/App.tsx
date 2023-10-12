import { Box, Button, HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./components/ColorModeSwitch";
import SchedulePayment from "./components/SchedulePayment";
import Calculator from "./components/Calculator";

function App() {
  return (
    <Box padding={5}>
      <ColorModeSwitch />
      <Calculator />
      <SchedulePayment />
    </Box>
  );
}

export default App;
