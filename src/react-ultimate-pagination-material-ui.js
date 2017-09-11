import React from 'react';
import {createUltimatePagination, ITEM_TYPES} from 'react-ultimate-pagination';
import jss from 'jss';
import classnames from 'classnames';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import NavigationFirstPage from 'material-ui-icons/FirstPage';
import NavigationLastPage from 'material-ui-icons/LastPage';
import NavigationChevronLeft from 'material-ui-icons/ChevronLeft';
import NavigationChevronRight from 'material-ui-icons/ChevronRight';

const {classes} = jss
  .createStyleSheet({
    button: {
      height: 36,
      width: 36,
      minWidth: 36
    },
    wrapper: {
      display: 'flex'
    }
  })
  .attach();

export default function ({buttonClass, wrapperClass, wrapperComponent} = {}) {
  const buttonClasses = classnames(classes.button, buttonClass)
  const wrapperClasses = classnames(classes.wrapper, wrapperClass)

  const Page = ({value, isActive, onClick}) => (
    <Button className={buttonClasses} color={isActive ? 'primary' : 'default'} onClick={onClick}>
      {value.toString()}
    </Button>
  );

  const Ellipsis = ({onClick}) => (
    <Button className={buttonClasses} label="..." onClick={onClick}>
      ...
    </Button>
  );

  const FirstPageLink = ({isActive, onClick}) => (
    <IconButton className={buttonClasses} onClick={onClick}>
      <NavigationFirstPage/>
    </IconButton>
  );

  const PreviousPageLink = ({isActive, onClick}) => (
    <IconButton className={buttonClasses} onClick={onClick}>
      <NavigationChevronLeft/>
    </IconButton>
  );

  const NextPageLink = ({isActive, onClick}) => (
    <IconButton className={buttonClasses} onClick={onClick}>
      <NavigationChevronRight/>
    </IconButton>
  );

  const LastPageLink = ({isActive, onClick}) => (
    <IconButton className={buttonClasses} onClick={onClick}>
      <NavigationLastPage/>
    </IconButton>
  );

  function WrapperComponent(props) {
    // default style here (use {display: 'flex'} to horizontally align `Button` and `IconButton`)
    return wrapperComponent || <div className={wrapperClasses}>{props.children}</div>
  };

  const itemTypeToComponent = {
    [ITEM_TYPES.PAGE]: Page,
    [ITEM_TYPES.ELLIPSIS]: Ellipsis,
    [ITEM_TYPES.FIRST_PAGE_LINK]: FirstPageLink,
    [ITEM_TYPES.PREVIOUS_PAGE_LINK]: PreviousPageLink,
    [ITEM_TYPES.NEXT_PAGE_LINK]: NextPageLink,
    [ITEM_TYPES.LAST_PAGE_LINK]: LastPageLink
  };

  return createUltimatePagination({itemTypeToComponent, WrapperComponent});
}
