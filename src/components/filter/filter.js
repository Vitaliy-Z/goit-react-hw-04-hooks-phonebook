import PropTypes from 'prop-types';

function Filter({ handleFilterInput }) {
  return (
    <label className="label">
      Find contacts by name
      <input
        className="input"
        name="filter"
        type="text"
        onChange={handleFilterInput}
      ></input>
    </label>
  );
}

Filter.propTypes = {
  handleFilterInput: PropTypes.func,
};

export default Filter;
