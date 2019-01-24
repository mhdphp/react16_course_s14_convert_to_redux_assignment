import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {  
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAdd} />
                {this.props.personsData.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonDelete(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        personsData: state.appPersons // from store/reducer.js
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPersonAdd: () => dispatch({type: 'ADD_PERSON'}),
        onPersonDelete: (id) => dispatch({type: 'DELETE_PERSON', personId: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Persons);