import React from "react";
import "./Gallery.css";

import gallery1 from "../../assets/imeges/gallery1 .jpeg"
import gallery2 from "../../assets/imeges/gallery2.jpeg";
import gallery3 from "../../assets/imeges/gallery3.jpeg";
import gallery4 from "../../assets/imeges/gallery4.jpeg";
import gallery5 from "../../assets/imeges/gallery5.jpeg";
import gallery6 from "../../assets/imeges/gallery6.jpeg";
import gallery7 from "../../assets/imeges/gallery7.jpeg";
import gallery8 from "../../assets/imeges/gallery8.jpeg";
import gallery9 from "../../assets/imeges/gallery9.jpeg";
import gallery10 from "../../assets/imeges/gallery10.jpeg";
import gallery11 from "../../assets/imeges/gallery11.jpeg";
import gallery12 from "../../assets/imeges/gallery12.jpeg";
import gallery13 from "../../assets/imeges/gallery13.jpeg";
import gallery14 from "../../assets/imeges/gallery12.jpeg";
import gallery15 from "../../assets/imeges/gallery13.jpeg";
import gallery16 from "../../assets/imeges/gallery14.jpeg";
import gallery17 from "../../assets/imeges/gallery15.jpeg";
import gallery18 from "../../assets/imeges/gallery16.jpeg";
import gallery19 from "../../assets/imeges/gallery17.jpeg";
import gallery20 from "../../assets/imeges/gallery18.jpeg";
import gallery21 from "../../assets/imeges/gallery19.jpeg";
import gallery22 from "../../assets/imeges/gallery20.jpeg";
import gallery23 from "../../assets/imeges/gallery21.jpeg";
import gallery24 from "../../assets/imeges/gallery22.jpeg";
import gallery25 from "../../assets/imeges/gallery23.jpeg";
import gallery26 from "../../assets/imeges/gallery24.jpeg";
import gallery27 from "../../assets/imeges/gallery25.jpeg";
import gallery28 from "../../assets/imeges/gallery26.jpeg";
import gallery29 from "../../assets/imeges/gallery27.jpeg";
import gallery30 from "../../assets/imeges/gallery28.jpeg";
import gallery31 from "../../assets/imeges/gallery29.jpeg";
import gallery32 from "../../assets/imeges/gallery30.jpeg";
import gallery33 from "../../assets/imeges/gallery31.jpeg";
const gallery = [
  { id: 1, image: gallery1 },
  { id: 2, image: gallery2 },
  { id: 3, image: gallery3 },
  { id: 4, image: gallery4 },
  { id: 5, image: gallery5 },
  { id: 6, image: gallery6 },
  { id: 7, image: gallery7 },
  { id: 8, image: gallery8 },
  { id: 9, image: gallery9 },
  { id: 10, image: gallery10 },
  { id: 11, image: gallery11 },
  { id: 12, image: gallery12 },
  { id: 13, image: gallery13 },
  { id: 14, image: gallery14 },
  { id: 15, image: gallery15 },
  { id: 16, image: gallery16 },
  { id: 17, image: gallery17 },
  { id: 18, image: gallery18 },
  { id: 19, image: gallery19 },
  { id: 20, image: gallery20 },
  { id: 21, image: gallery21 },
  { id: 22, image: gallery22 },
  { id: 23, image: gallery23 },
  { id: 24, image: gallery24 },
  { id: 25, image: gallery25 },
  { id: 26, image: gallery26 },
  { id: 27, image: gallery27 },
  { id: 28, image: gallery28 },
  { id: 29, image: gallery29 },
  { id: 30, image: gallery30 },
  { id: 31, image: gallery31 },
  { id: 32, image: gallery32 },
  { id: 33, image: gallery33 },
];
function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="container">

        <div className="gallery-heading">
          <span>OUR GALLERY</span>

          <h2>
            Explore Our Manufacturing <span>Gallery</span>
          </h2>

          <p>
            Take a look at our precision moulds, CNC machining,
            VMC machining, copper electrodes and advanced
            manufacturing facilities.
          </p>
        </div>

        <div className="gallery-grid">
          {gallery.map((item) => (
            <div className="gallery-card" key={item.id}>

              <img
                src={item.image}
                alt={`Gallery ${item.id}`}
              />

              <div className="gallery-overlay">
                <h4>Krisha Enterprises</h4>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;