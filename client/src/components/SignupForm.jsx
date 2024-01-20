import { useFormik } from "formik";
import { signupFormSchema } from "../validations/SignupFormValidation";
import axios from "axios";
import ImagePreview from "./ImagePreview";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  const formData = new FormData();
  formData.append("name", values.name);
  formData.append("email", values.email);
  formData.append("age", values.age);
  formData.append("password", values.password);
  formData.append("photo", values.image);
  const res = await axios.post(
    "http://localhost:4000/api/v1/users/register",
    formData,
    {
      header: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  console.log("submitted");
};

const SignupForm = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      image: "",
    },
    validationSchema: signupFormSchema,
    onSubmit,
  });
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className=" flex flex-col gap-8 min-h-[300px] min-w-[500px] py-8 px-8 border rounded-xl "
    >
      <div className="flex flex-col gap-1">
        <label className="text-white">Name</label>
        <input
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          id="name"
          className={
            errors.name && touched.name
              ? "border-2 border-red-500 " + "py-4 px-2 rounded-xl"
              : "py-4 px-2 rounded-xl"
          }
          type="text"
          placeholder="Enter your name."
        />
        {errors.name && touched.name && (
          <span className="text-red-500">{errors.name}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-white">Email</label>
        <input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
          className={
            errors.email && touched.email
              ? "border-2 border-red-500 " + "py-4 px-2 rounded-xl"
              : "py-4 px-2 rounded-xl"
          }
          type="email"
          placeholder="Enter your email."
        />
        {errors.email && touched.email && (
          <span className="text-red-500">{errors.email}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-white">Age</label>
        <input
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          id="age"
          className={
            errors.age && touched.age
              ? "border-2 border-red-500 " + "py-4 px-2 rounded-xl"
              : "py-4 px-2 rounded-xl"
          }
          type="number"
          placeholder="Enter your age."
        />
        {errors.age && touched.age && (
          <span className="text-red-500">{errors.age}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-white">Password</label>
        <input
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="password"
          className={
            errors.password && touched.password
              ? "border-2 border-red-500 " + "py-4 px-2 rounded-xl"
              : "py-4 px-2 rounded-xl"
          }
          type="password"
          placeholder="Enter your password"
        />
        {errors.name && touched.name && (
          <span className="text-red-500">{errors.password}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-white">Confirm Password</label>
        <input
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          id="confirmPassword"
          className={
            errors.confirmPassword && touched.confirmPassword
              ? "border-2 border-red-500 " + "py-4 px-2 rounded-xl"
              : "py-4 px-2 rounded-xl"
          }
          type="password"
          placeholder="Confirm your password."
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword}</span>
        )}
      </div>
      <input
        className="text-white"
        type="file"
        name="image"
        onChange={(e) => setFieldValue("image", e.target.files[0])}
      />
      {errors.image && <span className="text-red-500">{errors.image}</span>}
      <div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="text-black bg-white w-full py-4 rounded-xl transition ease-in delay-70 hover:bg-gray-200 hover:translate-y-2"
        >
          Create my account
        </button>
      </div>
      {values.image && <ImagePreview file={values.image} />}
    </form>
  );
};

export default SignupForm;
