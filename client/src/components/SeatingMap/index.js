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
            rows: [],
            modified: []
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
        this.setState({ seats });
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
                seatObjs.push({ id: rows[i][j]._id, seatNumber: rows[i][j].seatNumber, status: rows[i][j].status, className: 'seats', pos: { top: j * this.state.size + gap, left: i * this.state.size * 2, width: this.state.size, height: this.state.size } })
            }
        }
        return seatObjs;
    }

    handleClick = (id, index) => {
        if (!this.props.loggedIn) {
            return;
        }
        let newArray = this.state.seats.slice(0);
        let modified = this.state.modified.slice(0);
        if (newArray[index].status === 'open') {
            newArray[index].status = 'selected';
        } else if (newArray[index].status === 'selected') {
            newArray[index].status = 'open';
        }
        if (newArray[index].status !== 'reserved') {
            if (modified.includes(id)) {
                modified.splice(modified.indexOf(id), 1);
            } else {
                modified.push(id);
            }
        }
        this.setState({ seats: newArray, modified });
    }

    render() {
        let seatComps = this.state.seats.map((seat, index) => {
            return <Seat key={seat.id} id={seat.id} index={index} pos={seat.pos} status={seat.status} handleClick={() => this.handleClick(seat.id, index)}/>
        })
        return (
            <div>
                <div className='seatMap'>
                    <div className='innerMap'>
                        {seatComps}
                        <div className='soundTable'
                            style={{ width: this.state.size * 3,
                                     height: this.state.soundTable - this.state.size * 2,
                                     top: this.breakArray(this.props.seats)[0].length / 2 * this.state.size + this.state.size,
                                     left: 0 }}>
                            Sound Table
                        </div>
                    </div>
                </div>
                <button id='reserveBtn' onClick={() => this.props.handleReserve(this.state.modified)}>Reserve Seats</button>
            </div>
            
        );
    }
};

export default SeatingMap;