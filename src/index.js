// @flow strict

import type {Decoder} from 'decoders';
import type {Middleware, Output} from 'begonia/types';

import {guard} from 'decoders';

import {object} from 'begonia/parameters/object';
import {endpointGETParameters} from 'begonia/endpoint';
import {string} from 'begonia/parameters/string';
// import {integer} from 'begonia/parameters/number';

function guarded<T>(schema: Decoder<T>, fn: Middleware<T>) {
	return async(incoming: T): Promise<Output> => {
		const d = guard(schema)(incoming);

		return fn(d);
	};
}

const stupid2 = async(incoming) => {
	incoming.params.name.toLowerCase();
	incoming.params.notName.toLowerCase();
	incoming.query.lol.toLowerCase();

	return [
		null,
		{statusCode: 200, content: {everything: 'Went fine'}}
	];
};

const stupid = async(incoming) => {
	// incoming.query.error.toLowerCase();
	incoming.params.action.toLowerCase();
	// incoming.params.actions.toLowerCase();
	/*
	if (incoming.query === 10) {
		return [
			{
				statusCode: 400,
				message: 'Invalid Content',
				details: {nope: 'no no no'},
				internalDetails: {internal: 'yes'}
			},
			null
		];
	}
	*/

	return [
		null,
		{statusCode: 200, content: {everything: 'Went fine'}}
	];
};

type ParameterLocation =
	| 'header'
	| 'query'
	| 'params'
	| 'body';

function extractSchema(x: any, options: {name?: string, place?: ParameterLocation}) {
	if (x.type === 'object') {
		const pairs = Object.entries(x.sub);
		const done = pairs.map(([k, v]: any) => [k, extractSchema(v, {name: k})]);
		return done.reduce((acc, [k, v]) => ({...acc, [k]: v}), {});
	}

	return x.value(options);
}

const endpointSchema = object({
	params: object({
		action: string({
			required: false,
			example: 'bo_do_stuff',
			description: 'Action to authorize'
		})
	}),
	headers: object({
		Authorization: string({
			required: true,
			example: '',
			description: 'Current token'
		})
	})
});

type Endpoint = {
	tags?: string[],
	description: string,
	operationId: string,
	summary: string,
	response: any
};

type GetEndpoint<T> = Endpoint & {
	parameters: Decoder<T>
};

const firstEndpoint: GetEndpoint<*> = {
	tags: ['auth'],
	description: 'Authorize',
	operationId: 'authorize',
	summary: 'Checks if an action is authorized',
	parameters: endpointSchema,
	response: 'none'
};

const secondSchema = endpointGETParameters({
	params: object({
		name: string({
			required: true,
			example: '',
			description: 'Current token'
		})
	}),
	headers: object({}),
	query: object({})
});

console.log(extractSchema(firstEndpoint.parameters, {}));

guarded(secondSchema, stupid2);
guarded(firstEndpoint.parameters, stupid);
