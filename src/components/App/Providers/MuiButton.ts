import { colors } from '~/utils/colors'

export const MuiButton = {
  defaultProps: {
    disableElevation: true,
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      display: 'inline-flex',
      padding: '12px 20px',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      borderRadius: '200px',
      background: colors.BUTTON1,
      color: 'var(--Primary-Text, #fff)',
      fontFamily: 'Barlow',
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '8px',
      cursor: 'pointer',
      columnGap: '6px',
      '&:hover': {
        background: colors.BUTTON1_HOVER,
        color: colors.GRAY3,
        outline: 'none',
        boxShadow: 'none',
      },
      '&:focus': {
        outline: 'none',
        boxShadow: 'none',
        background: colors.BUTTON1_PRESS,
        color: colors.GRAY6,
      },
      '&:active': {
        outline: 'none',
        boxShadow: 'none',
        background: colors.BUTTON1_PRESS,
        color: colors.GRAY6,
      },
      '&.MuiButton-sizeSmall': {
        padding: '7px 16px',
        fontSize: '11px',
        fontWeight: 500,
      },
      '&.MuiButton-sizeLarge': {
        padding: '12px 24px',
        fontSize: '1.2rem',
      },

      '&.MuiButton-outlined': {},
    },
    outlined: {
      // Add your custom styles here for the outlined variant
      borderColor: colors.BUTTON1,
      borderWidth: '1px',
      backgroundColor: 'transparent',
      '&:hover': {
        borderColor: colors.BUTTON1_HOVER,
        backgroundColor: 'transparent',
        color: colors.GRAY3,
      },
      '&:active': {
        backgroundColor: colors.BUTTON1_PRESS,
        color: colors.GRAY6,
      },
    },
    containedSecondary: {
      // Your custom styles for the secondary contained button here
      backgroundColor: colors.PRIMARY_BLUE,
      borderRadius: '6px',
      color: 'white',
      '&:hover': {
        backgroundColor: colors.PRIMARY_BLUE_BORDER,
        color: colors.white,
      },
      '&:active': {
        backgroundColor: colors.BLUE_PRESS_STATE,
        color: colors.white,
      },
      '&:focus': {
        backgroundColor: colors.BLUE_PRESS_STATE,
        color: colors.white,
      },
    },
    textSecondary: {
      // Your custom styles for the secondary text button here
      color: 'purple',
      '&:hover': {
        color: 'darkpurple',
      },
    },
    startIcon: {
      // Define the size of the icon (adjust as needed)
      fontSize: '1em',
      marginRight: 0,
    },
    endIcon: {
      // Define the size of the icon (adjust as needed)
      fontSize: '1em',
    },
  },
}
