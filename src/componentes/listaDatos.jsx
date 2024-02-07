import { xente } from "../datos/datos";
import { getImageUrl } from "./dirImaxes";

export default function List() {
  
    const listItems = xente.map(person =>
      <li key={person.id}>
        
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
        <p>
          <b>{person.name}</b>
            {' ' + person.profession + ' '}
            conocido/a por {person.accomplishment}
        </p>
      </li>
    );
    return <ul>{listItems}</ul>;
  }