import {
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import OrderTracking from "./OrderTracking";


const OrdersTable = ({tableData}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onCancel = (event) => {
    event.stopPropagation();
  };

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption className="capitalize">orders history</TableCaption>
        <Thead>
          <Tr>
            <Th>Orders</Th>
            <Th>Date</Th>
            <Th>Name</Th>
            <Th>Total Amount</Th>
            <Th>Status</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>

        <Tbody>
          {tableData.map((value) => {
            return (
              <Tr
                key={value.id}
                onClick={onOpen}
                className="hover:bg-gray-border/30 cursor-pointer transition-all"
              >
                <Td>{value.orderId}</Td>
                <Td>{value.date}</Td>
                <Td>{value.name}</Td>
                <Td>${value.total}</Td>
                <Td className="">
                  <span
                    className={`${
                      value.status == 4 && "bg-green text-white"
                    } bg-gray p-2 px-4 text-sm rounded-2xl text-white capitalize`}
                  >
                    {value.status == 1 && "pending"}
                    {value.status == 2 && "scheduled"}
                    {value.status == 3 && "dispatched"}
                    {value.status == 4 && "delivered"}
                  </span>
                </Td>
                <Td>
                  <Button onClick={(e) => onCancel(e)}>
                    {value.status == 4 && "Return Order"}
                    {value.status != 4 && "Cancel"}
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <OrderTracking isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </TableContainer>
  );
};

export default OrdersTable;
