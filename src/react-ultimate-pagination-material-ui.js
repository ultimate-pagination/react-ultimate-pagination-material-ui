import React from 'react';
import {createUltimatePagination, ITEM_TYPES} from 'react-ultimate-pagination';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import NavigationFirstPage from 'material-ui-icons/FirstPage';
import NavigationLastPage from 'material-ui-icons/LastPage';
import NavigationChevronLeft from 'material-ui-icons/ChevronLeft';
import NavigationChevronRight from 'material-ui-icons/ChevronRight';

export default function ({buttonStyle}) {
  const Page = ({value, isActive, onClick}) => (
    <Button style={buttonStyle} color={isActive ? 'primary' : 'default'} onClick={onClick}>
      {value.toString()}
    </Button>
  );

  const Ellipsis = ({onClick}) => (
    <Button style={buttonStyle} label="..." onClick={onClick}>
      ...
    </Button>
  );

  const FirstPageLink = ({isActive, onClick}) => (
    <IconButton style={buttonStyle} onClick={onClick}>
      <NavigationFirstPage/>
    </IconButton>
  );

  const PreviousPageLink = ({isActive, onClick}) => (
    <IconButton style={buttonStyle} onClick={onClick}>
      <NavigationChevronLeft/>
    </IconButton>
  );

  const NextPageLink = ({isActive, onClick}) => (
    <IconButton style={buttonStyle} onClick={onClick}>
      <NavigationChevronRight/>
    </IconButton>
  );

  const LastPageLink = ({isActive, onClick}) => (
    <IconButton style={buttonStyle} onClick={onClick}>
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

  return createUltimatePagination({itemTypeToComponent});
}
