// @flow strict

import type {SuccessStatusCode, ErrorStatusCode} from 'begonia/statusCodes';

export type Either<T, U> = [T, null] | [null, U];

export type OutputSuccess = {|
	statusCode: SuccessStatusCode,
	content: Object | null
|};

export type OutputError = {|
	statusCode: ErrorStatusCode,
	message: string,
	details: Object,
	internalDetails: Object
|};

export type Output = Either<OutputError, OutputSuccess>;

export type Parameter<T> = {
	default: T,
	description: string,
	example: string,
	required: boolean,
	type: string
};

export type ParameterOptions<T> = {
	_default?: T,
	description: string,
	example: T,
	required: boolean
};

export type Middleware<T> = (incoming: T) => Promise<Output>;
