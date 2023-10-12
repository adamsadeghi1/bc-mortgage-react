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
} from "@chakra-ui/react";
import useMortgage, {
  CalculateMortgage,
  ScheduledPayment,
} from "../hooks/useMortgage";

interface Props {
  calculateData?: CalculateMortgage;
}

const SchedulePayment = ({ calculateData }: Props) => {
  if (!calculateData) return null;

  const { data, isLoading, error } = useMortgage(calculateData);

  if (isLoading) return <Spinner />;
  if (error) return error.message;

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
