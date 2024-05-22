import React from "react";
import conservationTips from "../../../Data/ConservationTips.json";

function Tips() {
  // Check if conservationTips array exists and has at least one element
  if (!Array.isArray(conservationTips) || conservationTips.length === 0) {
    return <div>No conservation tips available.</div>;
  }

  const tipData = conservationTips[0]; // Assuming there's only one set of tips in the array

  // Check if tipData object contains the expected keys
  if (!tipData || !tipData.title || !tipData.introduction || !tipData.problems || !tipData.solutions || !tipData.conclusion) {
    return <div>Invalid conservation tips data.</div>;
  }

  return (
    <>
      <h1>{tipData.title}</h1>
      
      <h2>Introduction</h2>
      <p>{tipData.introduction.importance}</p>

      <h2>Problems</h2>
      <div>
        <h3>Plastic Pollution</h3>
        <p>
          <strong>Fact:</strong> {tipData.problems.plastic_pollution.fact}
        </p>
        <p>
          <strong>Impact:</strong> {tipData.problems.plastic_pollution.impact}
        </p>
      </div>
      <div>
        <h3>Overfishing</h3>
        <p>
          <strong>Fact:</strong> {tipData.problems.overfishing.fact}
        </p>
        <p>
          <strong>Impact:</strong> {tipData.problems.overfishing.impact}
        </p>
      </div>

      <h2>Solutions</h2>
      <div>
        <h3>Eat Sustainable Seafood</h3>
        <p>{tipData.solutions.eat_sustainable_seafood.description}</p>
        <ul>
          {tipData.solutions.eat_sustainable_seafood.tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Be a Responsible Tourist</h3>
        <p>{tipData.solutions.be_a_responsible_tourist.description}</p>
        <ul>
          <li>
            Avoid buying:{" "}
            {tipData.solutions.be_a_responsible_tourist.avoid_buying.join(", ")}
          </li>
          <li>
            Choose travel providers based on:
            <ul>
              {tipData.solutions.be_a_responsible_tourist.choose_travel_providers.criteria.map(
                (criterion, index) => (
                  <li key={index}>{criterion}</li>
                )
              )}
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h3>Reduce Carbon Footprint</h3>
        <p>
          <strong>Problem:</strong>{" "}
          {tipData.solutions.reduce_carbon_footprint.problem}
        </p>
        <p>
          <strong>Impact:</strong>{" "}
          {tipData.solutions.reduce_carbon_footprint.impact}
        </p>
        <ul>
          {tipData.solutions.reduce_carbon_footprint.tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Minimize Single-Use Plastics</h3>
        <p>{tipData.solutions.minimize_single_use_plastics.description}</p>
        <ul>
          {tipData.solutions.minimize_single_use_plastics.examples.map(
            (example, index) => (
              <li key={index}>{example}</li>
            )
          )}
        </ul>
        <ul>
          {tipData.solutions.minimize_single_use_plastics.tips.map(
            (tip, index) => (
              <li key={index}>{tip}</li>
            )
          )}
        </ul>
      </div>
      <div>
        <h3>Spread the Word</h3>
        <p>
          <strong>Importance:</strong>{" "}
          {tipData.solutions.spread_the_word.importance}
        </p>
        <ul>
          {tipData.solutions.spread_the_word.actions.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </div>

      <h2>Conclusion</h2>
      <p>{tipData.conclusion.call_to_action}</p>
    </>
  );
}

export default Tips;
