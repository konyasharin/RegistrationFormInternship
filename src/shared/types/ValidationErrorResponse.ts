export type ValidationErrorResponse = {
  detail: {
    loc: (string | number)[];
    msg: string;
    type: string;
  }[];
};
