export const addCount = (add) => {
  return {
    type: "ADD_COUNT",
    add: 1,
  };
};

export const subCount = (sub) => {
  return {
    type: "SUB_COUNT",
    sub: 1,
  };
};
