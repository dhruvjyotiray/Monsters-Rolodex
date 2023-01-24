// import { Component } from "react";
import "./card.styles.css";

const Card = ({monster}, forwardRef) => {
    
  const { name, id, email } = monster;

  return (
    <div className="card-container" key={id}>
      <img
        alt={name}
        src={`https://robohash.org/${id}?set=set2&size=200x200`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

// class Card extends Component {
// render() {
//     const {name, id, email} = this.props.monster
//     return(
//         <div className="card-container" key = {id}>
//         <img alt={name} src = {`https://robohash.org/${id}?set=set2&size=200x200`}/>
//         <h2>{name}</h2>
//         <p>{email}</p>
//         </div>
//     )
// }
// }

export default Card;
