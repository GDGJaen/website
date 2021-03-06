import data from "/data/team";

function Team() {
  let list = [];
  for (let organizer of data.teamMembers) {
    list.push(
      <div className="p-2 w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center pb-6">
        <img src={organizer.picture} className="h-24 w-24 rounded-full" />
        <div>{organizer.name}</div>
        <div className="flex justify-center">
          {(() => {
            let socialItems = [];
            data.socialList.map((socialItem) => {
              if (organizer.social.hasOwnProperty(socialItem)) {
                socialItems.push(
                  <a
                    className="p-2 hover:bg-gray-100 rounded-full"
                    target="_blank"
                    href={organizer.social[socialItem]}
                  >
                    <img src={data.socialIcons[socialItem]} className="h-6" />
                  </a>
                );
              }
            });
            return socialItems;
          })()}
        </div>
      </div>
    );
  }
  return (
    <div className="p-4 md:p-6" id="team">
      <h1 className="text-blue-500 text-3xl md:text-4xl md:pl-4">Equipo</h1>
      <div className="pt-4 flex flex-wrap">{list}</div>
    </div>
  );
}

export default Team;
