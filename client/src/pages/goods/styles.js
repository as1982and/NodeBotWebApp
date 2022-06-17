const root = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flexGrow: 1,
  width: "100%",
};

const containerButton = (show, add = false) => {
  const height = 50;

  const def = {
    minWidth: 0,
    transition: "all 0.2s ease-out",
    borderRadius: 2,
    height,
    maxHeight: height,
    padding: "unset",
    "&:hover": {
      backgroundColor: add ? "#f8a917" : "#e64d44",
    },
    backgroundColor: add ? "#f8a917" : "#e64d44",
  };

  if (add) {
    return {
      ...def,
      flexBasis: show ? "100%" : "45%",
    };
  }
  return {
    ...def,
    flexBasis: show ? "0%" : "45%",
    visibility: show ? "hidden" : "visible",
    opacity: show ? 0 : 1,
  };
};

const rootTypography = {
  variant: "button",
  gutterBottom: true,
  sx: { marginTop: 1, flexGrow: 1, textAlign: "center" },
};

const rootContainer = {
  flexDirection: "column",
  alignItems: "center",
  display: "flex",
  height: "100%",
  justifyContent: "space-between",
};

const rootContainerButton = {
  width: "100%",
  minHeight: 25,
  display: "flex",
  justifyContent: "space-between",
};

const grid = { overflow: "auto" };
const baseLine = { flexGrow: 1 };

export {
  root,
  grid,
  baseLine,
  rootContainerButton,
  rootContainer,
  rootTypography,
  containerButton,
};
