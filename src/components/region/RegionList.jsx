import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { getAllRegionsQuery } from "../queries&Mutations&Functions/Queries";
import tableIcons from "../utils/icons/tableIcons";
import AddPopup from "../utils/AddPopup";
import UpdatePopup from "../utils/UpdatePopup";
import ConfirmDialog from "../utils/ConfirmDialog";
import { deleteRegionMutation } from "../queries&Mutations&Functions/Mutations";
import Notification from "../utils/Notification";

import {
  Edit as EditIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";

import NewRegionMui from "./NewRegionMui";
import UpdateRegion from "./UpdateRegion";

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
      },
      { field: "id", title: "ID" },
    ],
    data: [],
  });

  const loadRegionData = async () => {
    const { error, data } = await client.query({
      query: getAllRegionsQuery,
    });
    {
      error && <Error error={error} />;
    }
    const { regions } = { ...data };
    console.log(regions);
    console.log(regions);
    setState((prev) => ({ ...prev, data: regions }));
  };

  useEffect(() => {
    loadRegionData();
  }, []);

  const updateCache = (cache, payload) => {
    // manually update the cache so that the data are all the same
    // 1. read the cache for the data we want
    const data = cache && cache.readQuery({ query: getAllRegionsQuery });
    cache &&
      cache.writeQuery({
        query: getAllRegionsQuery,
        data: {
          regions: data.regions.filter(
            (item) => item.id !== payload.data.deleteRegion.id
          ),
        },
      });
  };
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
  const [deleteRegion, { loading }] = useMutation(deleteRegionMutation, {
    variables: { id: deleteConfirmDialog.id },
    update: updateCache(),
  });

  const actions = [
    {
      icon: () => <AddIcon />,
      tooltip: "Ajouter Nouvelle Région",
      isFreeAction: true,
      onClick: () => {
        setIsAddPopupOpen(true);
      },
    },
    {
      icon: () => <EditIcon />,
      tooltip: "Modifier Région",
      onClick: (event, rowData) => {
        setUpdatePopupState({ isOpen: true, id: rowData.id });
        // console.log(rowData.id);
      },
    },
    {
      icon: () => <DeleteIcon />,
      tooltip: "Supprimer région",
      onClick: (event, rowData) =>
        setDeleteConfirmDialog({
          id: rowData.id,
          isOpen: true,
          title: "Etes-vous sur de suprimer cette inofrmation",
          subtitle:
            "Une fois supprimées, les informations seront perdues a jamais, Seules les regions sans departement pourront etre suprimees",
          onConfirm: () => {
            rowData.id && deleteRegion(rowData.id);
            setNotify({
              isOpen: true,
              message: "Region Supprimee avec success",
              type: "error",
            });
            console.log("just after the delete process");
          },
        }),
    },
  ];

  return (
    <Paper style={{ marginTop: "2rem" }}>
      <MaterialTable
        icons={tableIcons}
        title="Liste de Régions"
        columns={state.columns}
        data={state.data}
        actions={actions}
        stickyHeader
        style={{ position: "sticky", top: 0 }}
        icons={tableIcons}
      />
      <AddPopup
        title="Nouvelle Région"
        isOpen={isAddPopupOpen}
        onClose={handleAddPopupClose}
      >
        <NewRegionMui />
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
        <UpdateRegion id={updatePopupState.id} />
      </UpdatePopup>
    </Paper>
  );
};
export default RegionList;
