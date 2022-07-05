import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { Input } from 'antd';
import 'antd/dist/antd.css';
import '../cssCode/Style.css'
import '../cssCode/header.css'
import LanguagePopover from '../../popovers/languagePopover'
import { AudioOutlined } from '@ant-design/icons';
import LocationModal from '../../components/LocationModal';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import SigninPopover from '../../popovers/signinPopover';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems, } from '../../components/Redux/cartReducerCumActions'
import jwt_decode from 'jwt-decode';
export default function Layout() {
    console.log("pppppppppppppp>>>????>>>>>>>")

    const items = useSelector((state) => state.cart.items);
    const d = items?.data;
    console.log("oooooooooo", d?.length);
    const dispatch = useDispatch();
    const [totalCartItems, setTotalCartItems] = useState(0);

    useEffect(() => {
        dispatch(fetchCartItems())
    }, [])
    const navi = useNavigate();
    const { Search } = Input;
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: 'red',
            }}
        />
    );
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a href="https://www.antgroup.com">1st menu item</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="https://www.aliyun.com">2nd menu item</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    );
    const cartShow = () => {
        navi('/cardshow')
    }

    var name
    const token = sessionStorage.getItem("token");
    try {
        var decoded = jwt_decode(token);
        name = decoded.useremail.name
    } catch (err) {

    }

    const cartadde = async () => {

        // e.preventDefault();
        let n1 = decoded.useremail.email
        console.log("kjhgfdsxgfchvjbnk>>>", n1);
        console.log("GET ALL TO CART.................");
        const item = { "email": n1 }
        console.log("??????", item);
        let res = dispatch(fetchCartItems(item))
        console.log(">>>>>>>", item);
        console.log("OOOOOOOOOOOO", res);


    }
    return (
        <>
            <div style={{

                zIndex: "9999",
                backgroundColor: '#131921',
                position: "sticky", top: 0,
                display: 'flex', width: '100%', height: '65px', justifyContent: 'center', flexWrap: 'wrap',
            }}>

                <div style={{ width: '25%', display: 'flex', height: '-webkit-fill-available' }}>
                    <div style={{ width: "35%", height: "90%", display: 'flex', justifyContent: 'start', alignItems: 'center', textAlign: 'center', marginTop: '2px' }}>

                        <img onClick={() => { navi('/') }} className='header_logo' src='https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578&ssl=1' />
                    </div>
                    <LocationModal />
                </div>

                <div style={{ width: '45%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', height: '-webkit-fill-available' }}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Search
                            addonBefore={
                                <Dropdown overlay={menu} trigger={['click']}>
                                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        All <DownOutlined />
                                    </a>
                                </Dropdown>}
                            placeholder="input search text"
                            allowClear
                            size="large"
                            // onSearch={suffix}
                            // suffix={suffix}
                            style={{ width: '40vw', paddingTop: '', fontSize: '20px', flexWrap: 'wrap' }}
                        />
                    </div>
                </div>
                <div style={{ width: '30%', display: 'flex', height: '-webkit-fill-available' }}>

                    <LanguagePopover />
                    <SigninPopover name={name} />
                    <div style={{ width: '20%', display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}>
                        <a href="" className="ex1" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'column', height: '100%', width: '90%', textDecoration: 'none' }}>
                            <span style={{ fontSize: '1vw', color: 'white' }}>return</span>
                            <span style={{ fontFamily: 'inherit', fontSize: '1.1vw', color: 'white', fontWeight: '750' }}>& Orders</span></a>
                    </div>
                    <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
                        <a href="" className="ex1" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', width: '80%' }} onClick={cartShow}>
                            <div style={{ position: 'absolute', bottom: '35%', marginTop: '11px' }} ><h5 style={{ color: 'orange', fontSize: '1.1vw', zIndex: '9999' }} >{d?.length}</h5></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="white" style={{ fontFamily: 'inherit', fontWeight: '750', fontSize: '1.5vw' }} ><path d="M10 
    19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-3.777-9h-2.168l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>




        </>)
}
