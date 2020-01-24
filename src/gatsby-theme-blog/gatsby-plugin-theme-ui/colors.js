import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"
// import { createMuiTheme } from "@material-ui/core";


const darkBlue = `#007acc`
const lightBlue = `#66E0FF`
const blueGray = `#282c35`

// const theme = createMuiTheme({
//   typography: {
//     fontFamily: [
//         'Montserrat',
//         'sans-serif'
//       ].join(','),
//     },
//     ...
//   });
//
// export default theme;

export default merge(defaultThemeColors, {
  text: blueGray,
  primary: darkBlue,
  heading: blueGray,
  modes: {
    dark: {
      background: blueGray,
      primary: lightBlue,
      highlight: lightBlue,
    },
  },
})
