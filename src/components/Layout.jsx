import React from 'react'
import Navigation from './Navigation'
import {Header} from './Header';

export default function Layout(props) {
        const {children} = props;
        
        
        return (
                <>
                        <Header />
                        <main>{children}</main>
                </>
        )
}