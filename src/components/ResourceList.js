// import React from 'react';
// import axios from 'axios';

// class ResourceList extends React.Component {

//     state = {
//         resources: []
//     }

//     async componentDidMount() {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

//         this.setState({ resources: response.data });
//     };

//     async componentDidUpdate(prevProps) {
//         if (prevProps.resource !== this.props.resource) {
//             const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
//             this.setState({ resources: response.data });
//         };
//     };

//     render() {
//         return (
//             <div>
//                 {this.state.resources.length}
//             </div>
//         );
//     };
// };

import React from 'react';
import useResource from './useResources';

const ResourceList = ({ resource }) => {

    const resources = useResource(resource)

    return (
        <ul>{resources.map(record => {
            return <li key={record.id}>{record.title}</li>
        })}
        </ul>
    );
};

export default ResourceList;