import React from 'react';

export interface routerType {
    path: string;
    title: string;
    element: React.ReactElement;
}

export interface routeType {
    path: string;
    element: React.ReactElement;
}