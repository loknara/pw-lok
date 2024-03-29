import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Checkbox,
  ListItemText,
} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const TagFilter = ({ availableTags, onFilterChange }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedTags(typeof value === "string" ? value.split(",") : value);
    onFilterChange(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
      <InputLabel id="tag-multiple-checkbox-label" sx={{ color: "white" }}>
        Tags
      </InputLabel>
      <Select
        labelId="tag-multiple-checkbox-label"
        id="tag-multiple-checkbox"
        multiple
        value={selectedTags}
        onChange={handleChange}
        input={<OutlinedInput label="Tags" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
        sx={{
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "& .MuiSvgIcon-root": {
            // This targets the dropdown icon specifically
            color: "white", // Change dropdown icon color here
          },
        }}
      >
        {availableTags.map((tag) => (
          <MenuItem
            key={tag}
            value={tag}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "white",
                color: "white",
              }, // Styles for selected item
              "&.Mui-selected:hover": {
                backgroundColor: "white",
                color: "white",
              }, // Styles for selected item on hover
              "&:hover": { backgroundColor: "white", color: "white" }, // Styles for items on hover
            }}
          >
            <Checkbox
              checked={selectedTags.indexOf(tag) > -1}
              sx={{
                color: "black",
                "&.Mui-checked": { color: "black" },
              }}
            />
            <ListItemText primary={tag} sx={{ color: "black" }} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TagFilter;
