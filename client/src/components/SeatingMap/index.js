import React, { Component } from 'react';
import Seat from '../Seat';
import API from '../../utils/API';
import './style.css';

class SeatingMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seats: [],
            size: 16,
            seatsInMiddle: 5,
            soundTable: (5 + 2) * 16,
            rows: []
        }
    }

    breakArray = array => {
        let rows = [[]];
        let prevRow = array[array.length - 1].seatNumber.charCodeAt(0) - 65;
        for(let i = 0; i < array.length; i++) {
            let row = array[i].seatNumber.charCodeAt(0) - 65;
            if (prevRow !== row) {
                rows.unshift([]);
                prevRow = row;
            }
            rows[0].push(array[i]);
        }
        return rows;
    }

    componentDidMount = () => {
        let seats = this.generateMap();
        this.setState({ seats});
    }

    generateMap = () => {
        let seatObjs = [];
        let rows = this.breakArray(this.props.seats);
        for(let i = 0; i < rows.length; i++) {
            let gap = 0;
            for(let j = 0; j < rows[i].length; j++) {
                if (j >= rows[i].length / 2 && i < rows.length - 2) {
                    gap = this.state.soundTable;
                } else if (i === rows.length - 2) {
                    if (j < (rows[i].length - this.state.seatsInMiddle) / 2) {
                        gap = this.state.size;
                    } else if (j < (rows[i].length - this.state.seatsInMiddle) / 2 + this.state.seatsInMiddle) {
                        gap = this.state.size * 2;
                    } else {
                        gap = this.state.size * 3;
                    }
                }
                seatObjs.push({ id: rows[i][j].seatNumber, status: rows[i][j].status, className: 'seats', pos: { top: j * this.state.size + gap, left: i * this.state.size * 2, width: this.state.size, height: this.state.size } })
            }
        }
        return seatObjs;
    }

    handleClick = id => {
            let newArray = this.state.seats.slice(0);
            // console.log(newArray);
            if (newArray[id].status === 'open') {
                newArray[id].status = 'selected';
            } else if (newArray[id].status === 'selected') {
                newArray[id].status = 'open';
            }
            this.setState({ seats: newArray });
    }

    render() {
        let seatComps = this.state.seats.map((seat, index) => {
            return <Seat key={seat.id} id={index} pos={seat.pos} status={seat.status} handleClick={this.handleClick}/>
        })
        return (
            <div className='seatMap'>
                <div className='innerMap'>
                    {seatComps}
                    <div className='soundTable' style={{ width: this.state.size * 3, height: this.state.soundTable - this.state.size * 2, top: this.breakArray(this.props.seats)[0].length / 2 * this.state.size + this.state.size, left: 0 }}>Sound Table</div>
                </div>
            </div>
        );
    }
};

export default SeatingMap;