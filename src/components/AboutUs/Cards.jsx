const Card = [
  {
    id: 1,
    name: "Misión",
    info: "Ofrecer pinturas epóxicas de alta calidad, garantizando durabilidad, estética y protección para todo tipo de superficies.",
    code: "16-4022 TCX",
    color: "#8BADD3",
  },
  {
    id: 2,
    name: "Visión",
    info: "Ser la empresa líder en recubrimientos epóxicos, destacando por innovación, calidad y compromiso con el medio ambiente.",
    code: "16-5907 TCX",
    color: "#86A293",
  },
];

function Cards() {
  return (
    <div className="flex flex-wrap gap-16 justify-center p-11  ">
      {Card.map((card) => (
        <div key={card.id} className="card ">
          {/*parte de adelante de la card */}
          <div
            className="face front"
            style={{
              backgroundColor: "white",
              border: "1px solid black",
              borderRadius: "2rem",
            }}
          >
            <div
              className="h-60 w-[30vh] lg:w-[31vh] mx-auto mt-3"
              style={{
                backgroundColor: card.color,
                borderRadius: "2rem",
              }}
            ></div>

            <div className="text-start pl-10 grid gap-2 pt-2">
              <h2 className="text-lg font-semibold text-black ">{card.name}</h2>
              <p className="text-sm text-black">{card.code}</p>
            </div>
          </div>
          {/*parte posterior de la card */}
          <div
            className="face back bg-gray-900 text-white"
            style={{
              backgroundColor: card.color,
              border: "1px solid black",
              borderRadius: "2rem",
            }}
          >
            <div className=" grid place-content-center mt-7">
              <h2 className="text-4xl font-medium">{card.name}</h2>
              <p className="text-lg mx-6 font-light mt-3">{card.info}</p>
              <div className="h-0.5  bg-gray-300 my-5"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
