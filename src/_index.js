/*
// @flow

// import type {$Request, $Response, NextFunction} from 'express';
// import express from 'express';

import type {Decoder} from 'decoders';
import type {Middleware, Output, ParameterOptions} from 'begonia/types';

import {guard, integer, object} from 'decoders';

// const app = express();

function expressBridge(middleware: Middleware) {
	return async(req: $Request, res: $Response, next: NextFunction) => {
		const body: any = req.body;
		const header: any = req.header;
		const params: any = req.params;
		const query: any = req.query;

		const incoming: Incoming = {body, header, params, query};

		try {
			const [error, result] = await middleware(incoming);

			if (error) {
				console.error(error.internalDetails);

				return res.status(error.statusCode).json({message: error.message, details: error.details});
			}

			if (result) {
				return res.status(result.statusCode).json(result.content);
			}

			return '?';
		} catch (error) {
			console.error('Uncaught error:', JSON.stringify(error, null, 2));

			return res.status(500).json({message: 'Uncaught error', details: error});
		}
	};
}

function _integer(options: ParameterOptions<number>): Decoder<number> {
	const d = integer;
	d.type = 'integer';
	d.description = options.description;
	d.example = options.example;
	d._default = options._default;
	d.required = options.required;

	return d;
}

// eslint-disable-next-line
type DecoderUnwrap = <T>(d: Decoder<T>) => T;

// eslint-disable-next-line
function _object<O: {+[string]: Decoder<any>}>(x: O): Decoder<$ObjMap<O, DecoderUnwrap>> {
	const o = object(x);
	o.type = 'object';
	o.sub = x;
	return o;
}

const querySchema = _object({
	error: _integer({
		_default: 10,
		description: 'Description of that thing',
		example: 8,
		required: false
	})
});

function guarded(schema: Decoder<*>, fn: Middleware) {
	return async(incoming: any): Promise<Output> => {
		const d = guard(schema)(incoming);

		return fn(d);
	};
}

const stupid: Middleware = async(incoming) => {
	incoming.query.error.toLowerCase();
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

	return [
		null,
		{statusCode: 200, content: {everything: 'Went fine'}}
	];
};

function extractSchema(x: any) {
	if (x.type === 'object') {
		const pairs = Object.entries(x.sub);
		const done = pairs.map(([k, v]: any) => [k, extractSchema(v)]);
		return done.reduce((acc, [k, v]) => ({...acc, [k]: v}), {});
	}

	return {
		_default: x.required ? undefined : x._default,
		description: x.description,
		example: x.example,
		required: x.required,
		type: x.type
	};
}

const endpointSchema = _object({
	query: querySchema
});

console.log(extractSchema(endpointSchema));

guarded(endpointSchema, stupid);

app.get('/', guarded(endpointGuard, expressBridge(stupid)));

app.listen(8090, function() { console.log('Express started'); });

*/
