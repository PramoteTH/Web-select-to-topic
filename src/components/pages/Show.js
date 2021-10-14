import React, { useState } from 'react';
import '../../App.css';
import ImageGrid from '../ImageGrid';
import Modal from '../Modal';
import Footer from '../Footer';

function Show() {
  const [selectedImg, setSelectedImg] = useState(null);
  

    return (
        <>
      <div className="App">
        <div className="title">
            <br />
            <h2>Pictures</h2>
            <p>Pictures of views or attractions shared by your friends or yours.</p>
        </div><br />
        <ImageGrid setSelectedImg={setSelectedImg} />
        { selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div><br />
      <Footer />
      </>
    );
  }
export default Show;