import React from 'react';
import {createUltimatePagination, ITEM_TYPES} from 'react-ultimate-pagination';
import FlatButton from 'material-ui/FlatButton';
import NavigationFirstPage from 'material-ui-icons/FirstPage';
import NavigationLastPage from 'material-ui-icons/LastPage';
import NavigationChevronLeft from 'material-ui-icons/ChevronLeft';
import NavigationChevronRight from 'material-ui-icons/ChevronRight';

const flatButtonStyle = {
  minWidth: 36
};

const Page = ({value, isActive, onClick}) => (
  <FlatButton style={flatButtonStyle} label={value.toString()} primary={isActive} onClick={onClick}/>
);

const Ellipsis = ({onClick}) => (
  <FlatButton style={flatButtonStyle} label="..." onClick={onClick}/>
);

const FirstPageLink = ({isActive, onClick}) => (
  <FlatButton style={flatButtonStyle} icon={<NavigationFirstPage/>} onClick={onClick}/>
);

const PreviousPageLink = ({isActive, onClick}) => (
  <FlatButton style={flatButtonStyle} icon={<NavigationChevronLeft/>} onClick={onClick}/>
);

const NextPageLink = ({isActive, onClick}) => (
  <FlatButton style={flatButtonStyle} icon={<NavigationChevronRight/>} onClick={onClick}/>
);

const LastPageLink = ({isActive, onClick}) => (
  <FlatButton style={flatButtonStyle} icon={<NavigationLastPage/>} onClick={onClick}/>
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
