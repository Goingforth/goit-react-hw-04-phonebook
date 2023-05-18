import { TitleFind, FieldFind } from './Filter.styled';

const Filter = ({ handleChange, value }) => {
  return (
    <div>
      <TitleFind>Find contacts by name</TitleFind>
      <FieldFind
        id="standard-basic"
        label="Standard"
        variant="standard"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
