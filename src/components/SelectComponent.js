/* export default props =>
<select value={props.value} onChange={props.onChange}>
{props.items.map(val => (
<option value={val}>{val}</option>
))}
</select> */

export default function SelectComponent(props) {
    return (
      <select value={props.value} onChange={props.onChange}>
        {props.items.map((val, index) => (
          <option key={index} value={val}>
            {val}
          </option>
        ))}
      </select>
    );
  }
  

  