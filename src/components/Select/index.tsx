import styled from "styled-components";
import { colors } from "~/utils/colors";
import Select from "react-dropdown-select";

const StyledSelect = styled(Select)`
  &.react-dropdown-select {
    background: ${colors.primaryBlueBorder};
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    color: ${colors.white};
    border: none;
    width: 100%;

    .react-dropdown-select-clear {
      display: none;
    }

    &.hasSelected {
      .react-dropdown-select-clear {
        display: block;
      }
    }

    &:hover {
      opacity: 1;
      box-shadow: 0 0 10px 2px ${colors.primaryBlueBorder};
    }

    .react-dropdown-select-input::placeholder {
      font-size: 14px;
      font-weight: 600;
      color: ${colors.white};
    }
  }

  .react-dropdown-select-clear {
    &:hover {
      color: ${colors.white};
      opacity: 0.7;
    }
  }

  .react-dropdown-select-input {
    width: 100%;
  }

  &.hasSelected {
    .react-dropdown-select-input {
      display: none;
    }
  }

  .react-dropdown-select-dropdown {
    background: ${colors.primaryBlueBorder};
    border: none;
    border-radius: 12px;
    width: 100%;
    .react-dropdown-select-item {
      border: none;
      & + & {
        border-bottom: 1px solid #fff !important;
      }
    }

    .react-dropdown-select-item-selected {
      background: ${colors.white};
      color: ${colors.primaryBlueBorder};
      border: none;
    }
  }
`;

export default StyledSelect;