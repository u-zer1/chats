import { ReactElement } from 'react';

interface IRouteMain {
	isNested?: boolean; // flag for nested route
	index?: boolean;
	path?: string;
	element: ReactElement;
}

interface IRouteNestedChildren extends IRouteMain {
	children?: IRouteMain[];
}

export interface IRoute extends IRouteMain {
	children?: IRouteNestedChildren[];
}
