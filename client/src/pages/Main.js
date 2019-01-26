import React, { Component } from "react"
import Carousel from "../components/Carousel"
import Shows from "../components/Shows"
import Survivor from "../components/Survivor"
import Camps from "../components/Camps"
import Lessons from "../components/Lessons"
import Map from "../components/Map"

class Main extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <Shows />
                <Survivor />
                <Camps />
                <Lessons />
                <Map />
            </div>
        )
    }
}

export default Main