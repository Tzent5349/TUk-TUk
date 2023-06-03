const Questions = () => {
  return (
    <div className="queryCollector my-10 ">
      <h1 className="text-center font-extrabold text-4xl mb-10">
        Got any doubts? Ask me
      </h1>
      <form className="flex flex-col gap-8 ml-auto shadow-2xl rounded-xl p-10">
        <div className="PersonInfo flex flex-col gap-8 items-center">
          <div className="name gap-8 flex flex-wrap md:flex-nowrap items-center">
            <label
              htmlFor="fname"
              className="flex flex-col justify-center w-full md:w-1/2"
            >
              &nbsp; First Name*
              <input type="text" name="fname" id="fname" />
            </label>

            <label
              htmlFor="lname"
              className="flex flex-col justify-center w-full md:w-1/2"
            >
              &nbsp; Last Name*
              <input type="text" name="lname" id="lname" />
            </label>
          </div>

          <label htmlFor="email" className="flex flex-col w-full">
            &nbsp; Email*
            <input type="email" name="email" id="email" />
          </label>

          <label htmlFor="phone" className="flex flex-col w-full">
            &nbsp; Phone Number
            <input type="number" name="phone" id="phone" />
          </label>
        </div>
        <div>
          <label htmlFor="question" className="flex flex-col w-full">
            &nbsp;Question
            <textarea name="question" id="question"></textarea>
          </label>
        </div>
        <p className="-mt-6">
          Mandatory fields are marked with an asterisk (*){" "}
        </p>

        <button className="w-full px-10 py-4 bg-primary text-neutral hover:bg-neutral-2 hover:text-action text-2xl tracking-wider font-black rounded-xl">
          Ask now
        </button>
      </form>
    </div>
  );
};

export default Questions;
