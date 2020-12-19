import React, { useEffect, useState } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useApolloClient, useMutation, useQuery } from "@apollo/react-hooks";
import { getAllRegionsDivisionsAndTownsQuery } from "../queries&Mutations&Functions/Queries";
import { deleteSubDivisionMutation } from "../queries&Mutations&Functions/Mutations";
import tableIcons from "../utils/icons/tableIcons";
import ConfirmDialog from "../utils/ConfirmDialog";
import AddPopup from "../utils/AddPopup";
import UpdatePopup from "../utils/UpdatePopup";
import {
  Edit as EditIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";
import Notification from "../utils/Notification";
import NewSubDivision from "./NewSubDivision";
import UpdateSubDiv from "./UpdateSubDiv";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  head: {
    // backgroundColor: "#fff",
    position: "sticky",
    top: 0,
  },
}));

const SubDivisionList = () => {
  const classes = useStyles();
  const client = useApolloClient();
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [updatePopupState, setUpdatePopupState] = useState({
    isOpen: false,
    id: "",
  });

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
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
        field: "regName",
        title: "Nom region",
      },
      {
        field: "regCode",
        title: "Code region",
        grouping: false,
      },
      { field: "divName", title: "Nom depart" },
      { field: "divCode", title: "Code Depart", grouping: false },
      { field: "subDivName", title: "Nom Arrond" },
      { field: "subDivCode", title: "Code Arrond", grouping: false },
    ],
    data: [],
  });

  const loadDivisionData = async () => {
    const { error, data } = await client.query({
      query: getAllRegionsDivisionsAndTownsQuery,
    });
    const { regions } = { ...data };

    const getSubDivisions = regions.map((item) => {
      const divInfos = item.division.map((division) => {
        const subDivInfos = division.subDivision.map((subDivision) => ({
          regName: item.regName,
          regCode: item.regCode,
          divName: division.divName,
          divCode: division.divCode,
          ...subDivision,
        }));
        return subDivInfos;
      });
      return divInfos;
    });

    setState((prev) => ({ ...prev, data: getSubDivisions.flat(2) }));
  };

  useEffect(() => {
    loadDivisionData();

    console.log(state.data);
  }, []);

  const handleAddPopupClose = () => {
    setIsAddPopupOpen(false);
  };

  const handleUpdatePopupClose = () => {
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
  const [deleteSubDivision, { loading }] = useMutation(
    deleteSubDivisionMutation,
    {
      variables: { id: deleteConfirmDialog.id },
      // update: updateCache(),
    }
  );

  const actions = [
    {
      icon: () => <AddIcon />,
      tooltip: "Ajouter Nouvel Arrondissement",
      isFreeAction: true,
      onClick: () => {
        setIsAddPopupOpen(true);
      },
    },
    {
      icon: () => <EditIcon />,
      tooltip: "Modifier Arrondissement",
      onClick: (event, rowData) => {
        setUpdatePopupState({ isOpen: true, id: rowData.id });
        // console.log(rowData.id);
      },
    },
    {
      icon: () => <DeleteIcon />,
      tooltip: "Supprimer Arrondissement",
      onClick: (event, rowData) =>
        setDeleteConfirmDialog({
          id: rowData.id,
          isOpen: true,
          title: "Etes-vous sur de suprimer cette inofrmation",
          subtitle:
            "Une fois supprimées, les informations seront perdues a jamais, Seules les regions sans departement pourront etre suprimees",
          onConfirm: () => {
            rowData.id && deleteSubDivision(rowData.id);
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
    // <Paper className={classes.root}>
      <div>
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
          title="Liste des arrondissements...                          "
          columns={state.columns}
          data={state.data}
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
          actions={actions}
        />
        <AddPopup
          title="Nouvelle Arrondissement"
          isOpen={isAddPopupOpen}
          onClose={handleAddPopupClose}
        >
          <NewSubDivision />
        </AddPopup>
        <ConfirmDialog
          title={deleteConfirmDialog.title}
          subtitle={deleteConfirmDialog.subtitle}
          isOpen={deleteConfirmDialog.isOpen}
          onClose={handleDeleteConfirmDialog}
          onConfirm={deleteConfirmDialog.onConfirm}
        />
        <Notification notify={notify} setNotify={setNotify} />

        <UpdatePopup
          // title={updatePopupState.id}
          isOpen={updatePopupState.isOpen}
          onClose={handleUpdatePopupClose}
        >
          <UpdateSubDiv id={updatePopupState.id} />
        </UpdatePopup>
      </div>
    // </Paper>
  );
};
export default SubDivisionList;
