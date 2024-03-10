import * as Yup from "yup";

export const addFoodModelSchema = Yup.object({
  itemName: Yup.string().min(3).required("Please enter item name"),
  itemPrice: Yup.number().max(1000).required("Please enter price"),
  category_name: Yup.string().required("Please Select Category"),
  itemImage: Yup.mixed(),
  itemDescription: Yup.string(),
});
