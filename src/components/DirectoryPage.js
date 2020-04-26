import React from 'react';

function DirectoryPage(props){
    return (
        <table className="table table-striped">
        <tbody>
          <tr>
            <th scope="row"></th>
            <td className="column" ><img className="imagetag" alt={props.name} src={props.image} /></td>
            <td className="column">{props.name}</td>
            <td className="column">{props.phone}</td>
            <td className="column">{props.email}</td>
            <td className="column">{props.dob}</td>
          </tr>
        </tbody>
     
      </table>
    )
}

export default DirectoryPage;