import React from "react";
import User from "../user/User";
import Signout from "../user/Signout";
import Link from "next/link";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "./Sidebar";

const drawerWidth = 370;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    // [theme.breakpoints.up("sm")]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    // },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  userName: {
    alignItems: "center",
  },
}));

const items = [
  "divider",
  {
    url: "../../login",
    name: "home",
    label: "Home",
    Icon: HomeIcon,
  },
  "divider",
  {
    // url: "../../creates/newRegion",
    name: "administration",
    label: "Administration",
    Icon: ReceiptIcon,
    items: [
      {
        // url: "../../show/results/candCodeResults",
        name: "Results",
        label: "Resultats Centre",
        items: [
          {
            url: "../../creates/newCES",
            name: "centerGenResults",
            label: "General par centre",
          },
          {
            url: "../../creates/newCESS",
            name: "candResults",
            label: "Candidat Individuel",
          },
        ],
      },
      {
        // url: "../../show/results/candCodeResults",
        name: "localization",
        label: "Info Localization",
        items: [
          {
            url: "../../show/lists/allRegions",
            name: "regionList",
            label: "Region",
          },
          {
            url: "../../show/lists/allDivs",
            name: "divisionList",
            label: "Departement",
          },
          {
            url: "../../show/lists/allSubDivs",
            name: "subDivList",
            label: "Arrondissement",
          },
          {
            url: "../../show/lists/allTown",
            name: "townList",
            label: "Ville",
          },
          {
            url: "../../show/lists/allCenters",
            name: "centerList",
            label: "Centre",
          },
          {
            url: "../../show/lists/centerInfo",
            name: "centerListDetails",
            label: "Details Centre ",
          },
        ],
      },
      {
        // url: "../../show/results/candCodeResults",
        name: "SubjSeries",
        label: "Series & Matieres",
        items: [
          {
            url: "../../creates/newEducType",
            name: "educType",
            label: "Type d'enseignement",
          },
          {
            url: "../../creates/newSubject",
            name: "specialty",
            label: "Series",
          },
          {
            url: "../../creates/newSubject",
            name: "subject",
            label: "Matiere",
          },
          {
            url: "../../creates/newCES",
            name: "SubjectsToSpecialty",
            label: "Matieres des series",
          },
        ],
      },
      {
        // url: "../../show/results/candCodeResults",
        name: "PhasesExamen",
        label: "Phases Examen",
        items: [
          {
            url: "../../creates/newPhase",
            name: "examStages",
            label: "Phase",
          },
          {
            url: "../../creates/newRank",
            name: "rank",
            label: "Poste",
          },
          {
            url: "../../creates/newSubject",
            name: "subject",
            label: "Matiere",
          },
          {
            url: "../../creates/newCES",
            name: "SubjectsToSpecialty",
            label: "Matieres des series",
          },
        ],
      },
      {
        // url: "../../show/results/candCodeResults",
        name: "others",
        label: "Autres",
        items: [
          {
            url: "../../creates/newExam",
            name: "exams",
            label: "Examen",
          },
          {
            url: "../../creates/newSession",
            name: "session",
            label: "Session",
          },
          {
            url: "../../creates/newExaminer",
            name: "examiner",
            label: "Examinateur",
          },
          {
            url: "../../creates/newCES",
            name: "SubjectsToSpecialty",
            label: "Matieres des series",
          },
        ],
      },
      {
        // url: "../../show/results/candCodeResults",
        name: "center",
        label: "Centre",
        items: [
          {
            url: "../../creates/newRegister",
            name: "candidateAttendance",
            label: "Region",
          },
          {
            url: "../../creates/newRegister",
            name: "centerCandSecretCodes",
            label: "Listes des Anonymats",
          },
        ],
      },
      {
        // url: "../../show/results/candCodeResults",
        name: "MarkingPahse",
        label: "Correction",
        items: [
          {
            url: "../../creates/enterMarks",
            name: "candidateAMarks",
            label: "Notes des candidats",
          },
          {
            url: "../../creates/newRegister",
            name: "centerCandSecretCodes",
            label: "Listes des Anonymats",
          },
        ],
      },
    ],
  },

  "divider",
  {
    // url: "../../creates/newRegion",
    name: "centreManagement",
    label: "Centre d'examen",
    Icon: ReceiptIcon,
    items: [
      {
        // url: "../../creates/newRegion",
        name: "examStages",
        label: "Phases de l'examen",
        items: [
          {
            // url: "../../show/results/candCodeResults",
            name: "centerExamPreps",
            label: "Preparation",
            items: [
              {
                url: "../../creates/newCES",
                name: "registerCenterForExams",
                label: "Inscrire centre aux examens",
              },
              {
                url: "../../creates/newCESS",
                name: "Specialties",
                label: "Series offertes par centre",
              },
              {
                url: "../../creates/newGroupCand",
                name: "candidate",
                label: "Renseignement Candidats",
              },
            ],
          },
          {
            // url: "../../show/results/candCodeResults",
            name: "centerExamRegistration",
            label: "Inscription",
            items: [
              {
                url: "../../creates/newRegister",
                name: "registerCandidates",
                label: "Inscrire Candidats aux examens",
              },
              {
                url: "../../show/registeredCands",
                name: "registerCandidates",
                label: "Liste des candidats inscrits",
              },
              {
                url: "../../show/registeredCands",
                name: "registerCandidates",
                label: "Details des candidats inscrits",
              },
            ],
          },
          {
            // url: "../../show/results/candCodeResults",
            name: "WritenPahse",
            label: "Ecrite",
            items: [
              {
                url: "../../creates/newAttendance",
                name: "candidateAttendance",
                label: "Presence aux epreuves",
              },
              {
                url: "../../creates/newRegister",
                name: "centerCandSecretCodes",
                label: "Listes des Anonymats",
              },
            ],
          },
          {
            // url: "../../show/results/candCodeResults",
            name: "MarkingPahse",
            label: "Correction",
            items: [
              {
                url: "../../creates/newMarks",
                name: "candidateAMarks",
                label: "Notes des candidats",
              },
              {
                url: "../../creates/newRegister",
                name: "centerCandSecretCodes",
                label: "Listes des Anonymats",
              },
            ],
          },
          {
            name: "resultsPahse",
            label: "Resultats",
            items: [
              {
                url: "../../show/genCenterResults",
                name: "generalCenterResults",
                label: "Généraux",
              },
              {
                url: "../../show/results/candidateResults/resultsByCandRegNo",
                name: "candREgNoResults",
                label: "Personel",
              },
            ],
          },
        ],
      },
    ],
  },

  "divider",
  {
    // url: "../../creates/newRegion",
    name: "candidateManagement",
    label: "Candidat",
    Icon: ReceiptIcon,
    items: [
      {
        url: "../../creates/newGroupCand",
        name: "candidateInfomation",
        label: "Reseignement Candidat",
      },
      {
        url: "../../creates/newGroupCand",
        name: "registerCandidateForExams",
        label: "S'iInscrire aux examens",
      },
      {
        url: "../../show/results/candidateResults/allResultsByCandCode",
        name: "candCodeResults",
        label: "Resultat candidat",
      },
    ],
  },

  "divider",
  {
    // url: "../../creates/newExaminer",
    name: "Examiner",
    label: "Examinateur",
    Icon: ReceiptIcon,
    items: [
      {
        // url: "../../creates/newExaminer",
        name: "examiner",
        label: "Renseignement",
        items: [
          {
            url: "../../creates/newExaminer",
            name: "createExaminer",
            label: "Cree Examinateur",
          },
          {
            url: "../../modify/modifyExaminer",
            name: "modifierExaminer",
            label: "Modifier Examinateur",
          },
        ],
      },
      {
        // url: "../../creates/newCenterExaminer",
        name: "registerExaminer",
        label: "Inscription",
        items: [
          {
            url: "../../creates/newCenterExaminer",
            name: "centerExaminer",
            label: "S'inscrire au Centre",
          },
          {
            url: "../../modify/modifyDivision",
            name: "modifierDivision",
            label: "Examinateur",
          },
          {
            url: "../../creates/newReport",
            name: "examinerReport",
            label: "Rapport ",
          },
        ],
      },
      {
        url: "../../creates/newReport",
        name: "examinerReport",
        label: "Rapport ",
        items: [
          { url: "../../creates/newRegion", label: "Cree Region" },
          {
            url: "../../modify/modifyRegion",
            name: "modifierRegion",
            label: "Modification",
          },
        ],
      },
      {
        url: "../../creates/newTown",
        name: "town",
        label: "Town",
        items: [
          { url: "../../creates/newRegion", label: "Cree Region" },
          {
            url: "../../modify/modifyRegion",
            name: "modifierRegion",
            label: "Modification",
          },
        ],
      },
    ],
  },
  "divider",
  {
    url: "../../creates/newCenter",
    name: "settings",
    label: "Settings",
    Icon: SettingsIcon,
    items: [
      { url: "../../creates/newCenter", name: "profile", label: "Profile" },
      { url: "../../creates/newCenter", name: "insurance", label: "Insurance" },
      "divider",
      {
        url: "../../creates/newCenter",
        name: "notifications",
        label: "Notifications",
        Icon: NotificationsIcon,
        items: [
          { url: "../../creates/newCenter", name: "email", label: "Email" },
          {
            url: "../../creates/newCenter",
            name: "desktop",
            label: "Desktop",
            Icon: DesktopWindowsIcon,
            items: [
              {
                url: "../../creates/newCenter",
                name: "schedule",
                label: "Schedule",
              },
              {
                url: "../../creates/newCenter",
                name: "frequency",
                label: "Frequency",
              },
            ],
          },
          { url: "../../creates/newCenter", name: "sms", label: "SMS" },
        ],
      },
    ],
  },
];

