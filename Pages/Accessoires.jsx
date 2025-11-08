import React, { useState } from "react";
import "./Accessories.css";

function Accessories({ addToCart }) {
  const allAccessories = [
    // Carpenter
    { id: 1, name: "Cordless drill", price: 1200, img: "src/assets/images/Carpenter/t1.png", category: "Carpenter" },
    { id: 2, name: "Carpenter's Square", price: 800, img: "src/assets/images/Carpenter/t2.png", category: "Carpenter" },
    { id: 3, name: "Measuring", price: 1200, img: "src/assets/images/Carpenter/t3.png", category: "Carpenter" },
    { id: 4, name: "large canvas/nylon", price: 800, img: "src/assets/images/Carpenter/t4.png", category: "Carpenter" },
    { id: 5, name: "Hammer", price: 1200, img: "src/assets/images/Carpenter/t5.png", category: "Carpenter" },
    { id: 6, name: "Glove", price: 800, img: "src/assets/images/Carpenter/t6.png", category: "Carpenter" },
    { id: 7, name: "Cordless drill", price: 1200, img: "src/assets/images/Carpenter/t7.png", category: "Carpenter" },
    { id: 8, name: "Carpenter's Square", price: 800, img: "src/assets/images/Carpenter/t8.png", category: "Carpenter" },
    { id: 9, name: "Measuring", price: 1200, img: "src/assets/images/Carpenter/t9.png", category: "Carpenter" },
    { id: 10, name: "large canvas/nylon", price: 800, img: "src/assets/images/Carpenter/t10.png", category: "Carpenter" },
    { id: 11, name: "Hammer", price: 1200, img: "src/assets/images/Carpenter/t11.png", category: "Carpenter" },
    { id: 12, name: "Glove", price: 800, img: "src/assets/images/Carpenter/t12.png", category: "Carpenter" },
    { id: 13, name: "Cordless drill", price: 1200, img: "src/assets/images/Carpenter/t13.png", category: "Carpenter" },
    { id: 14, name: "Carpenter's Square", price: 800, img: "src/assets/images/Carpenter/t14.png", category: "Carpenter" },
    { id: 15, name: "Measuring", price: 1200, img: "src/assets/images/Carpenter/t15.png", category: "Carpenter" },
    { id: 16, name: "large canvas/nylon", price: 800, img: "src/assets/images/Carpenter/t16.png", category: "Carpenter" },
    { id: 17, name: "Hammer", price: 1200, img: "src/assets/images/Carpenter/t17.png", category: "Carpenter" },
    { id: 18, name: "Glove", price: 800, img: "src/assets/images/Carpenter/t18.png", category: "Carpenter" },
    { id: 19, name: "Cordless drill", price: 1200, img: "src/assets/images/Carpenter/t19.png", category: "Carpenter" },
    { id: 20, name: "Carpenter's Square", price: 800, img: "src/assets/images/Carpenter/t20.png", category: "Carpenter" },
    { id: 21, name: "Measuring", price: 1200, img: "src/assets/images/Carpenter/t21.png", category: "Carpenter" },
    { id: 22, name: "large canvas/nylon", price: 800, img: "src/assets/images/Carpenter/t22.png", category: "Carpenter" },
    { id: 23, name: "Hammer", price: 1200, img: "src/assets/images/Carpenter/t23.png", category: "Carpenter" },
    { id: 24, name: "Glove", price: 800, img: "src/assets/images/Carpenter/t24.png", category: "Carpenter" },
    { id: 25, name: "Cordless drill", price: 1200, img: "src/assets/images/Carpenter/t25.png", category: "Carpenter" },
    { id: 26, name: "Carpenter's Square", price: 800, img: "src/assets/images/Carpenter/t26.png", category: "Carpenter" },
    { id: 27, name: "Measuring", price: 1200, img: "src/assets/images/Carpenter/t27.png", category: "Carpenter" },
    { id: 28, name: "large canvas/nylon", price: 800, img: "src/assets/images/Carpenter/t28.png", category: "Carpenter" },
    { id: 29, name: "Hammer", price: 1200, img: "src/assets/images/Carpenter/t29.png", category: "Carpenter" },

    // Housekeeping
    { id: 30, name: "Name blade", price: 500, img: "src/assets/images/HouseKeeping/ht1.png", category: "Housekeeping" },
    { id: 31, name: "Floor Squeegee", price: 700, img: "src/assets/images/HouseKeeping/ht2.png", category: "Housekeeping" },
    { id: 32, name: "Cleaning Cloths", price: 500, img: "src/assets/images/HouseKeeping/ht3.png", category: "Housekeeping" },
        { id: 33, name: "Name blade", price: 500, img: "src/assets/images/HouseKeeping/ht4.png", category: "Housekeeping" },
    { id: 34, name: "Floor Squeegee", price: 700, img: "src/assets/images/HouseKeeping/ht5.png", category: "Housekeeping" },
    { id: 35, name: "Cleaning Cloths", price: 500, img: "src/assets/images/HouseKeeping/h6.png", category: "Housekeeping" },
    { id: 36, name: "Name blade", price: 500, img: "src/assets/images/HouseKeeping/ht7.png", category: "Housekeeping" },
    { id: 37, name: "Floor Squeegee", price: 700, img: "src/assets/images/HouseKeeping/ht8.png", category: "Housekeeping" },
    { id: 38, name: "Cleaning Cloths", price: 500, img: "src/assets/images/HouseKeeping/ht9.png", category: "Housekeeping" },
    { id: 39, name: "Name blade", price: 500, img: "src/assets/images/HouseKeeping/ht10.png", category: "Housekeeping" },
    { id: 40, name: "Floor Squeegee", price: 700, img: "src/assets/images/HouseKeeping/ht11.png", category: "Housekeeping" },
    { id: 41, name: "Cleaning Cloths", price: 500, img: "src/assets/images/HouseKeeping/ht12.png", category: "Housekeeping" },
    { id: 42, name: "Name blade", price: 500, img: "src/assets/images/HouseKeeping/ht13.png", category: "Housekeeping" },
    { id: 44, name: "Floor Squeegee", price: 700, img: "src/assets/images/HouseKeeping/ht14.png", category: "Housekeeping" },
    { id: 45, name: "Cleaning Cloths", price: 500, img: "src/assets/images/HouseKeeping/ht15.png", category: "Housekeeping" },

    // Gardener
    { id: 46, name: "Compost Bin", price: 400, img: "src/assets/images/Gardener/gt1.png", category: "Gardener" },
    { id: 47, name: "Shovel / Spade", price: 900, img: "src/assets/images/Gardener/gt2.png", category: "Gardener" },
    { id: 48, name: "Compost Bin", price: 400, img: "src/assets/images/Gardener/gt3.png", category: "Gardener" },
    { id: 49, name: "Shovel / Spade", price: 900, img: "src/assets/images/Gardener/gt4.png", category: "Gardener" },
    { id: 50, name: "Compost Bin", price: 400, img: "src/assets/images/Gardener/gt5.png", category: "Gardener" },
    { id: 51, name: "Shovel / Spade", price: 900, img: "src/assets/images/Gardener/gt6.png", category: "Gardener" },
    { id: 52, name: "Compost Bin", price: 400, img: "src/assets/images/Gardener/gt7.png", category: "Gardener" },
    { id: 53, name: "Shovel / Spade", price: 900, img: "src/assets/images/Gardener/gt8.png", category: "Gardener" },
    { id: 54, name: "Compost Bin", price: 400, img: "src/assets/images/Gardener/gt9.png", category: "Gardener" },
    { id: 55, name: "Shovel / Spade", price: 900, img: "src/assets/images/Gardener/gt10.png", category: "Gardener" },
    { id: 56, name: "Compost Bin", price: 400, img: "src/assets/images/Gardener/gt11.png", category: "Gardener" },
    { id: 57, name: "Shovel / Spade", price: 900, img: "src/assets/images/Gardener/gt12.png", category: "Gardener" },
    { id: 58, name: "Compost Bin", price: 400, img: "src/assets/images/Gardener/gt13.png", category: "Gardener" },
    { id: 59, name: "Shovel / Spade", price: 900, img: "src/assets/images/Gardener/gt14.png", category: "Gardener" },
    { id: 60, name: "Compost Bin", price: 400, img: "src/assets/images/Gardener/gt15.png", category: "Gardener" },
    { id: 61, name: "Shovel / Spade", price: 900, img: "src/assets/images/Gardener/gt16.png", category: "Gardener" },

    // Electrician
    { id: 62, name: "Screwdrivers", price: 600, img: "src/assets/images/Electe/et1.png", category: "Electrician" },
    { id: 63, name: "Soldering Iron", price: 1500, img: "src/assets/images/Electe/et2.png", category: "Electrician" },
    { id: 64, name: "Screwdrivers", price: 600, img: "src/assets/images/Electe/et3.png", category: "Electrician" },
    { id: 65, name: "Soldering Iron", price: 1500, img: "src/assets/images/Electe/et4.png", category: "Electrician" },
    { id: 66, name: "Screwdrivers", price: 600, img: "src/assets/images/Electe/et5.png", category: "Electrician" },
    { id: 67, name: "Soldering Iron", price: 1500, img: "src/assets/images/Electe/et6.png", category: "Electrician" },
    { id: 68, name: "Screwdrivers", price: 600, img: "src/assets/images/Electe/et7.png", category: "Electrician" },
    { id: 69, name: "Soldering Iron", price: 1500, img: "src/assets/images/Electe/et8.png", category: "Electrician" },
    { id: 70, name: "Screwdrivers", price: 600, img: "src/assets/images/Electe/et9.png", category: "Electrician" },
    { id: 71, name: "Soldering Iron", price: 1500, img: "src/assets/images/Electe/et10.png", category: "Electrician" },
    { id: 72, name: "Screwdrivers", price: 600, img: "src/assets/images/Electe/et11.png", category: "Electrician" },
    { id: 73, name: "Soldering Iron", price: 1500, img: "src/assets/images/Electe/et12.png", category: "Electrician" },
    { id: 74, name: "Screwdrivers", price: 600, img: "src/assets/images/Electe/et13.png", category: "Electrician" },
    { id: 75, name: "Soldering Iron", price: 1500, img: "src/assets/images/Electe/et14.png", category: "Electrician" },

    // Device Repair
    { id: 76, name: "Screwdriver Set", price: 1200, img: "src/assets/images/Device Repair/dt2.png", category: "Device Repair" },
    { id: 77, name: "Clamp Meter", price: 800, img: "src/assets/images/Device Repair/dt3.png", category: "Device Repair" },
    { id: 78, name: "Screwdriver Set", price: 1200, img: "src/assets/images/Device Repair/dt4.png", category: "Device Repair" },
    { id: 79, name: "Clamp Meter", price: 800, img: "src/assets/images/Device Repair/dt5.png", category: "Device Repair" },
    { id: 80, name: "Screwdriver Set", price: 1200, img: "src/assets/images/Device Repair/dt6.png", category: "Device Repair" },
    { id: 81, name: "Clamp Meter", price: 800, img: "src/assets/images/Device Repair/dt7.png", category: "Device Repair" },
    { id: 82, name: "Screwdriver Set", price: 1200, img: "src/assets/images/Device Repair/dt8.png", category: "Device Repair" },
    { id: 83, name: "Clamp Meter", price: 800, img: "src/assets/images/Device Repair/dt9.png", category: "Device Repair" },
    { id: 84, name: "Screwdriver Set", price: 1200, img: "src/assets/images/Device Repair/dt10.png", category: "Device Repair" },

    // Plumber
    { id: 85, name: "Basin Wrench", price: 900, img: "src/assets/images/plumber/pt1.png", category: "Plumber" },
    { id: 86, name: "Pipe Threader", price: 900, img: "src/assets/images/plumber/pt2.png", category: "Plumber" },
    { id: 87, name: "Basin Wrench", price: 900, img: "src/assets/images/plumber/pt3.png", category: "Plumber" },
    { id: 88, name: "Pipe Threader", price: 900, img: "src/assets/images/plumber/pt4.png", category: "Plumber" },
    { id: 89, name: "Basin Wrench", price: 900, img: "src/assets/images/plumber/pt5.png", category: "Plumber" },
    { id: 90, name: "Pipe Threader", price: 900, img: "src/assets/images/plumber/pt6.png", category: "Plumber" },
    { id: 91, name: "Basin Wrench", price: 900, img: "src/assets/images/plumber/pt7.png", category: "Plumber" },
    { id: 92, name: "Pipe Threader", price: 900, img: "src/assets/images/plumber/pt8.png", category: "Plumber" },

  ];

  const categories = [...new Set(allAccessories.map(acc => acc.category))];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const filteredAccessories = allAccessories.filter(acc => acc.category === selectedCategory);

  return (
    <div className="accessories-container">
      <div className="container">
        <h2 className="text-center mb-4">Workers Accessories</h2>

        {/* Category Buttons */}
        <div className="category-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn me-2 mb-2 ${selectedCategory === cat ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accessories Grid */}
        <div className="row">
          {filteredAccessories.map((item) => (
            <div key={item.id} className="col-md-3 mb-4">
              <div className="card h-100">
                <img src={item.img} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Rs. {item.price}</p>
                  <button 
                    className="btn btn-success" 
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accessories;