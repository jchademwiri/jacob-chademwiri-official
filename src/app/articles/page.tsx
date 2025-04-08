export default function ArticlesPage() {
  return (
    <div className="container mx-auto">
      <div>
        <label htmlFor="name" className=" block font-medium text-gray-700">
          Name
        </label>
        <input type="text" name="name" id="name" className="w-3xl h-9 border-accent" />
        <label htmlFor="email" className=" block font-medium text-gray-700">
          Email
        </label>
        <input type="email" name="email" id="email" className="w-3xl h-9 border-accent" />
        <label htmlFor="message" className=" block font-medium text-gray-700">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className=" w-3xl "
          rows={10}
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
