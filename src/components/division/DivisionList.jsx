import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { Paper } from "@material-ui/core";
import { useApolloClient } from "@apollo/react-hooks";
import { getAllRegionsAndDivisionsQuery } from "../queries&Mutations&Functions/Queries";
import tableIcons from "../utils/icons/tableIcons";
import AddPopup from "../utils/AddPopup";
import UpdatePopup from "../utils/UpdatePopup";
import { useRouter } from "next/router";

import {
  Edit as EditIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";

import Button from "@material-ui/core/Button";
import NewDivision from "./NewDivision";
import UpdateDivision from "./UpdateDivision";

const DivisionList = () => {
  const client = useApolloClient();

  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [updatePopupState, setUpdatePopupState] = useState({
    isOpen: false,
    id: "",
  });

  const [state, setState] = useState({
    columns: [
      {
        field: "regName",
        title: "Region Name",
      },
      {
        field: "regCode",
        title: "Region Code",
        grouping: false,
      },
      { field: "divName", title: "Division Name" },
      { field: "divCode", title: "Division Code", grouping: false },
    ],
    data: [],
  });

  const loadDivisionData = async () => {
    const { error, data } = await client.query({
      query: getAllRegionsAndDivisionsQuery,
    });
    const { regions } = { ...data };

    const getDivisions = regions.map((item) => {
      const divInfos = item.division.map((division) => ({
        regName: item.regName,
        regCode: item.regCode,
        ...division,
      }));
      return divInfos;
    });

    setState((prev) => ({ ...prev, data: getDivisions.flat(1) }));
  };

  useEffect(() => {
    loadDivisionData();

    console.log(state.data);
  }, []);

  const handleAddPopupClose = (event) => {
    setIsAddPopupOpen(false);
  };

  const handleUpdatePopupClose = (event) => {
    setUpdatePopupState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  console.dir(state.data);

  const actions = [
    {
      icon: () => <AddIcon />,
      tooltip: "Add User",
      isFreeAction: true,
      onClick: (event, rowData) => {
        setIsAddPopupOpen(true);
      },
    },
    {
      icon: () => <EditIcon />,
      tooltip: "Edit User",
      onClick: (event, rowData) => {
        setUpdatePopupState({ isOpen: true, id: rowData.id });
        // console.log(rowData.id);
      },
    },
    {
      icon: () => <DeleteIcon />,
      tooltip: "Delete User",
      onClick: (event, rowData) => confirm("You want to delete " + rowData.id),
    },
  ];

  console.log({ updatePopupState });
  return (
    <Paper style={{ marginTop: "2rem" }}>
      <MaterialTable
        stickyHeader
        style={{ position: "sticky", top: 0 }}
        icons={tableIcons}
        title="Users List"
        columns={state.columns}
        data={state.data}
        actions={actions}
      />
      <AddPopup
        title="Add User"
        isOpen={isAddPopupOpen}
        onClose={handleAddPopupClose}
      >
        <NewDivision />
      </AddPopup>
      <UpdatePopup
        title={updatePopupState.id}
        isOpen={updatePopupState.isOpen}
        onClose={handleUpdatePopupClose}
      >
        <UpdateDivision id={updatePopupState.id} />
      </UpdatePopup>
    </Paper>
  );
};
export default DivisionList;

// <UpdatePopup
//   title="Update Division"
//   isOpen={AddPopupOpen
//   onClose={handleDialogClose}
// >
//   <UpdateDivision />
// </UpdatePopup>
