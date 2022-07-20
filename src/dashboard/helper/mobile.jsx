import { Card, Checkbox } from 'antd';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartcartItems, getCartcartItems4 } from '../../components/Redux/cartReducerCumActions';

export default function Mobile() {
    const [filterCat, setFilter] = useState([]);
    const dispatch = useDispatch();
    const cartitems4 = useSelector((state) => (state.allItems4.cartitems4));
    console.log("ccccccccc", cartitems4)

    useEffect(() => {


        dispatch(getCartcartItems4())

    }, [])

    const options = [
        { label: 'OnePlus', value: 'one-Plus' },
        { label: 'realme', value: 'realme' },
        { label: 'Apple', value: 'Apple' }
    ]
    console.log(options);
    const Changehandler = (checkedValues) => {
        setFilter([...checkedValues])
    }
    console.log('filterr', filterCat)


    return (
        <React.Fragment>
            <div>
                <Checkbox.Group options={options} onChange={Changehandler} />

            </div>

            <div className="cards1">
                {cartitems4?.filter((item) => {
                    if (!filterCat.length) {
                        return item
                    }
                    else if (filterCat.includes(item.brand)) {
                        return item;
                    }
                }).map((val, key) => {
                    return (
                        <React.Fragment key={key}>

                            <Card className="card">
                                <h3>{val.title}</h3>
                                <div>
                                    <img style={{ height: '50%', width: '40%' }}
                                        src={val.image} alt="Comics Category" className="card-content" />
                                    <br />
                                </div>
                                <div>
                                    <h3><b>Price: {val.price}</b></h3>
                                    <h6>{val.description}"</h6>

                                </div>
                                <Link to="/categories" state={"Comics"} className="link">
                                    Shop Now
                                </Link>
                            </Card>

                        </React.Fragment>
                    );
                })}
            </div>
        </React.Fragment>







    )
}