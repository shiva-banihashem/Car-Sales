import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { buyItem, removeFeature }   from "./actions/allActions.js";


const App = ({ car, additionalFeatures, additionalPrice,buyItem, removeFeature }) => {
  

  

  return (
    <>
    <section className="section">
    <div className="container ">
      
      <h1 className="center">
        My Car Sales Redux with Bulma
      </h1>
      
    </div>
    
  </section>

  <section className="section">
      <div className="container">
        
        <div className="columns">
          <div className="column">
            <div className="notification is-link ">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeFeature} />
        </div>
        </div>
        <div className="column">
        <div className="notification is-primary ">
        <AdditionalFeatures
          additionalFeatures={additionalFeatures} buyItem={buyItem} />
        </div>
        </div>
        </div>
        </div>
        </section>
          <div className=" notification is-warning">
        <Total car={car} additionalPrice={additionalPrice} />
          </div>
      
    </>
  );
  // return (
  //   <div className="boxes">
  //     <div className="box">
  //       <Header car={state.car} />
  //       <AddedFeatures car={state.car} />
  //     </div>
  //     <div className="box">
  //       <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
  //       <Total car={state.car} additionalPrice={state.additionalPrice} />
  //     </div>
  //   </div>
  // );
};
  

function mapStateToProps(state) {
  return {
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures,
    car: state.car
  };
}
export default connect(mapStateToProps, {buyItem,removeFeature})(App);

  
