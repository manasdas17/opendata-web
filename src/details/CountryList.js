import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactCountryFlag from 'react-country-flag';
import {countries} from 'country-data';
import PropTypes from 'prop-types';
import '../css/details/Details.css';
import Navigation from '../Navigation';

export default class CountryList extends Component {
    static propTypes = {
        allCountries: PropTypes.array,
        topCountries: PropTypes.array,
    };

    static get defaultProps() {
        return {
            allCountries: this.allCountries,
            topCountries: this.topCountries,
        };
    }
    constructor(props) {
        super(props);
        this.state = {};
        this.showTop10Countries = this.showTop10Countries.bind(this);
        this.showAllCountries = this.showAllCountries.bind(this);
    }

    componentDidMount() {
        this.state = {data: []};
        this.showTop10Countries();
    }

    showTop10Countries(e) {
        if (e) {
            e.preventDefault();
        }

        this.setState({displayedCountries: this.props.topCountries});
    }
    showAllCountries(e) {
        if (e) {
            e.preventDefault();
        }

        this.setState({displayedCountries: this.props.allCountries});
    }

    isTop10Displayed() {
        return !this.state.displayedCountries || this.state.displayedCountries.length === 10;
    }

    render() {
        return (

            <div className="details-container county-list-container">

                <div className="go-back">
                    <Link to={'/'} className="go-back__link">Back to intro</Link>
                </div>
                <Navigation />

                <div className="search-box">
                    <input type="text" className="search-box__input" />
                    <button type="button" className="search-box__button" />
                </div>
                <nav className="countries-tabs">
                    <a href="#" className={'countries-tabs__item countries-tabs__link ' + (this.isTop10Displayed.bind(this)() ? 'active' : '')} onClick={this.showTop10Countries}>Top 10 mappers</a>
                    <a href="#" className={'countries-tabs__item countries-tabs__link ' + (!this.isTop10Displayed.bind(this)() ? 'active' : '')} onClick={this.showAllCountries}>All countries</a>
                </nav>

                <div className="countries-list">
                    <div className="countries-list__header">
                        <div className="col">Rk</div>
                        <div className="col">Country</div>
                        <div className="col">TPR index</div>
                    </div>
                    {this.state.displayedCountries &&
                     this.state.displayedCountries.map((item, key) => (
                         <div className="countries-list__item" key={key}>
                             <div className="col">{key + 1}</div>
                             <div className="col">
                                 <ReactCountryFlag code={item.country_code} svg />
                             </div>
                             <div className="col">
                                 <Link to={`/country/${item.country_code.toLowerCase()}`} >{countries[item.country_code].name} </Link>
                             </div>
                             <div className="col">{Number(item.tpr).toFixed(2)}</div>
                         </div>
                     ))}

                </div>

            </div>
        );
    }
}
