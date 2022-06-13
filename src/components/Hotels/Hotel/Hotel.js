import PropTypes from 'prop-types';
import styles from './Hotel.module.css';


const propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
};

function Hotel(props) {
    return (
        <div className={`card ${styles.hotel}`}>
            <div className="card-body">
                <div className={"row"}>
                    <div className="col-4">
                        <img
                            src={props.image}
                            alt=" "
                            className="img-fluid img-thumbnail"/>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col">
                                <p className={styles.title}>{props.name}</p>
                                <p className="badge badge-light text-dark">{props.city}</p>  
                            </div>
                            <div className="col">
                                <h5>{props.rating}</h5> 
                                <span className="badge bg-secondary">opinie: {props.numberOfReviews}</span>
                                <a href="1" className="btn btn-primary mt-4 px-5 float-end">Pokaż</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <p className={styles.description}>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

Hotel.propTypes = propTypes;
export default Hotel; 