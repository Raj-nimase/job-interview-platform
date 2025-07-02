import { useForm } from "react-hook-form";

const ResumeBuilder = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Resume Data:", data);
    // TODO: Save to backend or generate PDF
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Resume Builder</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Basic Info */}
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input {...register("name")} className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input type="email" {...register("email")} className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block font-medium mb-1">Phone</label>
            <input type="tel" {...register("phone")} className="w-full border rounded px-3 py-2" />
          </div>

          {/* Education */}
          <div>
            <label className="block font-medium mb-1">Education</label>
            <textarea {...register("education")} rows="3" className="w-full border rounded px-3 py-2" />
          </div>

          {/* Skills */}
          <div>
            <label className="block font-medium mb-1">Skills (comma separated)</label>
            <input {...register("skills")} className="w-full border rounded px-3 py-2" />
          </div>

          {/* Projects */}
          <div>
            <label className="block font-medium mb-1">Projects</label>
            <textarea {...register("projects")} rows="3" className="w-full border rounded px-3 py-2" />
          </div>

          {/* Submit */}
          <div className="flex gap-4 justify-center">
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Save Resume
            </button>
            <button
              type="button"
              onClick={() => reset()}
              className="bg-gray-300 px-6 py-2 rounded hover:bg-gray-400"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResumeBuilder;
