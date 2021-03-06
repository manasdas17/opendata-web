import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import Navigation from './Navigation';

class IntroText extends Component {
    static propTypes = {
        location: PropTypes.object,
    };

    static get defaultProps() {
        return {
            location: this.location,
        };
    }


    render() {

        return (

            <div className="details-container">

                <Navigation />


                <div className="red-box">
                    <h2>This is a Project Archive</h2>
                    <p>Historical data is still available for  <Link to={'/download/'}>download</Link>.</p> 

                    <p>Unfortunately, we've had to stop further development for lack of resources. If you're interested in taking over the project, you can head over to GitHub for the open source code: [<a href="https://github.com/letsdoitworld/opendata-web" target="_blank" rel="noopener noreferrer">front-end</a> and <a href="https://github.com/letsdoitworld/opendata-api" target="_blank" rel="noopener noreferrer">back-end</a>].
                    </p>

                    <p>
                        You're also very welcome to get in touch with your ideas regarding potential solutions and parterships: <a href="mailto:kristiina@letsdoitworld.org" target="blank">kristiina@letsdoitworld.org</a>
                    </p>
                    
                    <h2>A world without waste is our dream</h2>
                    <p>
                        In order to fully grasp the trash problem, we require reliable data on how much trash there is in the world - and we understood that there is no such database to collect this kind of data. The World Waste Platform is currently showing data from 8 mapping apps compiled by Gray’s Lab.
                    </p>
                </div>

            </div>
        );
    }
}

export default withRouter(IntroText);
