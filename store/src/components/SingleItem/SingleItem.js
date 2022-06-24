import React from 'react';
import { connect } from 'react-redux';
import style from './SingleItem.module.css'
import { addToCart } from '../../redux/Shopping/shopping-actions'; 

const SingleItem =({currentItem, addToCart}) => {
    return (
        <div className={style.product} >
           <img className={style.product_image}
           src={currentItem.image}
           alt={currentItem.title}
           />
            <div className={style.info} >
                <p>
                    {currentItem.description}
                </p>
            
                <p>
                    $ {currentItem.price}
                </p>

                <button onClick={() => addToCart(currentItem.id)}>Add To Cart</button>
            </div>

        </div>

        

    );
};

const mapStateToProps = (state) => {
    return {
        currentItem: state.shop.currentItem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (SingleItem);

