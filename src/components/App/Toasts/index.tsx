import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { colors } from "~/utils/colors";

export const Toasts = styled(ToastContainer)`
  .Toastify__toast {
    background-color: ${colors.body};
  }
  .Toastify__toast-body {
    background-color: ${colors.body};
    color: ${colors.white};
  }
  .Toastify__close-button {
    color: ${colors.white};
  }
  .Toastify__progress-bar--error {
    background-color: ${colors.primaryRed};
  }
  .Toastify__progress-bar--success {
    background-color: ${colors.primaryGreen};
  }
`;
