import React from 'react';
import axios from 'axios'

import {appConfig} from "../appconfig";
import Events from "./Events"

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            events: null,
        };
        this.changeCity = this.changeCity.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeCity(event) {
        this.setState({city: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.get(`https://graph.facebook.com/search?q=${this.state.city}&type=event&fields=start_time,end_time,id,cover,description,event_times,name,parent_group,place&access_token=${appConfig.accessToken}`);
    }

    get(url) {
        axios.get(url)
            .then(response => {
                if (response.data.paging) {
                    this.get(response.data.paging.next);
                    let temp = this.state.events === null ? response.data.data : this.state.events.concat(response.data.data);
                    this.setState({
                        events: temp
                    });
                }
            })
            .catch(error => console.log(error));
    }

    componentDidMount(){
        this.autocomplete();
    }

    autocomplete(){
        var autocomplete = new google.maps.places.Autocomplete(document.getElementById('pac-input'), { types: ['(cities)'] });
        autocomplete.addListener('place_changed', () => {
            var place = autocomplete.getPlace();
            if (place.geometry) {
                this.setState({city: place.name})
            } else {
                return;
            }
        });
    }

    render() {
        const events = this.state.events;
        console.log(events, this.state.city, "ok");
        const evenetsComponent = events !== null ? <Events data={events} city={this.state.city} /> : null;

        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <div>Wpisz miasto:</div>
                        <input type="text" value={this.state.city} onChange={this.changeCity} id={"pac-input"}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                {evenetsComponent}
            </main>

        )
    }
}

export default Main;