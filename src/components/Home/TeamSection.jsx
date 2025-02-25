import teamData from "../../data/teams/teams.json";

const TeamSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <p className="uppercase text-sm text-red-500 font-semibold">Our Team</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Experts In Their Field
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          The best professionals will work on your product.
          <br /> We can safely say that success is guaranteed to your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {teamData.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full"
              />
              <p className="text-lg font-semibold mt-4">{member.name}</p>
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href={member.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="zmdi zmdi-facebook text-blue-600 text-2xl"></i>
                </a>
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="zmdi zmdi-linkedin text-blue-500 text-2xl"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
