import React, { useState, useEffect } from "react";
import { Update, Delete } from "../../action/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { Single } from "../../action/userAction";
import { useToast } from "@chakra-ui/react";
import Drawer from "../dashboard/Drawer";
import Navbar from "../Navbar";

const UpdateDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const toast = useToast();
  const {  contact } = useSelector((state) => state.single);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    setName(contact.name);
    setEmail(contact.email);
    setNumber(contact.number);
    setStatus(contact.status);
  }, [contact]);

  const submitData = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.set("name", name);

      formData.set("email", email);

      formData.set("number", number);

      formData.set("status", status);
    
      await dispatch(Update(id, formData));
      // console.log(AddContact(formData));
      toast({
        title: "Data Submitted Successfully",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    } catch (error) {
      toast({
        title: "Error Occurred!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  const deleteContact = async (e) => {
    e.preventDefault();

    await dispatch(Delete(id));

    toast({
      title: "Deleted Successful",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
    navigate("/view");
  };

  useEffect(() => {
    dispatch(Single(id));
  }, [dispatch, id]);
  return (
    <div>
      <Drawer />
      <Navbar name="Update Contact And Delete"/>
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Update Details</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="number" className="block font-semibold mb-1">
              number:
            </label>
            <input
              type="number"
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full border rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label>
              <input
                type="radio"
                name="status"
                value="active"
                checked={status === "active"}
                onChange={() => setStatus("active")}
              />
              Active
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value="inactive"
                checked={status === "inactive"}
                onChange={() => setStatus("inactive")}
              />
              Inactive
            </label>
            <p>Status</p>
          </div>
          <div className="flex flex-row items-center justify-center">
            <button
              onClick={submitData}
              className="bg-blue-500 text-white  py-2 px-4 rounded-md hover:bg-blue-600 "
            >
              Update
            </button>

            <button
              style={{ margin: "2px" }}
              onClick={deleteContact}
              className="bg-blue-500 text-white  py-2 px-4 rounded-md hover:bg-blue-600 "
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateDetail;
