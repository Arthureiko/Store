import React from "react";

const Sidebar = ({ handleFilterChange, price }: any) => {
  return (
    <div className="bg-white p-4 border md:max-w-[300px] w-full h-full sm:w-300px md:h-[100vh] ">
      <h2 className="text-lg font-semibold mb-2">Filtrar Produtos</h2>
      <div className="mb-4">
        <label htmlFor="product" className="block text-sm font-medium">
          Produto:
        </label>
        <input
          type="text"
          id="product"
          onChange={(e) => handleFilterChange("product", e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium">
          Preço: R$ {price.price},00
        </label>
        <input
          type="range"
          id="price"
          min="0"
          max="1000"
          value={price.price}
          onChange={(e) => handleFilterChange("price", e.target.value)}
          className="w-full border rounded"
        />
        <div className="flex justify-between text-xs">
          <span>Min: 0</span>
          <span>Max: 1000</span>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="size" className="block text-sm font-medium">
          Tamanho:
        </label>
        <select
          id="size"
          onChange={(e) => handleFilterChange("size", e.target.value)}
          className="w-full border rounded px-2 py-1"
        >
          <option value="">Selecione</option>
          <option value="P">P</option>
          <option value="M">M</option>
          <option value="G">G</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="color" className="block text-sm font-medium">
          Cor:
        </label>
        <select
          id="color"
          onChange={(e) => handleFilterChange("color", e.target.value)}
          className="w-full border rounded px-2 py-1"
        >
          <option value="">Selecione</option>
          <option value="Vermelho">Vermelho</option>
          <option value="Verde">Verde</option>
          <option value="Azul">Azul</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
