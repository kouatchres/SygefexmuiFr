import React, { useEffect, useState } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useApolloClient, useMutation, useQuery } from "@apollo/react-hooks";
import { deleteCenterMutation } from "../queries&Mutations&Functions/Mutations";
import tableIcons from "../utils/icons/tableIcons";
import ConfirmDialog from "../utils/ConfirmDialog";
import AddPopup from "../utils/AddPopup";
import UpdatePopup from "../utils/UpdatePopup";
import { getAllRegionsDivisionsTownsCentersQuery } from "../queries&Mutations&Functions/Queries";

import {
  Edit as EditIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";
import Notification from "../utils/Notification";
import NewCenter from "./NewCenter";
import UpdateCenter from "./UpdateCenter";

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

const CenterList = () => {
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
      
      { field: "townName", title: "Ville",
    options: {
            width: 50,
            headerNoWrap: true,
            filter: true,
            sort: false
         },
    },
      { field: "centerName", title: "Centre",
     options: {
            width: 300,
            headerNoWrap: true,
            filter: true,
            sort: false
        } 
      },
      // { field: "centerCode", title: "Code Centre", grouping: false },
      {
        field: "centerNumber",
        title: "Code",
        // grouping: false,
        type: "numeric",
          options: {
            width: 30,
            headerNoWrap: true,
            filter: true,
            sort: false
         },
      },
      {
        field: "centerSecretCode",
        title: "Code secret",
        // grouping: false,
        type: "numeric",
      },
    ],
    data: [],
  });
  const loadDivisionData = async () => {
    const { error, data } = await client.query({
      query: getAllRegionsDivisionsTownsCentersQuery,
    });
    const { regions } = { ...data };

    const getTowns = regions.map((item) => {
      const divInfos = item.division.map((division) => {
        const subDivInfos = division.subDivision.map((subDivision) => {
          const townInfos = subDivision.town.map((ville) => {
            const centerInfos = ville.center.map((centre) => ({
              regName: item.regName,
              regCode: item.regCode,
              divName: division.divName,
              divCode: division.divCode,
              townName: ville.townName,
              townCode: ville.townCode,
              ...centre,
            }));
            return centerInfos;
          });
          return townInfos;
        });
        return subDivInfos;
      });
      return divInfos;
    });

    setState((prev) => ({ ...prev, data: getTowns.flat(4) }));
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
  const [deleteCenter, { loading }] = useMutation(deleteCenterMutation, {
    variables: { id: deleteConfirmDialog.id },
    // update: updateCache(),
  });

  const actions = [
    {
      icon: () => <AddIcon />,
      tooltip: "Ajouter Nouveau Centre",
      isFreeAction: true,
      onClick: () => {
        setIsAddPopupOpen(true);
      },
    },
    {
      icon: () => <EditIcon />,
      tooltip: "Modifier Centre",
      onClick: (event, rowData) => {
        setUpdatePopupState({ isOpen: true, id: rowData.id });
      },
    },
    {
      icon: () => <DeleteIcon />,
      tooltip: "Supprimer Centre",
      onClick: (event, rowData) =>
        setDeleteConfirmDialog({
          id: rowData.id,
          isOpen: true,
          title: "Etes-vous sur de suprimer cette inofrmation",
          subtitle:
            "Une fois supprimées, les informations seront perdues a jamais, Seules les regions sans departement pourront etre suprimees",
          onConfirm: () => {
            rowData.id && deleteCenter(rowData.id);
            setNotify({
              isOpen: true,
              message: "Centre Supprimé avec success",
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
          title="Information détaillée des Centres..................  ..............                          "
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
            fixedHeader:"false",
          }}
          actions={actions}
        />
        <AddPopup
          title="Nouveau Centre"
          isOpen={isAddPopupOpen}
          onClose={handleAddPopupClose}
        >
          <NewCenter />
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
          <UpdateCenter id={updatePopupState.id} />
        </UpdatePopup>
      </div>
    // </Paper>
  );
};
export default CenterList;
