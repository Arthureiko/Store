import { shirt } from "@/app/utils/store";
import Image from "next/image";

function Container({ toggleModal }: any) {
  return (
    <div className="flex p-4 gap-2 flex-wrap md justify-center">
      {shirt.map((shirt: any) => (
        <div
          key={shirt.id}
          className="flex flex-col bg-white border justify-between pt-10 p-6"
          style={{ width: "350px", height: "540px", borderRadius: "8px" }}
        >
          <button
            onClick={() => toggleModal(shirt)}
            style={{
              overflow: "hidden",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Image src={shirt.img} alt={shirt.name} width={300} />
          </button>

          <div>
            <p className="text-sm font-semibold">{shirt.name}</p>
            <p className="text-sm opacity-50">{shirt.description}</p>
            <p className="text-lg font-bold mt-2">{`R$ ${shirt.price}`}</p>
            <p className="text-xs opacity-50">{shirt.priceParcel}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Container;
