import React from 'react';


export const WelcomeSection = () => {
  return (
    <div className="welcome-section text-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-start">
            <h1 className="display-3">Welcome to Leafy Love</h1>
            <p>Explore the extraordinary world of garden and houseplants to begin making your home a lovely green haven!</p>
          </div>
          <div className="col-md-6">
            <img 
              src="https://heyrooted.com/cdn/shop/articles/plant_pots.jpg?v=1640713768" 
              alt="House Plant" 
              className="img-fluid organic-shape w-100" 
            />
          </div>
        </div>
      </div>
    </div>


  );
};

export default WelcomeSection;

