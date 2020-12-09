import React, { forwardRef, useEffect, useState } from "react";
import MaterialTable from "material-table";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useApolloClient } from "@apollo/react-hooks";
import { getAllSubjectsWithEducTypesQuery } from "../queries&Mutations&Functions/Queries";
import tableIcons from "../utils/icons/tableIcons";
import AddPopup from "../utils/AddPopup";
import UpdatePopup from "../utils/UpdatePopup";

import {
  Edit as EditIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";

import CreateNewSubjectHook from "./CreateNewSubjectHook";
import UpdateSubject from "./UpdateSubject";

const useStyles = makeStyles({
  stickyActionsColumn: {
    "& table:first-child": {
      "& tr": {
        "& td:first-child, th:first-child": {
          backgroundColor: "#f5f5f5",
          position: "sticky",
          left: 0,
          zIndex: 10,
        },
        "& th:first-child": {
          zIndex: 10,
        },
      },
    },
  },
  stickyHeader: {
    "& table:first-child": {
      "& tr": {
        "& th": {
          backgroundColor: "#5aa193",
          position: "sticky",
          top: "4rem",
          zIndex: 10,
        },
        "& th": {
          zIndex: 10,
        },
      },
    },
  },
});

const RegionList = () => {
  const classes = useStyles();
  const client = useApolloClient();
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [updatePopupState, setUpdatePopupState] = useState({
    isOpen: false,
    id: "",
  });

  const [state, setState] = useState({
    columns: [
      {
        field: "subjectName",
        title: "Libelle matière",
      },
      {
        field: "subjectCode",
        title: "Code matière",
      },
      { field: "id", title: "ID" },
    ],
    data: [],
  });

  const loadCandScoreData = async () => {
    const { error, data } = await client.query({
      query: getAllSubjectsWithEducTypesQuery,
    });
    console.log(data);
    const { subjects } = { ...data };
    const { subjectSpecialty } = { ...subjects };

    setState((prev) => ({ ...prev, data: subjects }));
  };

  useEffect(() => {
    loadCandScoreData();
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
      tooltip: "Nouvelle matière",
      isFreeAction: true,
      onClick: (event, rowData) => {
        setIsAddPopupOpen(true);
      },
    },
    {
      icon: () => <EditIcon />,
      tooltip: "modifier matière",
      onClick: (event, rowData) => {
        setUpdatePopupState({ isOpen: true, id: rowData.id });
        // console.log(rowData.id);
      },
    },
    {
      icon: () => <DeleteIcon />,
      tooltip: "Supprimer matière",
      onClick: (event, rowData) => confirm("You want to delete " + rowData.id),
    },
  ];

  console.dir(state.data);
  return (
    <Paper style={{ marginTop: "2rem" }}>
      <MaterialTable
        icons={tableIcons}
        title="Liste de matières"
        columns={state.columns}
        data={state.data}
        actions={actions}
        stickyHeader
        style={{ position: "sticky", top: 0 }}
        icons={tableIcons}
      />
      <AddPopup
        title="Nouvelle matière"
        isOpen={isAddPopupOpen}
        onClose={handleAddPopupClose}
      >
        <CreateNewSubjectHook />
      </AddPopup>
      <UpdatePopup
        title={updatePopupState.id}
        isOpen={updatePopupState.isOpen}
        onClose={handleUpdatePopupClose}
      >
        <UpdateSubject id={updatePopupState.id} />
      </UpdatePopup>
    </Paper>
  );
};
export default RegionList;
