const AboutUs = () => {
  return (
    <div className="flex gap-10 bg-gray-200 px-4 py-2  ">
      <div className="text-right w-1/2 border-solid border-r-[1px] border-black pr-4">
        <p className="text-xl font-semibold">Welcome to Finix</p>
        <h1 className="text-4xl font-bold my-2 ">
          Motorcycle repair & custom services
        </h1>
        <p>
          We are a full service shop and parts department including Aftermarket
          Parts and OEM / Dealer (Honda, Kawasaki, Suzuki, Yamaha, and Harley
          Davidson) parts and apparel. With over 30 Years combined experience we
          can tackle any repair or service that you require no matter how small
          or large of a job it may be.
        </p>
        <button className="btn btn-outline px-7 my-6">About Us</button>
      </div>
      <div className="w-1/2">
        <div className="">
          <p className="text-xl font-semibold italic mt-10">
            I wanted to THANK the Team for servicing and repairing my Harley
            Davidson on such short notice. The window works just like new.It is
            good to know that there are Service companies out there that still
            stand behind their work and their service
          </p>
          <div className="flex gap-5 mt-10">
            <img
              className="h-[50px] w-[50px] rounded-full"
              src="https://i.ibb.co/MRW4TjS/image4.jpg"
              alt=""
            />
            <div>
              <h2 className="font-bold text-lg">Daniel Nguyen</h2>
              <p>Vietnamese client</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
