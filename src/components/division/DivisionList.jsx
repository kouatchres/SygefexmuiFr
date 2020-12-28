import React, { useEffect, useState } from "react";
import MaterialTable, { MTableToolbar } from "material-table";

import { Paper } from "@material-ui/core";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { getAllRegionsAndDivisionsQuery } from "../queries&Mutations&Functions/Queries";
import { deleteDivisionMutation } from "../queries&Mutations&Functions/Mutations";
import tableIcons from "../utils/icons/tableIcons";
import AddPopup from "../utils/AddPopup";
import UpdatePopup from "../utils/UpdatePopup";
import ConfirmDialog from "../utils/ConfirmDialog";
import Notification from "../utils/Notification";

import {
  Edit as EditIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";

import NewDivision from "./NewDivision";
import UpdateDivision from "./UpdateDivisionzzz";

const DivisionList = () => {
  const client = useApolloClient();
 const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [updatePopupState, setUpdatePopupState] = useState({
    isOpen: false,
    id: "",
  });
  const [deleteConfirmDialog, setDeleteConfirmDialog] = useState({
    isOpen: false,
    id: "",
    title: "",
    subtitle: "",
  });

   const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
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
console.log(data)
    const getDivisions = regions.map((item) => {
      const divInfos = item.division.map((division) => ({
        regName: item.regName,
        regCode: item.regCode,
        ...division,
      }));
      return divInfos;
    });

    setState((prev) => ({ ...prev, data: getDivisions.flat(1) }))
  };

  useEffect(() => {
    loadDivisionData();
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

  const handleDeleteConfirmDialog = () => {
    setDeleteConfirmDialog((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  console.dir(state.data);

  const [deleteDivision, { loading }] = useMutation(deleteDivisionMutation, {
    variables: { id: deleteConfirmDialog.id },
    // update: updateCache(),
  });
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
      },
    },
    {
      icon: () => <DeleteIcon />,
      tooltip: "Supprimer matière",
      onClick: (event, rowData) =>
        setDeleteConfirmDialog({
          id: rowData.id,
          isOpen: true,
          title: "Etes-vous sur de cette opération",
          subtitle:
            "Une fois supprimées, les informations seront perdues a jamais",
          onConfirm: () => {
            rowData.id && deleteDivision(rowData.id);
            setNotify({
              isOpen: true,
              message: "Département supprimé avec success",
              type: "error",
            });
          },
        }),
    },
  ];
  console.log({ updatePopupState });
  return (
    <Paper style={{ marginTop: "2rem" }}>
      <MaterialTable
       components={{
            Toolbar: (props) => (
              <div
                style={{
                  backgroundColor: "#829079",
                  borderTopRightRadius: "0.5rem",
                  borderTopLeftRadius: "0.5rem",
                  color: "#ede6b9",
                }}
              >
                <MTableToolbar
                  style={{
                    // textColor: "#000",
                    textColor: "#fff",
                  }}
                  {...props}
                />
              </div>
            ),
          }}
        stickyHeader
        style={{ position: "sticky", top: 0 }}
        icons={tableIcons}
        title="Users List"
        columns={state.columns}
        data={state.data}
        actions={actions}
        options={{
          actionsColumnIndex: -1,
          grouping: true,
          paging: true,
          pageSize: 50, // make initial page size
          emptyRowsWhenPaging: false, //to make page size fix in case of less data rows
          pageSizeOptions: [25, 50, 75, 100, 150], // rows selection options
          headerStyle: {
            color: "#ede6b9",
            // color: "#ff",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            backgroundColor: "#b9925e",
            maxHeight: "0.5rem !important",
          },
          rowStyle: {
            color: "#000",
          },
        }}
      />
        <Notification notify={notify} setNotify={setNotify} />

      <AddPopup
        title="Nouveau Département"
        isOpen={isAddPopupOpen}
        onClose={handleAddPopupClose}
      >
        <NewDivision />
      </AddPopup>
      <UpdatePopup
        // title={updatePopupState.id}
        isOpen={updatePopupState.isOpen}
        onClose={handleUpdatePopupClose}
      >
        <UpdateDivision id={updatePopupState.id} />
      </UpdatePopup>

      <ConfirmDialog
        title={deleteConfirmDialog.title}
        subtitle={deleteConfirmDialog.subtitle}
        isOpen={deleteConfirmDialog.isOpen}
        onClose={handleDeleteConfirmDialog}
        onConfirm={deleteConfirmDialog.onConfirm}
      />
    </Paper>
  );
};
export default DivisionList;
