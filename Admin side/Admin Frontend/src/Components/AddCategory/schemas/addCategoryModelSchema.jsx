import * as Yup from "yup";

export const addCategoryModelSchema = Yup.object({
  category_name: Yup.string().min(3).required("Please enter category name"),
  category_description: Yup.string()
    .min(5)
    .required("Please enter description of category"),
});
