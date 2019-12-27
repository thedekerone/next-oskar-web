import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapGoogle extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Map
					google={this.props.google}
					style={{
						width     : '100%',
						height    : '400px',
						position  : 'relative',
						boxSizing : 'border-box'
					}}
					initialCenter={{
						lat : -9.509646,
						lng : -77.995859
					}}
					zoom={15}
					className={'maps'}
					onClick={this.onMapClicked}>
					<Marker onClick={this.onMarkerClick} name={'Current location'} />

					<InfoWindow onClose={this.onInfoWindowClose}>
						<div>
							<h1>Yautan</h1>
						</div>
					</InfoWindow>
				</Map>
			</React.Fragment>
		);
	}
}
export default GoogleApiWrapper({
	apiKey : 'AIzaSyAn9p-JMbMC-QUIKA6k1A3hTsYz7GjJO6w'
})(MapGoogle);
