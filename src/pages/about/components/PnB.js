import React from 'react'
import SwiperCore, {Navigation} from 'swiper'   
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './scss/pnb.scss'

SwiperCore.use([Navigation])

export default function PnB() {
    return (
        <div className="con-90-res">

            <Swiper
             navigation
             className="mapnb"
            >

                <SwiperSlide className="mapnb__slide">

                    <div className="mapnb__box">
                        <div className="mapnb__boxi">
                            <h1>BACKSTORY</h1>

                            <p>1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin pulvinar placerat. Nulla mollis lorem nec nisi aliquam dictum. Donec sit amet auctor elit. Aliquam sit amet posuere metus. Sed vehicula magna erat, id facilisis turpis luctus vitae. Vivamus urna enim, eleifend id sodales sed, feugiat ut est. Nunc sit amet libero hendrerit, pretium enim id, mollis urna. Fusce efficitur leo mi, id tincidunt turpis fermentum vel. Nulla feugiat et augue luctus varius. Quisque molestie arcu at ornare laoreet. Praesent efficitur turpis id dignissim bibendum. Morbi non est vel magna lobortis convallis eu a mauris. Integer ut magna felis. Fusce eu dignissim nulla. Nam congue leo a varius cursus. Duis mattis faucibus tortor ut iaculis.<br/> <br/>

    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et interdum arcu, finibus porttitor enim. Cras in nulla tortor. Ut venenatis, erat laoreet fringilla convallis, libero nisi maximus leo, id rhoncus enim ipsum at turpis. Cras tristique ornare quam, a suscipit erat viverra a. Nullam at augue fermentum, facilisis nisi quis, euismod orci. Pellentesque magna sem, fringilla quis erat at, auctor egestas turpis2.</p>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide className="mapnb__slide">

                <div className="mapnb__box">
                        <div className="mapnb__boxi">
                            <h1>PURPOSE</h1>

                                <p>Lllorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin pulvinar placerat. Nulla mollis lorem nec nisi aliquam dictum. Donec sit amet auctor elit. Aliquam sit amet posuere metus. Sed vehicula magna erat, id facilisis turpis luctus vitae. Vivamus urna enim, eleifend id sodales sed, feugiat ut est. Nunc sit amet libero hendrerit, pretium enim id, mollis urna. Fusce efficitur leo mi, id tincidunt turpis fermentum vel. Nulla feugiat et augue luctus varius. Quisque molestie arcu at ornare laoreet. Praesent efficitur turpis id dignissim bibendum. Morbi non est vel magna lobortis convallis eu a mauris. Integer ut magna felis. Fusce eu dignissim nulla. Nam congue leo a varius cursus. Duis mattis faucibus tortor ut iaculis.<br/> <br/>

        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et interdum arcu, finibus porttitor enim. Cras in nulla tortor. Ut venenatis, erat laoreet fringilla convallis, libero nisi maximus leo, id rhoncus enim ipsum at turpis. Cras tristique ornare quam, a suscipit erat viverra a. Nullam at augue fermentum, facilisis nisi quis, euismod orci. Pellentesque magna sem, fringilla quis erat at, auctor egestas turpis.</p>
                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>

        </div>
    )
}
