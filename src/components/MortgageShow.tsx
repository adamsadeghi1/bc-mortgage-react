import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import useMortgage, { CalculateMortgage } from "../hooks/useMortgage";

interface Props {
  calculateData?: CalculateMortgage;
}
const MortgageShow = ({ calculateData }: Props) => {
  const { data, error } = useMortgage(calculateData);

  if (!calculateData) return null;
  if (error) return null;

  return (
    <Stack
      spacing={2}
      border="1px"
      borderRadius="12px"
      borderColor="gray.200"
      padding={5}
    >
      <Text id="payment-type" color="gray.500">
        Payment Schedule:
      </Text>
      <Text id="type" color="gray.500" fontSize="2xl" fontWeight="bold">
        {data?.type}
      </Text>

      <Text id="mortgate-value" color="gray.500">
        Mortgage:
      </Text>
      <Text id="mortgage" color="gray.500" fontSize="2xl" fontWeight="bold">
        {data?.mortgage !== undefined ? data.mortgage : "--"}
      </Text>
      <Text id="mortgage-payment" color="gray.500">
        Mortgage Payment:
      </Text>
      <Text id="mortgage" color="gray.500" fontSize="2xl" fontWeight="bold">
        {data?.mortgagePayment !== undefined ? data.mortgagePayment : "--"}
      </Text>
      <Text id="payment-number" color="gray.500">
        Payment Number:
      </Text>
      <Text id="mortgage" color="gray.500" fontSize="2xl" fontWeight="bold">
        {data?.paymentNumber !== undefined ? data.paymentNumber : "--"}
      </Text>
    </Stack>
  );
};

export default MortgageShow;
