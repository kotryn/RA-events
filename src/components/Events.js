import React from 'react';

import OneEvent from "./OneEvent"

class Events extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {data, city} = this.props;

        function isExist(e, city){
            console.log(e.place && e.place.location && e.place.location.city && city && true);
            return e.place && e.place.location && e.place.city && city && true;
        }

        const component = data.map((e, i)=>{
            if(e.place && e.place.location && e.place.location.city && city /* && e.place.location.city.toLowerCase() === city.toLowerCase()*/){
                console.log('what?');
                return (<OneEvent key={i} data={e} />)
            }else{
            }
        })

        return (
            <div>
                {component}
            </div>
        )
    }
}

export default Events;