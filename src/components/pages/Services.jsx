import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";

AOS.init();

const staffImages = [
  "/staff/staff1.png",
  "/staff/staff2.png",
  "/staff/staff3.png",
  "/staff/staff4.png",
  "/staff/staff5.png",
  "/staff/staff6.png",
  "/staff/staff7.png",
  "/staff/staff8.png",
];

export const Services = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    console.log("imae")
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
  };

  return (
    <>
      <section className="staff">
        <div className="container">
          <h1 className="staff-title" style={{ marginBottom: "5px" }} data-aos="fade-down" data-aos-duration="1000">
            STAFF BASKETCENTER 2025
          </h1>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={3}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              1024: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              480: { slidesPerView: 1 },
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {staffImages.map((image, index) => (
              <SwiperSlide key={index} onClick={() => openModal(image)}>
                <div className="staff-card">
                  <img src={image} alt={`Staff ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Modal */}
      <Modal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(10px)", // Efecto difuminado de fondo
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Oscurece el fondo
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            width: "45vw", // 80% del ancho de la pantalla
            maxWidth: "900px", // No más de 900px para mantener la calidad
            borderRadius: "12px",
            p: 2,
            boxShadow: "lg",
            backgroundColor: "black", // Fondo negro para que combine con la paleta
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Botón de cerrar */}
          <ModalClose
            onClick={() => setModalIsOpen(false)}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "white",
              color: "black",
              borderRadius: "50%",
              width: "35px",
              height: "35px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "red",
                color: "white",
              },
            }}
          >
            ✕
          </ModalClose>

          {/* Imagen del modal */}
          <img
            src={selectedImage}
            alt="Staff en grande"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Sheet>
      </Modal>

    </>
  );
};
