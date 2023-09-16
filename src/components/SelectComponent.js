

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
  

  
