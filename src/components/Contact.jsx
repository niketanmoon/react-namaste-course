const Contact = () => {
  return (
    <div>
      <h1 className="p-2 m-2 font-bold text-2xl">Contact Us Page</h1>
      <div>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="p-2 m-2 border-black border"
          />
          <input
            type="text"
            placeholder="Message"
            className="p-2 m-2 border-black border"
          />
          <button className="p-2 m-2 border-black border rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
