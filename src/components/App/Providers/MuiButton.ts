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
        // padding: '7px 16px',
        fontSize: '11px',
        lineHeight: '14px',
        fontWeight: 500,
        height: '28px',
      },
      '&.MuiButton-sizeMedium': {
        height: '32px',
        fontSize: '13px',
        lineHeight: '14px',
        fontWeight: 500,
      },
      '&.MuiButton-sizeLarge': {
        // padding: '12px 24px',
        fontSize: '1.2rem',
        height: '40px',
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
      '&.MuiButton-sizeSmall': {
        // padding: '7px 16px',
        fontSize: '11px',
        lineHeight: '14px',
        fontWeight: 500,
      },
      '&.MuiButton-sizeLarge': {
        // padding: '12px 24px',
        fontSize: '14px',
        maxHeight: '40px',
        fontWeight: 600,
        lineHeight: '16px',
      },
      '&.Mui-disabled': {
        background: 'rgba(48, 51, 66, 0.50)',
        color: 'rgba(82, 86, 110, 1)',
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
      fontSize: '20px',
      marginRight: 0,
      '& > *:nth-of-type(1)': {
        fontSize: '20px',
      },
    },
    endIcon: {
      // Define the size of the icon (adjust as needed)
      fontSize: '20px',
      '& > *:nth-of-type(1)': {
        fontSize: '20px',
      },
    },
  },
}
