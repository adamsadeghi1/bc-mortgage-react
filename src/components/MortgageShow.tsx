import { Spinner, Stack, Text } from "@chakra-ui/react";
import useMortgage, { CalculateMortgage } from "../hooks/useMortgage";

interface Props {
  calculateData?: CalculateMortgage;
}
const MortgageShow = ({ calculateData }: Props) => {
  const { data, isLoading, error } = useMortgage(calculateData);

  if (!calculateData) return null;
  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <>
      <Stack
        spacing={5}
        border="1px"
        borderRadius="12px"
        borderColor="gray.200"
        padding={3}
      >
        <Text id="payment-type" color="gray.500">
          Payment Schedule:
        </Text>
        <Text id="type" color="gray.500" fontSize="2xl" fontWeight="bold">
          {data.type}
        </Text>

        <Text id="mortgate-value" color="gray.500">
          Mortgage:
        </Text>
        <Text id="mortgage" color="gray.500" fontSize="2xl" fontWeight="bold">
          {data.mortgage !== undefined ? data.mortgage : "--"}
        </Text>

        <Text id="mortgage-payment" color="gray.500">
          Mortgage Payment:
        </Text>
        <Text id="mortgage" color="gray.500" fontSize="2xl" fontWeight="bold">
          {data.mortgagePayment !== undefined ? data.mortgagePayment : "--"}
        </Text>
      </Stack>
    </>
  );
};

export default MortgageShow;
