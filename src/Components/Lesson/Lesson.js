import React from "react";
import Footer from "../ShareFile/Footer/Footer";
import Navbar from "../ShareFile/Navbar/Navbar";
import "./Lesson.css";

const Lesson = () => {
  return (
    <section id="lesson">
      <Navbar></Navbar>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-8 col-md-12">
            <iframe
              width="750"
              height="425"
              src="https://www.youtube.com/embed/FwmuhNTrJO4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-lg-4 col-md-12">
            <div class="scrollbar" id="style-1">
              <div class="force-overflow">
                <strong>
                  <ol>
                    <li>Web Design Font end developer Bangla Tutorial</li>
                    <hr />

                    <li>Bangla HTML Tutorial 1 : Introduction to HTML</li>
                    <hr />
                    <li>Bangla HTML Tutorial 2 : Tag, element & attribute</li>
                    <hr />
                    <li>Bangla HTML Tutorial 3 : HTML এর সাধারণ গঠন</li>
                    <hr />
                    <li>Bangla HTML Tutorial 4 : First HTML webpage</li>
                    <hr />
                    <li>Bangla HTML Tutorial 5 : Heading | Paragrap</li>
                    <hr />
                    <li>Bangla HTML Tutorial 6 : HTML Style and color</li>
                    <hr />
                    <li>Bangla HTML Tutorial 7 : Test Formatting Tag (part-1)</li>
                    <hr />
                    <li>Bangla HTML Tutorial 8 : Test Formatting Tag (part-2)</li>
                    <hr />
                    <li>Bangla HTML Tutorial 9 : HTML Validator</li>
                    <hr />
                    <li>Bangla HTML Tutorial 10 : How to write bangla in webpage</li>
                    <hr />
                    <li>Bangla HTML Tutorial 11 : Entity | Pretag | Comment</li>
                    <hr />
                    <li>Bangla HTML Tutorial 12 : Symbole and Emoji in a webpage</li>
                    <hr />
                    <li>Bangla HTML Tutorial 13 : Font style in webpage</li>
                    <hr />
                  </ol>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Lesson;
