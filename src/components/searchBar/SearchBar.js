import React, {Component} from 'react';
import logo from '../../assets/logo.png'
import './SearchBar.css'

class SearchBar extends Component {

    state={
        query:'javascript'
    }

    // /AIzaSyB_omo8fxciuGj7Jzpt_78ZIHnR-48vEn4
    
    handleChange = (e) =>{
        this.setState({
            query : e.target.value
        });
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.handleFormSubmit(this.state.query);
    }
    render() {
        return (
            <section className="navigationBar">
                <div className="logoDiv">
                    <img src={logo} alt="logoImage" width="100%"/>
                </div>

                <div className="userInputDiv">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="userInput" onChange={this.handleChange} value={this.state.query} placeholder="Search..."/>
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>
            </section>
        );
    }
}

export default SearchBar