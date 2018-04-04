import React from 'react';


class SearchBar extends React.Component {


    /**
     *
     * @param props
     */
    constructor(props) {

        super(props);

        this.state = { term: ''};

        // this.onInputChange = this.onInputChange.bind(this);
    }


    /**
     * return element
     *
     * @returns {XML}
     */
    render (){


        return (

            <aside >
                <input onChange = { event => this.onInputChange(event.target.value) }
                       value = { this.state.term }
                       style={{'float':'left', 'width':'100%', 'padding': '10px 15px'}}
                       className = "search--bar" placeholder="Search Videos"/>
                <p style={{ 'fontSize' : '0.8em', 'color': 'gray'}}>You are searching for : { this.state.term } </p>
            </aside>
        );

    }  //React.component

    onInputChange(term) {

        this.setState( { term: term } );
        this.props.onSearchTermChange(term);

    }

};

export default SearchBar;