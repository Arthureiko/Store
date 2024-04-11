import Image from "next/image";

function Modal({ toggleModal, product }: any) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 max-w-md w-full mx-4 rounded-lg">
        <button
          onClick={toggleModal}
          className="flex items-end justify-end w-full"
        >
          X
        </button>
        <h2
          className="text-lg font-semibold mb-4"
          style={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          Camisa da {product.name}
        </h2>
        <div
          style={{
            overflow: "hidden",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Image src={product.img} alt={product.name} width={300} />
        </div>

        <p className="text-sm text-gray-500 mb-4">{product.description}</p>
        <p className="text-lg font-bold">{`R$ ${product.price}`}</p>
      </div>
    </div>
  );
}
export default Modal;
