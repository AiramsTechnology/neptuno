import { TextEffect } from "/components/motion-primitives/text-effect";

function ImgPrincipal() {
  return (
    <header className="header w-full max-w-screen" id="inicio">
      <div className="w-[100%] overflow-hidden mx-auto h-screen">
        <div className="text-start p-0 h-full flex items-center justify-center text-[#272770]">
          <h1 className="text-[45px] mb-[15px] font-bold mx-10 md:text-7xl md:font-semibold lg:mr-64 lg:font-semibold" translate="no">
            <div className="flex flex-col space-y-0">
              <TextEffect
                per="char"
                delay={0.5}
                variants={{
                  container: {
                    hidden: {
                      opacity: 0,
                    },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05,
                      },
                    },
                  },
                  item: {
                    hidden: {
                      opacity: 0,
                      rotateX: 90,
                      y: 10,
                    },
                    visible: {
                      opacity: 1,
                      rotateX: 0,
                      y: 0,
                      transition: {
                        duration: 0.2,
                      },
                    },
                  },
                }}
              >
                NEPTUNO
              </TextEffect>
              <TextEffect per="char" delay={1.5}>
              Diseñadas para resistir,
              </TextEffect>
              <TextEffect per="char" delay={2.5}>
              hechas para durar.
              </TextEffect>
            </div>
          </h1>
        </div>
      </div>
    </header>
  );
}

export default ImgPrincipal;
