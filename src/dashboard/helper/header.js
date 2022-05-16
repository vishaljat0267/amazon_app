import React from 'react'
import Image3 from '../../image/amazon.png'
import Drawer1 from './sidemenu'



export default function Header() {
    return (
        <div style={{ backgroundColor: '#232f3e', width: '100%', height: '50px', display: 'flex', }}>
            <div style={{ backgroundColor: '#232f3e', width: '70%', height: '100%', display: 'flex', justifyContent: 'space-between', fontSize: '15px', }}>
                {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" className="ex1" style={{ color: 'white' }} >
                        All</a> */}
                {/* </div> */}
                <Drawer1/>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" className="ex1" style={{ color: 'white' ,textDecoration:'none'}}>
                        Best seller
                    </a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" className="ex1" style={{ color: 'white' ,textDecoration:'none'}}>
                        Mobile
                    </a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" className="ex1" style={{ color: 'white',textDecoration:'none' }}>
                        Customer Service
                    </a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" className="ex1" style={{ color: 'white',textDecoration:'none' }} >
                        Today's Deals
                    </a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" className="ex1" style={{ color: 'white',textDecoration:'none' }} >
                        Fashion
                    </a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" className="ex1" style={{ color: 'white' ,textDecoration:'none'}} >
                        Electronics
                    </a>
                </div><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" className="ex1" style={{ color: 'white' ,textDecoration:'none'}}>
                        Prime
                    </a>
                </div><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" className="ex1" style={{ color: 'white',textDecoration:'none' }}>
                        New Release
                    </a>
                </div><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" className="ex1" style={{ color: 'white',textDecoration:'none' }} >
                        Home & Kitchen
                    </a>
                </div>
            </div>

            <div style={{ backgroundColor: '#232f3e', width: '30%', display: 'flex', height: '100%', justifyContent: 'center' }}>

                <img style={{ display: 'flex', justifyContent: 'space-around', height: '100%', width: '10%' }} src={Image3} />
                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '1.2vw', alignItems: 'center', color: 'white' }}>Shopping made easy | Download the app</div>

            </div>
        </div>)
}

