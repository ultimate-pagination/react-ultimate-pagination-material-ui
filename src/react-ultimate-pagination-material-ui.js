import React from 'react';
import {createUltimatePagination, ITEM_TYPES} from 'react-ultimate-pagination';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import NavigationFirstPage from 'material-ui-icons/FirstPage';
import NavigationLastPage from 'material-ui-icons/LastPage';
import NavigationChevronLeft from 'material-ui-icons/ChevronLeft';
import NavigationChevronRight from 'material-ui-icons/ChevronRight';

const flatButtonStyle = {
  minWidth: 36
};

const Page = ({value, isActive, onClick}) => (
  <Button style={flatButtonStyle} color={isActive ? 'primary' : ''} onClick={onClick}>
    {value.toString()}
  </Button>
);

const Ellipsis = ({onClick}) => (
  <Button style={flatButtonStyle} label="..." onClick={onClick}>
    ...
  </Button>
);

const FirstPageLink = ({isActive, onClick}) => (
  <IconButton style={flatButtonStyle} onClick={onClick}>
    <NavigationFirstPage/>
  </IconButton>
);

const PreviousPageLink = ({isActive, onClick}) => (
  <IconButton style={flatButtonStyle} onClick={onClick}>
    <NavigationChevronLeft/>
  </IconButton>
);

const NextPageLink = ({isActive, onClick}) => (
  <IconButton style={flatButtonStyle} onClick={onClick}>
    <NavigationChevronRight/>
  </IconButton>
);

const LastPageLink = ({isActive, onClick}) => (
  <IconButton style={flatButtonStyle} onClick={onClick}>
    <NavigationLastPage/>
  </IconButton>
);

const itemTypeToComponent = {
  [ITEM_TYPES.PAGE]: Page,
  [ITEM_TYPES.ELLIPSIS]: Ellipsis,
  [ITEM_TYPES.FIRST_PAGE_LINK]: FirstPageLink,
  [ITEM_TYPES.PREVIOUS_PAGE_LINK]: PreviousPageLink,
  [ITEM_TYPES.NEXT_PAGE_LINK]: NextPageLink,
  [ITEM_TYPES.LAST_PAGE_LINK]: LastPageLink
};

const UltimatePaginationMaterialUi = createUltimatePagination({itemTypeToComponent});

export default UltimatePaginationMaterialUi;
