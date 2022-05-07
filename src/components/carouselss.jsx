import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import './carouselss.css'

import { cardApi4 } from '../services/getApi/getApi';
import { useNavigate } from 'react-router-dom';


export default function Carouselss(props) {
  const navi = useNavigate()

  const slideLeft = () => {

    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1470
  }

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 1470
  }
  const [data1, setData] = useState([])
  useEffect(async () => {
    await cardApi4().then(res => { setData(res.data.data) })
  }, []);

  return (
    <>

      <div id="main-slider-container" style={{ position: 'relative', padding: '20px' }}  >
        <button className='left-slider-icon' style={{ opacity: '0.5', backgroundColor: '#fff', minHeight: '104px', minWidth: '47px', position: 'absolute', marginTop: '147px' }}
          onClick={slideLeft} >
          <LeftOutlined />
        </button>

        <div id="slider" style={{ position: '' }}>
          {

            data1.map((val, id) => {
              if (id < 30)


                return (<React.Fragment key={id}>


                  <div className='slider-card' style={{ flexDirection: '', backgroundColor: 'white' }}  >

                    <div style={{ width: '30px', height: '', marginTop: '30px', display: 'flex', justifyContent: 'center', flexDirection: 'column', flexWrap: 'wrap' }}>
                      {/* <h3 style={{width:'-webkit-fill-available'}}>{val.title}</h3> */}
                    </div>


                    <div style={{ width: '70%', height: '60%', display: 'flex', justifyContent: 'center' }} >
                      <img src={val.image} alt="image1" style={{ height: 210, width: '-webkit-fill-available' }} onClick={() => { navi('/productDetails', { state: val }) }} />

                    </div>
                    <div><h1>Price: {val.price} </h1></div>


                  </div>


                </React.Fragment>
                );
            })
          }
          <button className='right-slider-icon' style={{ opacity: '0.5', backgroundColor: '#fff', minHeight: '104px', minWidth: '47px', position: 'absolute', left: '96%', top: '40%' }}
            onClick={slideRight}>
            <RightOutlined />
          </button>


        </div>

        {/* <button className='right-slider-icon' style={{ opacity: '0.5', backgroundColor: '#fff', minHeight: '104px', minWidth: '47px',position:'absolute',left:'96%',top:'40%'}}
          onClick={slideRight}>
          <RightOutlined />
        </button> */}


      </div>

    </>
  )
}
