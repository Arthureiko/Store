import { useState } from "react";
import Modal from "@/app/components/Modal";
import Container from "@/app/components/Container";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Store() {
  const [filters, setFilters] = useState({
    product: "",
    price: 0,
    size: "",
    color: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    img: "",
  });

  const toggleModal = (value: any) => {
    setIsOpen(!isOpen);
    setProduct({
      name: value.name,
      img: value.img,
      price: value.price,
      description: value.descriptionDetails,
    });
  };

  const handleFilterChange = (type: any, value: any) => {
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      [type]: value,
    }));
  };

  return (
    <div className="flex flex-col justify-between">
      <div>
        <Header />
        <main className="flex flex-col md:flex-row gap-4 pt-24">
          <Sidebar handleFilterChange={handleFilterChange} price={filters} />
          <Container toggleModal={toggleModal} />
        </main>
        {isOpen && <Modal product={product} toggleModal={toggleModal} />}
      </div>

      <Footer />
    </div>
  );
}

export default Store;
