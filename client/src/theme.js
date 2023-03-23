import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#060606',
          light: '#373737',
          dark: '#040404',
          contrastText: '#FFFFFF',
        },
        secondary: {
          main: '#e00e28',
          light: '#E63E53',
          dark: '#9C091C',
          contrastText: '#FFFFFF',
        },
      },
      typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      },
});
export default theme;