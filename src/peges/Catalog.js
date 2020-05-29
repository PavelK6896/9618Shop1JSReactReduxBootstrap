import React from "react";
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {Goods} from "../components/Goods";
import {connect} from 'react-redux'

const Catalog = (props) => {
    return (
        <div>
            <Navbar/>
            <main style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                {
                    props.cars.map((car, index) => {
                        return (
                            <Goods
                                key={index}
                                key2={index}
                                year={car.year}
                                name={car.name}
                                src={car.src}
                            />
                        )
                    })
                }
            </main>
            <Footer/>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cars: state.cars1.cars1
    }
}

export default connect(mapStateToProps)(Catalog)