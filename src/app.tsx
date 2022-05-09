import { TestComponent } from './test_component';

import {IJsonModel, TabNode, Layout, Model} from 'flexlayout-react';

import * as React from 'react';

class AppProps {}

export class App extends React.Component<AppProps, {}> {
    constructor(props: AppProps) {
        super(props);
    }

    factory(node: TabNode) {
        switch(node.getComponent()) {
            case "button": {
                return <button>{node.getName()}</button>;
            }
        } 
    }
    render() {
        return <Layout 
            model={Model.fromJson(layoutModel)}
            factory={this.factory}/>
    };
}


const layoutModel : IJsonModel = {
    global: {
        tabEnableFloat: true,
        borderEnableAutoHide: true,
    },
    borders: [],
    layout: {
        type: "row",
        weight: 100,
        children: [
            {
                type: "tabset",
                weight: 60,
                children: [
                    {
                        type: "tab",
                        name: "Kripke Model View",
                        component: "text",
                    }
                ]
            },
            {
                type: "row",
                weight: 40,
                children: [
                    {
                        type: "tabset",
                        name: "Code Window",
                        weight: 70,
                        children: [
                            {
                                type: "tab",
                                name: "Bisemutum Code",
                                component: "text"
                            }
                        ]
                    },
                    {
                        type: "tabset",
                        weight: 30,
                        children: [
                            {
                                type: "tab",
                                name: "Bisemutum REPL",
                                component: "text"
                            }
                        ]
                    }
                ]
            }
        ]
    }
};
