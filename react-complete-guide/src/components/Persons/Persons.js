import React, { Component } from 'react';
import Person from './Person/Person';



class Persons extends Component {

    static getDerivedStateFromProps(props,state){
        console.log(' Get derived ');
        return state;
    }

    shouldComponentUpdate( nextProps,nextState){
        console.log(' persons js should component update');
        return true;
    }


    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('get snap shot before update');
    }

    componentDidUpdate(){
        console.log(' persons js .   COMPONENT did update');
    }
    render() {

        console.log('[persons.js] rendering...');
        return this.props.persons.map((each, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={each.name}
                    age={each.age}
                    key={each.id}

                    changed={(event) => this.props.changed(event, each.id)}
                />

            )
        });
    };


}




export default Persons;