const SimpleForm = ({ title, name, formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };
  return (
    <div className="flex flex-col gap-3 w-full p-6 bg-white border border-slate-300 rounded-lg">
      <h2 className="text-left">{title}</h2>
      <input
        name={name}
        onChange={(e) => handleChange(e)}
        placeholder="Your answser"
        className="py-2 max-w-[50%] border-b-2 focus:outline-none focus:border-b-[black] duration-200"
      />
    </div>
  );
};

export default SimpleForm;