const LayoutDrawer = (props) => {
  const { window, children } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    // <div style={{ backgroundColor: "#044562", color: "#000" }}>
    // <div style={{ backgroundColor: "#abb", color: "#000" }}>
    // <div style={{ backgroundColor: "#a7beae", color: "#722620" }}>
    <div style={{ backgroundColor: "#829079", color: "#ede6b9" }}>
      <div className={classes.toolbar} />
      <Divider />
      <Sidebar items={items} />
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        // style={{ backgroundColor: "#64725b",color:"#ede6b9" }}
        // style={{ backgroundColor: "#fff", color: "#000" }}
        style={{ backgroundColor: "#b9925e", color: "#ede6b9" }}
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <Grid container>
            <Grid item xs={6} sm={9}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                variant="h6"
                component="h5"
                noWrap
                style={{ color: "#ede6b9" }}
                // color="textSecondary"
                //  color="textPrimary"
              >
                Sygefex-OBC
              </Typography>
            </Grid>
            <Grid className={classes.userName} item xs={6} sm={3}>
              <User>
                {({ data: { me } }) => (
                  <div>
                    {me ? (
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gridGap: "1rem",
                        }}
                      >
                        <Typography
                          style={{
                            display: "grid",
                            placeItems: "center",
                          }}
                          variant="body1"
                          component="h5"
                          noWrap
                        >
                          {me.name}
                        </Typography>
                        <Signout />
                      </div>
                    ) : (
                      <Link href="../../creates/login" passHref>
                        <Button
                          variant="outlined"
                          component="a"
                          style={{
                            backgroundColor: "#829079",
                            color: "#ede6b9",
                            textTransform: "none",
                          }}
                        >
                          Connexion
                        </Button>
                      </Link>
                    )}
                  </div>
                )}
              </User>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of urls. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>{children}</main>
    </div>
  );
};


export default LayoutDrawer;
