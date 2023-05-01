import React from "react";
import Layout from "../components/Layout";
import Menu from "../components/Menu/Menu";
import Cart from "../components/Cart/Cart";

export default function About() {
  return (
    <div>
      <Layout>
        <div className="container mx-auto pb-6 bg-[#F9F9F9]">
          <div className="px-6 lg:px-8 pt-6 pb-10 mb-10 w-3/4 mx-auto bg-[#FFFFFF] shadow-sm rounded-b-sm">
            <p className="text-5xl text-[#A95414] pb-5 font-semibold leading-10 text-center w-full ">
              About
            </p>
            <hr />
            <div className="pt-5 ">
              <p className="text-[16px] leading-[26px] font-[300] Roboto tracking-[0.02em]">
                Founded in 2014, Made Solid is a home goods and accessories
                brand based in Los Angeles California featuring original designs
                by partners Peter Maxwell and Mia. Our collections focus on
                Peter Maxwell’s leatherwork, but include beautiful beaded
                jewelry of Antique African Trade Beads created by Mia. Nearly
                all of our pieces are made by hand, by us, in our Los Angeles
                studio.
              </p>
              <p className="text-[16px] leading-[26px] font-[300] Roboto tracking-[0.02em] pt-2">
                Our aesthetic is inspired by natural coastal California design,
                classic Western Americana, the simplicity of Japan and the
                traditions of friends from Mexico to West Africa. 90% of the
                leather we use is vegetable tanned saddle making leather from
                the Hermann Oak Tannery of St. Louis Missouri. This leather is
                tanned in an all natural process, using a “tea” of only water
                and oak tree bark. We use plant oils and beeswax to condition
                our work. Most leather colors are dyed or painted by hand using
                water-based, non-toxic leather specific dyes/paints.
              </p>
            </div>
          </div>
        </div>
        <aside>
            <Menu />
            <Cart />
          </aside>
      </Layout>
    </div>
  );
}
