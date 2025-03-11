import { InView } from "/components/motion-primitives/in-view";

const Colors = () => {
  return (
    <div className="wrapper grid lg:grid-cols-2 place-items-center grid-cols-1 gap-8 p-8">
      {/* Columna 1: Texto */}
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
        }}
        viewOptions={{ margin: '0px 0px -200px 0px' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="lg:text-start lg:text-5xl font-semibold text-[#00409A] text-3xl mt-9 text-center">
          <p>Descubre la amplia <br />variedad de colores</p>
        </div>
      </InView>

      {/* Columna 2: Efecto de tarjetas */}
      <div className="wrapper w-full">
        <div className="inner" style={{ "--quantity": 10 }}>
          <div
            className="cards"
            style={{ "--index": 0, "--color-card": "142, 249, 252" }}
          >
            <div className="img"></div>
          </div>
          <div
            className="cards"
            style={{ "--index": 1, "--color-card": "142, 252, 204" }}
          >
            <div className="img"></div>
          </div>
          <div
            className="cards"
            style={{ "--index": 2, "--color-card": "142, 252, 157" }}
          >
            <div className="img"></div>
          </div>
          <div
            className="cards"
            style={{ "--index": 3, "--color-card": "215, 252, 142" }}
          >
            <div className="img"></div>
          </div>
          <div
            className="cards"
            style={{ "--index": 4, "--color-card": "252, 252, 142" }}
          >
            <div className="img"></div>
          </div>
          <div
            className="cards"
            style={{ "--index": 5, "--color-card": "252, 208, 142" }}
          >
            <div className="img"></div>
          </div>
          <div
            className="cards"
            style={{ "--index": 6, "--color-card": "252, 142, 142" }}
          >
            <div className="img"></div>
          </div>
          <div
            className="cards"
            style={{ "--index": 7, "--color-card": "252, 142, 239" }}
          >
            <div className="img"></div>
          </div>
          <div
            className="cards"
            style={{ "--index": 8, "--color-card": "204, 142, 252" }}
          >
            <div className="img"></div>
          </div>
          <div
            className="cards"
            style={{ "--index": 9, "--color-card": "142, 202, 252" }}
          >
            <div className="img"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colors;