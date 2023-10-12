import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const SchedulePayment = () => {
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
          <Tr>
            <Td>$539787.58</Td>
            <Td>1</Td>
            <Td>$212.42</Td>
            <Td>$719.32</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SchedulePayment;
