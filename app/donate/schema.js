import * as yup from "yup";

export const customerSchema = yup.object({
  name: yup.string().required("Name is required"),

  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone is required"),

  email: yup.string().email("Invalid email").required("Email is required"),

  address: yup.string().required("Address is required"),

  country: yup.string().required("Country is required"),

  city: yup.string().required("City is required"),

  pincode: yup
    .string()
    .matches(/^[0-9]{6}$/, "Pincode must be 6 digits")
    .required("Pincode is required"),

  pan_number: yup
    .string()
    .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, "Invalid PAN format")
    .required("PAN is required"),

  amount: yup
    .number()
    .typeError("Amount must be a number")
    .positive("Amount must be greater than 0")
    .required("Amount is required"),
});