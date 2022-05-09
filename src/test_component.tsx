import * as React from 'react';
import {Component } from 'react';

type TestProps = {
    label: string
}

export class TestComponent extends Component<TestProps, {}> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return <h1>{this.props.label}</h1>
    }
}

