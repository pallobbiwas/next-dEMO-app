import Image from "next/image";
import React from "react";
import img1 from "../images/person/img.jpg";
import img2 from "../images/person/img2.jpg";

function Home() {
  return (
    <div>
      <section>
        <aside>
          <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <Image
                className="max-w-sm rounded-lg shadow-2xl"
                src={img1}
                alt="Picture of the author"
              />
              <div className="ml-32">
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="text-red-600">Read More...</button>
              </div>
            </div>
          </div>
        </aside>
        <aside>
          <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <Image
                className="max-w-sm rounded-lg shadow-2xl"
                src={img2}
                alt="Picture of the author"
              />
              <div className="mr-32">
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="text-red-600">Read More...</button>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default Home;
