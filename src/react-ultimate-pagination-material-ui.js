import React from 'react';
import {createUltimatePagination, ITEM_TYPES} from 'react-ultimate-pagination';
import FlatButton from 'material-ui/FlatButton';
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
  <FlatButton icon={<NavigationFirstPage/>} disabled={isActive} onClick={onClick}/>
);

const PreviousPageLink = ({isActive, onClick}) => (
  <FlatButton icon={<NavigationChevronLeft/>} disabled={isActive} onClick={onClick}/>
);

const NextPageLink = ({isActive, onClick}) => (
  <FlatButton icon={<NavigationChevronRight/>} disabled={isActive} onClick={onClick}/>
);

const LastPageLink = ({isActive, onClick}) => (
  <FlatButton icon={<NavigationLastPage/>} disabled={isActive} onClick={onClick}/>
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
