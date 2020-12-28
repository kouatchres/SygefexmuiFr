import React, { useEffect, useState } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import { useApolloClient, useMutation, useQuery } from "@apollo/react-hooks";
import { deleteTownMutation } from "../queries&Mutations&Functions/Mutations";
import tableIcons from "../utils/icons/tableIcons";
import ConfirmDialog from "../utils/ConfirmDialog";
import AddPopup from "../utils/AddPopup";
import UpdatePopup from "../utils/UpdatePopup";
import { getAllRegionsDivisionsAndTownsQuery } from "../queries&Mutations&Functions/Queries";

import {
  Edit as EditIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";
import Notification from "../utils/Notification";
import NewTown from "./NewTown";
import UpdateTown from "./UpdateTown";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  head: {
    backgroundColor: "#fff",
    position: "sticky",
    top: 0,
  },
}));

const TownList = () => {
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
        title: "Region Name",
      },
      {
        field: "regCode",
        title: "Region Code",
        grouping: false,
      },
      { field: "divName", title: "Division Name" },
      { field: "divCode", title: "Division Code", grouping: false },
      { field: "subDivName", title: "Nom Arrond" },
      { field: "subDivCode", title: "Code Arrond", grouping: false },
      { field: "townName", title: "Nom Ville" },
      { field: "townCode", title: "Code Ville", grouping: false },
    ],
    data: [],
  });

  const loadDivisionData = async () => {
    const { error, data } = await client.query({
      query: getAllRegionsDivisionsAndTownsQuery,
    });
    const { regions } = { ...data };

    const getTowns = regions.map((item) => {
      const divInfos = item.division.map((division) => {
        const subDivInfos = division.subDivision.map((subDivision) => {
          const townInfos = subDivision.town.map((ville) => ({
            regName: item.regName,
            regCode: item.regCode,
            divName: division.divName,
            divCode: division.divCode,
            subDivName: subDivision.subDivName,
            subDivCode: subDivision.subDivCode,
            ...ville,
          }));
          return townInfos;
        });
        return subDivInfos;
      });
      return divInfos;
    });

    setState((prev) => ({ ...prev, data: getTowns.flat(3) }));
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
  const [deleteTown, { loading }] = useMutation(deleteTownMutation, {
    variables: { id: deleteConfirmDialog.id },
    // update: updateCache(),
  });

  const actions = [
    {
      icon: () => <AddIcon />,
      tooltip: "Ajouter Nouvelle Ville",
      isFreeAction: true,
      onClick: () => {
        setIsAddPopupOpen(true);
      },
    },
    {
      icon: () => <EditIcon />,
      tooltip: "Modifier Ville",
      onClick: (event, rowData) => {
        setUpdatePopupState({ isOpen: true, id: rowData.id });
        // console.log(rowData.id);
      },
    },
    {
      icon: () => <DeleteIcon />,
      tooltip: "Supprimer Ville",
      onClick: (event, rowData) =>
        setDeleteConfirmDialog({
          id: rowData.id,
          isOpen: true,
          title: "Etes-vous sur de suprimer cette inofrmation",
          subtitle:
            "Une fois supprimées, les informations seront perdues a jamais, Seules les regions sans departement pourront etre suprimees",
          onConfirm: () => {
            rowData.id && deleteTown(rowData.id);
            setNotify({
              isOpen: true,
              message: "Ville Supprimée avec success",
              type: "error",
            });
          },
        }),
    },
  ];
  console.dir(state.data);
  return (
      <div   className={classes.root}>
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
          icons={tableIcons}
          title="Liste des villes... ,..............                                      "
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
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              // backgroundColor: "#abb",
              color: "#ede6b9",
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
          title="Nouvelle Ville"
          isOpen={isAddPopupOpen}
          onClose={handleAddPopupClose}
        >
          <NewTown />
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
          <UpdateTown id={updatePopupState.id} />
        </UpdatePopup>
      </div>
  );
};
export default TownList;
