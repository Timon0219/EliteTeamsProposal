import { useState } from "react";
import HeaderForm from "../../components/headerform";
import SimpleForm from "../../components/simpleform";
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "",
    service: "",
    phone: "",
  });
  const handleSubmit = () => {
    setFormData({ name: "", email: "", industry: "", service: "", phone: "" });
  };
  return (
    <div className="flex justify-center w-full h-full px-4 py-4 bg-slate-200">
      <form
        className="flex flex-col gap-4 w-[400px] md:w-[600px]"
        onSubmit={() => handleSubmit()}
      >
        <HeaderForm />
        <SimpleForm
          title="Name"
          name="name"
          value={formData.name}
          formData={formData}
          setFormData={setFormData}
        />
        <SimpleForm
          title="Industry"
          name="industry"
          value={formData.industry}
          formData={formData}
          setFormData={setFormData}
        />
        <SimpleForm
          title="What service or team do you want?"
          name="service"
          value={formData.service}
          formData={formData}
          setFormData={setFormData}
        />
        <SimpleForm
          title="Email"
          name="email"
          value={formData.email}
          formData={formData}
          setFormData={setFormData}
        />
        <SimpleForm
          title="Phone Number"
          name="phone"
          value={formData.phone}
          formData={formData}
          setFormData={setFormData}
        />
        <div className="flex justify-between w-full">
          <button
            type="submit"
            className="px-6 py-2 bg-black hover:bg-white text-white font-semibold hover:text-black rounded-lg duration-200"
          >
            Submit
          </button>
          <button className="px-6 py-2  font-semibold hover:text-white hover:bg-black rounded-lg duration-200">
            Clear form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
