import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProductCard from "./ProductCard";

export default function ProductGrid({allproducts}) {
  const initialProducts = allproducts;

  const [products, setProducts] = useState(initialProducts);
  const [sortOrder, setSortOrder] = useState("default");
  const [priceRange, setPriceRange] = useState([0, 2500]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2500);

  useEffect(() => {
    const prices = initialProducts.map(product => product.price);
    setMinPrice(Math.min(...prices));
    setMaxPrice(Math.max(...prices));
    setPriceRange([Math.min(...prices), Math.max(...prices)]);
  }, []);

  useEffect(() => {
    let filteredProducts = [...initialProducts].filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    if (sortOrder === "price-asc") filteredProducts.sort((a, b) => a.price - b.price);
    if (sortOrder === "price-desc") filteredProducts.sort((a, b) => b.price - a.price);
    if (sortOrder === "name-asc") filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    if (sortOrder === "discount") filteredProducts.sort((a, b) => (b.discount || 0) - (a.discount || 0));
    setProducts(filteredProducts);
  }, [sortOrder, priceRange]);

  return (
    <div className="container-fluid mx-auto px-4 py-8 bg-amber-50">
      <h1 className="text-2xl font-bold text-amber-800 mb-6">Featured Products</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filter Bar (Sidebar on larger screens, on top on mobile) */}
        <div className="lg:block lg:w-auto lg:mr-6 bg-white p-4 rounded-lg shadow-sm mb-6 lg:mb-0 sticky top-0"> {/* Increased width here */}
          <h2 className="text-lg font-semibold text-amber-800 mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 sm:">
            <div>
              <label className="block text-sm font-medium mb-2">Sort By</label>
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger className="w-full"><SelectValue placeholder="Default sorting" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default sorting</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="name-asc">Name: A to Z</SelectItem>
                  <SelectItem value="discount">Discount</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</label>
              <Slider defaultValue={[minPrice, maxPrice]} min={minPrice} max={maxPrice} step={50} value={priceRange} onValueChange={setPriceRange} className="py-4" />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>

      {products.length === 0 && <div className="text-center py-12"><p className="text-lg text-gray-600">No products match your filters.</p></div>}
    </div>
  );
}

