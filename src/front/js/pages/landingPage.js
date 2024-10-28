import React from 'react';

export const WelcomeSection = () => {
  return (
    <div className="welcome-section text-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-start">
            <h1 className="display-3">Welcome to Leafy Love</h1>
            <p>Explore the enchanting world of house and garden plants to transform your home into a lovely green haven!</p>
          </div>
          <div className="col-md-6">
            <img 
              src="https://heyrooted.com/cdn/shop/articles/plant_pots.jpg?v=1640713768" 
              alt="House Plant" 
              className="img-fluid organic-shape w-100 glow-hover" 
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 order-md-2 text-md-start">
            <h1 className="display-3">Explore</h1>
            <p>Find the perfect house or garden plants to match your lifestyle and space. Explore options tailored to your needs—whether it’s low-maintenance plants for busy schedules, pet-safe greenery, or lush foliage to enhance air quality. Discover plants that thrive in any light level, boost wellness, and bring natural beauty to your home and garden.</p>
          </div>
          <div className="col-md-6 order-md-1">
            <img 
              src="https://greenboog.com/wp-content/uploads/2022/12/Humidity-min.jpeg" 
              alt="House Plant" 
              className="img-fluid organic-shape w-100 glow-hover" 
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-start">
            <h1 className="display-3">Inspiration Hub</h1>
            <p>Dive into a lush collection of plant-focused blogs, where style meets greenery, and trends blend with wellness. Discover the latest in plant care, decor inspiration, and eco-friendly living as experts and enthusiasts share insights on everything from interior plant styling to the health benefits of indoor greenery.</p>
          </div>
          <div className="col-md-6">
            <img 
              src="https://heyrooted.com/cdn/shop/articles/plant_pots.jpg?v=1640713768" 
              alt="House Plant" 
              className="img-fluid organic-shape w-100 glow-hover" 
            />
          </div>
        </div>
        </div>
        </div>
  );
};

export default WelcomeSection;

