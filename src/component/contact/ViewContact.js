import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { view } from "../../action/userAction";

import { Box, Thead, Table, Tbody, Tr, Td, Th } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Drawer from "../dashboard/Drawer";
import Navbar from "../Navbar";
const ViewContact = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.view);
  console.log(contacts);

  useEffect(() => {
    dispatch(view());
  }, [dispatch]);
  return (
    <Box
    
      style={{
        width: "100%", 
        margin: "0 0 0 0%",
      }}
    >
      <Drawer />
      <Navbar name="View Contact" />
      <Box ml={10} flex="2">
        <h1
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "bold",
            margin: "1rem 0",
            color: "#333",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            borderBottom: "2px solid #ccc",
            paddingBottom: "0.5rem",
          }}
        >
          Contact List
        </h1>
        <Table variant="simple" bg="white" borderRadius="md">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            {contacts &&
              contacts.map((item) => (
                <Tr key={item._id}>
                  <Td>{item.name}</Td>
                  <Td>{item.email}</Td>

                  <Link to={`/update/${item._id}`}>
                    <button
                      style={{
                        padding: "0.75rem 1.5rem",
                        margin: "0 0.5rem",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        borderRadius: "0.25rem",
                        background:
                          "linear-gradient(to right, #4a90e2, #845ef7)",
                        color: "#fff",
                        border: "none",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                        cursor: "pointer",
                        transition: "background-color 0.3s",
                      }}
                    >
                      Update
                    </button>
                  </Link>
                  <Link to={`/delete/${item._id}`}>
                    <button
                      style={{
                        padding: "0.75rem 1.5rem",
                        margin: "0 0.5rem",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        borderRadius: "0.25rem",
                        background:
                          "linear-gradient(to right, #4a90e2, #845ef7)",
                        color: "#fff",
                        border: "none",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                        cursor: "pointer",
                        transition: "background-color 0.3s",
                      }}
                    >
                      Delete
                    </button>
                  </Link>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default ViewContact;
