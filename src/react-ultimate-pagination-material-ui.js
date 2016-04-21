import React from 'react';
import {createUltimatePagination, ITEM_TYPES} from 'react-ultimate-pagination';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationFirstPage from 'material-ui/svg-icons/navigation/first-page';
import NavigationLastPage from 'material-ui/svg-icons/navigation/last-page';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const Page = ({value, isActive, onClick}) => (
  <FlatButton label={value.toString()} primary={isActive} onClick={onClick}/>
);

const Ellipsis = () => (
  <FlatButton label="..." disabled={true} />
);

const FirstPageLink = ({isActive, onClick}) => (
  <IconButton disabled={isActive} onClick={onClick}>
    <NavigationFirstPage/>
  </IconButton>
);

const PreviousPageLink = ({isActive, onClick}) => (
  <IconButton disabled={isActive} onClick={onClick}>
    <NavigationChevronLeft/>
  </IconButton>
);

const NextPageLink = ({isActive, onClick}) => (
  <IconButton disabled={isActive} onClick={onClick}>
    <NavigationChevronRight/>
  </IconButton>
);

const LastPageLink = ({isActive, onClick}) => (
  <IconButton disabled={isActive} onClick={onClick}>
    <NavigationLastPage/>
  </IconButton>
);

const itemTypeToMaterialUiComponent = {
  [ITEM_TYPES.PAGE]: Page,
  [ITEM_TYPES.ELLIPSIS]: Ellipsis,
  [ITEM_TYPES.FIRST_PAGE_LINK]: FirstPageLink,
  [ITEM_TYPES.PREVIOS_PAGE_LINK]: PreviousPageLink,
  [ITEM_TYPES.NEXT_PAGE_LINK]: NextPageLink,
  [ITEM_TYPES.LAST_PAGE_LINK]: LastPageLink
};

const UltimatePaginationMaterialUi = createUltimatePagination(itemTypeToMaterialUiComponent);

export default UltimatePaginationMaterialUi;
