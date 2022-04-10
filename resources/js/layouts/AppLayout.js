import React, { Fragment } from 'react';
import Header from './app-layout/header/Header';

function AppLayout(props) {
    return (
        <Fragment>
            <Header></Header>
            <div class="landing-page" id="landing-page">
                <div class="container-fluid">
                    <div class="lnw-body-dashboard" >
                        {props.children}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default AppLayout;
