import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { getAllEducationTypesAndSubjectsQuery } from "../queries&Mutations&Functions/Queries";
import tableIcons from "../utils/icons/tableIcons";
import AddPopup from "../utils/AddPopup";
import UpdatePopup from "../utils/UpdatePopup";
import ConfirmDialog from "../utils/ConfirmDialog";
import MaterialTable, { MTableToolbar } from "material-table";
import { deleteSubjectMutation } from "../queries&Mutations&Functions/Mutations";

import {
  Edit as EditIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";

import CreateSubject from "./CreateSubject";
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

const SubjectList = () => {
  const classes = useStyles();
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
      {
        field: "subjectType",
        title: "Type matière",
      },
      {
        field: "subjectGroup",
        title: "Groupe matière",
      },
      {
        field: "educationTypeName",
        title: "Libelle matière",
      },
    ],
    data: [],
  });

  
  const loadSubjEducTypes = async () => {
    const { error, data } = await client.query({
      query: getAllEducationTypesAndSubjectsQuery,
    });
    const { educationTypes } = { ...data };
    console.log(data);
    // const getEducTypes = educationTypes.map((item) => {
    //   const subjInfos =item.subject.map((subject) => ({
    //     educationTypeName:educType.educationTypeName,
    //  educationTypeCode:educType.educationTypeCode,
    //     ...subject,
    //   }));
    //   return subjInfos;
    // });

    // setState((prev) => ({ ...prev, data: getEducTypes.flat(1) }));
  };

  useEffect(() => {
    loadSubjEducTypes();
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

  const [deleteSubject, { loading }] = useMutation(deleteSubjectMutation, {
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
        // console.log(rowData.id);
      },
    },
    {
      icon: () => <DeleteIcon />,
      tooltip: "Supprimer matière",
      onClick: (event, rowData) =>
        setDeleteConfirmDialog({
          id: rowData.id,
          isOpen: true,
          title: "Etes-vous sur de suprimer cette inofrmation",
          subtitle:
            "Une fois supprimées, les informations seront perdues a jamais",
          onConfirm: () => {
            rowData.id && deleteSubject(rowData.id);
            setNotify({
              isOpen: true,
              message: "Arrondissement Supprimé avec success",
              type: "error",
            });
          },
        }),
    },
  ];

  console.dir(state.data);
  return (
    <div style={{ marginTop: "2rem" }}>
      <MaterialTable
        className={classes.head}
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
              <MTableToolbar {...props} />
            </div>
          ),
        }}
        icons={tableIcons}
        title="Liste de matières"
        columns={state.columns}
        data={state.data}
        actions={actions}
        stickyHeader
        style={{ position: "sticky", top: 0 }}
        icons={tableIcons}
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
      <AddPopup
        title="Nouvelle matière"
        isOpen={isAddPopupOpen}
        onClose={handleAddPopupClose}
      >
        <CreateSubject />
      </AddPopup>
      <ConfirmDialog
        title={deleteConfirmDialog.title}
        subtitle={deleteConfirmDialog.subtitle}
        isOpen={deleteConfirmDialog.isOpen}
        onClose={handleDeleteConfirmDialog}
        onConfirm={deleteConfirmDialog.onConfirm}
      />
      <UpdatePopup
        title={updatePopupState.id}
        isOpen={updatePopupState.isOpen}
        onClose={handleUpdatePopupClose}
      >
        <UpdateSubject id={updatePopupState.id} />
      </UpdatePopup>
    </div>
  );
};
export default SubjectList;
