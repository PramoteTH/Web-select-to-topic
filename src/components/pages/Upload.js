import React, { useState } from 'react';
import '../../App.css';
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import { useContext } from 'react'
import Title from '../Title';
import UploadForm from '../UploadForm';
import ImageGrid from '../ImageGrid';
import Modal from '../Modal';
import Footer from '../Footer';

function Upload() {
  const { currentUser } = useContext(AuthContext);
  const [selectedImg, setSelectedImg] = useState(null);
  

    if (!currentUser) {
        return <Redirect to="/login" />;
    }
    return (
      <>
      <div className="App">
        <Title/>
        <UploadForm /><br />
        <ImageGrid setSelectedImg={setSelectedImg} />
        { selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div><br />
      <Footer />
      </>
    );
  }
export default Upload;