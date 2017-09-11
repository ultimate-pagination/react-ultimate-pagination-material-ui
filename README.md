# react-ultimate-pagination-material-ui

React.js pagination component with Material UI theme

## usage

```
import createUltimatePagination from 'react-ultimate-pagination-material-ui'

// all args are optional
const Pagination = createUltimatePagination(
  {
    buttonClass,
    wrapperClass,
    wrapperComponent
  }
)

//...

<Pagination
  currentPage={page.currentPage}
  totalPages={page.totalPages}
  boundaryPagesRange={1}
  siblingPagesRange={1}
  hidePreviousAndNextPageLinks={false}
  hideFirstAndLastPageLinks={false}
  hideEllipsis={false}
  onChange={this.handlePage}
/>

//...
```
> - `wrapperComponent` defaults to a `div` if not specified
> - use `wrapperClass` to style default `div` __or__ pass styled `wrapperComponent`
> - `wrapperClass` will be ignored if `wrapperComponent` is passed
