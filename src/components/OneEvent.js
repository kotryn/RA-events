import React from 'react';

import {getDate} from './../getDate'

class Events extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {cover, description, start_time, end_time, name, place} = this.props.data;

        return (
            <div>
                <h2>{name}</h2>
                <img src={cover && cover.source} />
                <div className={"description"}>
                    {description}
                </div>
                <div className={"date"}>
                    {getDate(start_time, end_time)}
                </div>
                <div className={"place"}>
                    {place.location && place.location.city} - {place.location && place.location.country}
                </div>
            </div>

        )
    }
}

export default Events;