import React from 'react';
import { connect } from 'react-redux';

const isKnown = text => text && text !== 'unknown';

const CharacterWorld = ({ world }) =>
  <div id="character-world" className="col-md-6">
    <h1>World</h1>
    {isKnown(world.name) && <p>Name: {world.name}</p>}
    {isKnown(world.population) && <p>Population: {world.population}</p>}
    {isKnown(world.diameter) && <p>Diameter: {world.diameter}</p>}
    {isKnown(world.rotation_period) && <p>Day Length: {world.rotation_period}</p>}
    {isKnown(world.orbital_period) && <p>Year Length: {world.orbital_period}</p>}
    {isKnown(world.climate) && <p>Climate: {world.climate}</p>}
  </div>

const mapStateToProps = ({ character: { world } }) => ({
  world,
});

export default connect(mapStateToProps)(CharacterWorld);
