import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // light: '#f37920',
      main: '#db8741',  //6a8c64
      dark: "#42403e",
      light: "#ffffff",
      //contrastText: '#f37920'

      //'#7E33E0', //violet
      // "#FB2E86", //pink
      // "#ffffbb", //white

      //theme 2 
      // main: '#d68d7c',
      // dark: "#42403e",
      // light: "#ffffff",
    },
    secondary: {
      // light: '#0066ff',
      main: '#006d7a', //violet
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#ffcc00',

      //theme 2 
      //main: '#464062', 
    },
    error: {
      main: '#ff0000',
    },
    text: {
      primary: '#4484a8',//changed the hover color have to check it e9c78e
      secondary: '#8A8FB9',
      tertiary: '#f7ac6e'

      //theme 2 
      // primary: '#D1B000',//changed the hover color have to check it e9c78e
      // secondary: '#8A8FB9'
    },
  },
  typography: {
    caption1: {
      fontSize: '0.6rem',  // Define your custom caption font siz// Define your custom caption font weight
    },
  },
  shape: {
    borderRadius: 0, // Set the border radius to 0 for sharp edges
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: 'grey',
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "red"
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          '&:hover': {
            color: '#6a8c64',
            textDecoration: "none",
            cursor: "pointer"
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: '20px',
        },
      }
    },
  },
  typography: {
    fontFamily: [
      'Josefin Sans',
      'sans-serif',
    ].join(','),
  },
  // overrides: {
  //   MuiListItemIcon: {
  //     root: {
  //       minWidth: '20px',
  //     },
  //   },
  // },
  // overrides: {
  //   MuiInput: {
  //     // Name of the styleSheet
  //     input: {
  //       '&$disabled': {
  //         color: '#ccc',
  //         //  ::-webkitTextFillColor:'#ccc'
  //         '-webkitTextFillColor': '#ccc',
  //       },
  //     },
  //     underline: {
  //       '&:hover:not($disabled):before': {
  //         borderBottomWidth: '1px !important',
  //         borderColor: '#023974 !important',
  //         height: 1,
  //       },
  //     },
  //   },
  //   MuiDialog: {
  //     paper: {
  //       margin: '30px',
  //     },
  //   },
  //   MuiSnackbarContent: {
  //     message: {
  //       padding: '0',
  //     },
  //   },
  //   MuiButton: {
  //     root: {
  //       textTransform: 'initial',
  //       fontWeight: 'normal',
  //       padding: '10px 16px',
  //       borderRadius: '0',
  //     },
  //     outlined: {
  //       borderColor: '#fff',
  //     },
  //   },

  //   // MuiListItem: {
  //   // 	root: {
  //   // 		marginBottom: "5px",
  //   // 		background: "#deefff",
  //   // 		color: "#3f3f3f",
  //   // 		// borderRight: "4px solid #deefff",
  //   // 		'&:hover': {
  //   // 			background: "#043a75 !important",
  //   // 			color: "#fff",
  //   // 			borderRight: "4px solid #f37920"
  //   // 		},
  //   // 	},
  //   // 	default: {
  //   // 		paddingTop: '8px',
  //   // 		paddingBottom: '8px'
  //   // 	},
  //   // },
  //   MuiTableCell: {
  //     root: {
  //       padding: '4px 7px 4px 7px',
  //       border: '1px solid #efe9e9',
  //       borderBottom: '1px solid #fff',
  //       textAlign: 'center',
  //       fontSize: '14px',
  //     },
  //     body: {
  //       fontSize: '13px',
  //     },
  //   },
  //   MuiCollapse: {
  //     container: {
  //       overflow: 'hidden',
  //     },
  //     entered: {
  //       overflow: 'visible',
  //     },
  //   },
  //   MuiSelect: {
  //     selectMenu: {
  //       '&:focus': {
  //         background: 'transparent !important',
  //       },
  //     },
  //   },
  //   MuiMenuItem: {
  //     root: {
  //       height: 'auto',
  //       overflow: 'visible',
  //       whiteSpace: 'initial',
  //       '&:nth-child(even)': {
  //         background: '#f9f9f9',
  //       },
  //     },
  //   },
  //   MuiCheckbox: {
  //     root: {
  //       height: '30px',
  //     },
  //     // disabled: {
  //     //   color: 'rgba(255, 152, 0, 0.65) !important'
  //     // }
  //   },
  //   MuiFormControlLabel: {
  //     root: {
  //       marginRight: '0',
  //     },
  //   },
  //   MuiMenu: {
  //     paper: {
  //       maxWidth: '358px',
  //     },
  //   },
  //   MuiFormLabel: {
  //     focused: {
  //       color: '#333 !important',
  //     },
  //   },
  //   MuiExpansionPanelDetails: {
  //     root: {
  //       padding: '8px 10px 24px',
  //     },
  //   },
  //   MuiExpansionPanel: {
  //     root: { // Name of the rule
  //       background: '#fff !important',
  //       borderRadius: '5px !important',
  //       margin: '16px 0',
  //       '&:before': {
  //         display: 'none',
  //       },
  //     },
  //   },
  //   MuiExpansionPanelSummary: {
  //     root: {
  //       background: '#f0f0f0',
  //     },
  //     expanded: {
  //       minHeight: 'initial !important',
  //     },
  //     content: {
  //       margin: '12px 0 !important',
  //     },
  //   },
  //   MuiIconButton: {
  //     root: {
  //       height: '35px',
  //     },
  //   },
  //   MuiTypography: {
  //     body1: { // Name of the rule
  //       color: '#757474',
  //     },
  //   },
  // },
});

export default theme;
