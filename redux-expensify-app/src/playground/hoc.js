console.log('Higher Order Component...');

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h2>Info</h2>
        <p>The Info is: {props.info}</p>
    </div>
);

const withAdminWarning = ( WrappedComponent ) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is Private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
}

const requireAuthentication = ( WrappedComponent ) => {
    return ( props ) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please Login to view the info.</p>
            )}
        </div>
    );
}


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details"/>, document.getElementById('app'));
