// import React from 'react';
// import Hotel from'./Hotel/Hotel';
// import styles from './Hotels.module.css';
// // import style from './Menu.module.css'

// function Hotels() {
//   return(
//     <div className="styles.container">
//       <h2 className="styles.title">Oferty:</h2>
//       <Hotel />
//       <Hotel />
//     </div>
//   )
// }

// export default Hotels;



// komponent klasowy, 
// 1. Każda klasa która rozszerza react component musi mieć metodę render

// import React from 'react'

// class Hotels extends React.Component{
//   render(){
//     return(
//       <div>
//         Hotels
//       </div>
//   )
// }
// }
// export default Hotels;


// krótszy zapis




import {Component} from 'react';
import PropTypes from 'prop-types';
import Hotel from'./Hotel/Hotel';
import styles from './Hotels.module.css'

const propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  })
    ).isRequired
}

class Hotels extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Oferty</h2>
        {this.props.hotels.map(hotel => <Hotel key={hotel.id} {...hotel} />)}
      </div>

    );
  }
}
Hotels.propTypes = propTypes;
export default Hotels;