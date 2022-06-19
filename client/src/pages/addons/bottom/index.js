import { useState } from "react";
import { ButtonBase } from "@mui/material";
import { Box, Pagination, Icon } from "../../../components";
import { useSearchParams } from "react-router-dom";
import { root, buttonContainer, buttonIcon, pagination } from "./styles";

const Default = (props) => {
  const {
    search,
    count,
    page,
    onSetPage,
    onSearch,
    setShow,
    showBack,
    ...other
  } = props;

  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOnClick = () => {
    if (showSearch) {
      if (typeof onSearch === "function") {
        onSearch(searchValue);
      }
    }
    setShowSearch((prev) => !prev);
  };

  const handleOnHide = () => {
    setShowSearch(false);
  };

  const handleOnSearch = (value) => {
    if (typeof onSearch === "function") {
      onSearch(value);
    }
  };

  const handleOnClickPayment = () => {
    setShow((prev) => !prev);
  };

  const handleOnClickBack = () => {
    setSearchParams(
      searchParams.get("pageArticle")
        ? {
            pageArticle: searchParams.get("pageArticle"),
          }
        : {}
    );
  };

  return (
    <Box sx={root} {...other}>
      <Box sx={buttonContainer}>
        <ButtonBase
          onClick={showBack ? handleOnClickBack : handleOnClickPayment}
        >
          <Icon
            textIcon={showBack ? "reply" : ""}
            sx={showBack ? buttonIcon : null}
          />
        </ButtonBase>
      </Box>
      {search && showSearch ? (
        search({
          value: searchValue,
          setValue: setSearchValue,
          onHide: handleOnHide,
          onSearch: handleOnSearch,
        })
      ) : (
        <Pagination
          center
          sx={pagination}
          count={count}
          page={page}
          onChange={(event, page) => {
            if (typeof onSetPage === "function") {
              onSetPage(page);
            }
          }}
        />
      )}
      <Box sx={buttonContainer}>
        <ButtonBase onClick={handleOnClick}>
          <Icon textIcon="search" sx={buttonIcon} />
        </ButtonBase>
      </Box>
    </Box>
  );
};

export default Default;
