import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Spinner,
  AlertIcon,
  Alert,
} from "@chakra-ui/react";
import useMortgage, { CalculateMortgage } from "../hooks/useMortgage";
import { AxiosError } from "axios";

interface Props {
  calculateData?: CalculateMortgage;
}

const SchedulePayment = ({ calculateData }: Props) => {
  const { data, isLoading, error } = useMortgage(calculateData);

  if (!calculateData) return null;

  if (isLoading) return <Spinner />;

  if (error) {
    if (error instanceof AxiosError) {
      const newError = error.response ? error.response.data : error;

      return (
        <Alert status="error" marginY={3}>
          <AlertIcon />
          {newError.message}
        </Alert>
      );
    } else {
      return (
        <Alert status="error" marginY={3}>
          <AlertIcon />
          {error.message}
        </Alert>
      );
    }
  }
  return (
    <TableContainer
      border="1px"
      borderRadius="12px"
      borderColor="gray.200"
      marginY="3"
    >
      <Table colorScheme="gray">
        <TableCaption>Payment Schedule</TableCaption>
        <Thead>
          <Tr>
            <Th>Remaining Balence</Th>
            <Th>Payment Number</Th>
            <Th>Paid Principle</Th>
            <Th>Payment</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.schedulPayments.map((payment, index) => (
            <Tr key={index}>
              <Td>{payment.remainingBalence}</Td>
              <Td>{payment.paymentNumber}</Td>
              <Td>{payment.paidSoFarFromPrinciple}</Td>
              <Td>{payment.payPerPeriod}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SchedulePayment;
