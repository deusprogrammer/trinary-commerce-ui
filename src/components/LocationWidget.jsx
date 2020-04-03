import React from 'react';
import connect from '../utils/ReduxHelper';

let onChangeLocation = (id) => {
    let selected = this.props.locations.filter(location => location.id === id)
    this.props.setCurrentLocation(selected)
}

let LocationWidget = (props) => {
    return (
        <div>
            <span>Location:</span>
            <select onChange={(e) => {onChangeLocation(e.target.value)}} value={props.currentLocation.id}>
                {props.locations.map((location, index) => {
                    return <option key={`location-${index}`} value={location.id}>{location.name}</option>
                })}
            </select>
        </div>
    )
}

export default connect(LocationWidget);