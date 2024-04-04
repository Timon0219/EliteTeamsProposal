import HeaderForm from "../../components/headerform";
import SimpleForm from "../../components/simpleform";
const Form = () => {
  return (
    <div className="flex justify-center w-full h-full px-4 py-4 bg-slate-200">
      <form className="flex flex-col gap-4 w-[400px] md:w-[600px]">
        <HeaderForm />
        <SimpleForm title="Name" />
        <SimpleForm title="Industry" />
        <SimpleForm title="What service or team do you want?" />
        <SimpleForm title="Email" />
        <SimpleForm title="Phone Number" />
        <div className="flex justify-between w-full">
          <button className="px-6 py-2 bg-black hover:bg-white text-white font-semibold hover:text-black rounded-lg duration-200">
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
