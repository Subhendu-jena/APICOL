import welcomeImg from "../../assets/images/welcome-apicol-819x1024.png";
import bg1 from "../../assets/images/bg1.jpg";
import SlideInFromLeft from "../animation/SlideInFromLeft";
import SlideInFromRight from "../animation/SlideInFromRight";

export default function Welcome() {
  return (
    <section
      className="py-16  bg-gray-50 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="max-w-7xl items-center justify-center  mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <SlideInFromLeft className=" animate-slide-in-left p-5   ">
              <h6 className="text-orange-700 font-semibold mb-2 text-sm uppercase tracking-wide">
                Welcome to
              </h6>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 leading-tight">
                The Agricultural Promotion and Investment Corporation of Odisha
                Limited (APICOL)
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                <p>
                  It was established on <strong>01-03-1996</strong> as envisaged
                  in State Agriculture Policy 1996. It started functioning since{" "}
                  <strong>01-06-1996</strong> with the sole objective of
                  promoting agro-based industries/food processing industries
                  including commercial agriculture/horticulture/animal
                  husbandry/fisheries.
                </p>
                <p>
                  APICOL, a Government of Odisha undertaking, serves as a
                  promotional organisation for providing assistance to
                  agricultural enterprises in the state of Odisha. We promote
                  enterprises in agriculture within the state with suitable
                  guidance for project formulation, counseling, enterprise
                  development and assistance in project implementation.
                </p>
                <div className="pt-4">
                  <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-300 font-semibold">
                    Learn More About Us
                  </button>
                </div>
              </div>
          </SlideInFromLeft>

          <SlideInFromRight className="w-full p-5  animate-slide-in-right">
            {/* IMAGE */}
            <div className="relative group">
              <img
                src={welcomeImg}
                alt="Welcome to APICOL"
                className="rounded-lg shadow-xl w-full   object-fit  h-[30rem] transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent rounded-lg"></div> */}
            </div>
          </SlideInFromRight>
        </div>
      </div>
    </section>
  );
}
