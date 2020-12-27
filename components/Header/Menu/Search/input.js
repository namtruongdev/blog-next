import React from "react"

import { connectSearchBox } from "react-instantsearch-dom"

import TextField from "@material-ui/core/TextField"

export default connectSearchBox(({ refine }) => {
  return (
    <form noValidate autoComplete="off">
      <TextField
        type="search"
        fullWidth
        className="SearchInput"
        onChange={event => refine(event.currentTarget.value)}
        id="standard-secondary"
        label="Tìm kiếm"
        color="secondary"
        aria-label="Tìm kiếm"
      />
    </form>
  )
})
