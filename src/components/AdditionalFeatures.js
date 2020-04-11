import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className="container">
      <h4 className="title is-size-3">Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1"  >
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyItem={props.buyItem} />
          ))}
        </ol>
      ) : (
        <p>All Features Added!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
