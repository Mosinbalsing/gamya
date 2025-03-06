import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductCard from "./ProductCard";

// Product data
const products = {
    Necklace: [
      {
        id: 1,
        name: "Blossom bouquet flower",
        price: 1550.0,
        originalPrice: 1800.0,
        image: "assets/placeholder.svg?height=300&width=300",
        isNew: true,
        discount: null,
      },
      {
        id: 2,
        name: "Golden Lakshmi pendant",
        price: 1250.0,
        originalPrice: 1400.0,
        image: "assets/placeholder.svg?height=300&width=300",
        isNew: true,
        discount: 10,
      },
      {
        id: 3,
        name: "Ruby studded necklace",
        price: 1800.0,
        originalPrice: 2000.0,
        image: "assets/placeholder.svg?height=300&width=300",
        isNew: true,
        discount: 15,
      },
      {
        id: 4,
        name: "Emerald classic chain",
        price: 1350.0,
        originalPrice: 1500.0,
        image: "assets/placeholder.svg?height=300&width=300",
        isNew: true,
        discount: 10,
      },
    ],
    Earrings: [
      {
        id: 5,
        name: "Pearl drop earrings",
        price: 850.0,
        originalPrice: 950.0,
        image: "assets/placeholder.svg?height=300&width=300",
        isNew: true,
        discount: 10,
      },
      {
        id: 6,
        name: "Gold flower studs",
        price: 750.0,
        originalPrice: 900.0,
        image: "assets/placeholder.svg?height=300&width=300",
        isNew: true,
        discount: 15,
      },
      {
        id: 7,
        name: "Diamond jhumkas",
        price: 1200.0,
        originalPrice: 1350.0,
        image: "assets/placeholder.svg?height=300&width=300",
        isNew: true,
        discount: null,
      },
      {
        id: 8,
        name: "Emerald chandbali",
        price: 950.0,
        originalPrice: 1100.0,
        image: "assets/placeholder.svg?height=300&width=300",
        isNew: true,
        discount: 10,
      },
    ],
    Bangles: [
      {
        id: 9,
        name: "Hyacinth white stick",
        price: 900.0,
        originalPrice: 1100.0,
        image: "assets/placeholder.svg?height=300&width=300",
        isNew: true,
        discount: 15,
      },
      {
        id: 10,
        name: "Gold plated bangles",
        price: 1100.0,
        originalPrice: 1250.0,
        image: "assets/placeholder.svg?height=300&width=300",
        isNew: true,
        discount: 10,
      },
      {
        id: 11,
        name: "Ruby studded kada",
        price: 1300.0,
        originalPrice: 1500.0,
        image: "assets/placeholder.svg?height=300&width=300",
        isNew: true,
        discount: null,
      },
      {
        id: 12,
        name: "Pearl bracelet",
        price: 850.0,
        originalPrice: 950.0,
        image: "assets/placeholder.svg?height=300&width=300",
        isNew: true,
        discount: 10,
      },
    ],
    Anklets: [
      {
        id: 13,
        name: "Silver bell anklet",
        price: 650.0,
        originalPrice: 750.0,
        image: "assets/placeholder.svg?height=300&width=300",
        isNew: true,
        discount: 10,
      },
      {
        id: 14,
        name: "Gold chain anklet",
        price: 750.0,
        originalPrice: 850.0,
        image: "assets/placeholder.svg?height=300&width=300",
        isNew: true,
        discount: null,
      },
      {
        id: 15,
        name: "Pearl drop payal",
        price: 550.0,
        originalPrice: 650.0,
        image: "assets/placeholder.svg?height=300&width=300",
        isNew: true,
        discount: 15,
      },
      {
        id: 16,
        name: "Traditional silver payal",
        price: 600.0,
        originalPrice: 700.0,
        image: "assets/placeholder.svg?height=300&width=300",
        isNew: true,
        discount: 10,
      },
    ],
  }

const categories = Object.keys(products);

export default function JewellerySection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [animateProducts, setAnimateProducts] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,   
    });
  }, []);

  const handleCategoryChange = (category) => {
    setAnimateProducts(false);
    setTimeout(() => {
      setActiveCategory(category);
      setAnimateProducts(true);
    }, 50);
  };

  return (
    <section className="container mx-auto py-16 px-14 sm:w-[1180px]">
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-4xl font-serif text-amber-900 mb-3">Jewellery Category</h2>
        <p className="text-amber-800 max-w-2xl mx-auto">
          Accumsan vitae pede lacus ut ullamcorper sollicitudin quisque libero
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="200">
        <div className="inline-flex border-b border-amber-200">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? "text-amber-800 border-b-2 border-amber-600"
                  : "text-amber-700 hover:text-amber-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products[activeCategory].map((product, index) => (
          <div
            key={product.id}
            data-aos={animateProducts ? "fade-up" : ""}
            data-aos-delay={100 + index * 100}
            className="transition-all duration-500"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
