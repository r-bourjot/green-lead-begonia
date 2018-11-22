// @flow

export type HttpVerb =
	| 'get'
	| 'post'
	| 'put'
	| 'path'
	| 'delete';

export type ParameterLocation = 'path' | 'query' | 'header' | 'cookie' | 'body';

export type ParameterType =
	| 'array'
	| 'string'
	| 'number'
	| 'boolean';

export type ParameterItemsType =
	| 'string'
	| 'boolean'
	| 'number';

export type OptionalParameter = {|
	in: ParameterLocation,
	name: string,
	required: false,
	type: ParameterType, // TODO: support Arrays and Enums and AllowEmptyValue
	default?: string | number | boolean
|};

export type RequiredParameter = {|
	in: ParameterLocation,
	name: string,
	required: true,
	type: ParameterItemsType // TODO: support Arrays, Enums and AllowEmptyValue
|};

export type Parameter = RequiredParameter | OptionalParameter;

export type Schema = {|
	basePath: string,
	paths: {| // TODO: Support path level parameters
		[string]: {|
			[HttpVerb]: {|
				'x-swagger-router-controller': string,
				parameters: Parameter[]
			|}
		|}
	|}
|};
