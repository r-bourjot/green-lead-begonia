// @flow strict

import type {Decoder} from 'decoders';

import * as decoders from 'decoders';

// eslint-disable-next-line
type DecoderUnwrap = <T>(d: Decoder<T>) => T;

// XXX There probably is something better to do
// XXX Unable to make params, query and headers optional
export function endpointGETParameters<
	T: {+[string]: *},
	U: {+[string]: *},
	V: {+[string]: *},
>(incoming: {|
	params: Decoder<T>,
	query: Decoder<U>,
	headers: Decoder<V>
|}): Decoder<{|
	params: T,
	query: U,
	headers: V
|}> {
	const o = decoders.object(incoming);
	o.type = 'object';
	o.sub = incoming;

	return o;
}

export function endpointDELETEParameters<
	T: {+[string]: *},
	U: {+[string]: *},
	V: {+[string]: *},
>(incoming: {|
	params: Decoder<T>,
	query: Decoder<U>,
	headers: Decoder<V>
|}): Decoder<{|
	params: T,
	query: U,
	headers: V
|}> {
	const o = decoders.object(incoming);
	o.type = 'object';
	o.sub = incoming;

	return o;
}

export function endpointPOSTParameters<
	T: {+[string]: *},
	U: {+[string]: *},
	V: {+[string]: *},
	W: {+[string]: *},
>(incoming: {|
	params: Decoder<T>,
	query: Decoder<U>,
	headers: Decoder<V>,
	body: Decoder<V>,
|}): Decoder<{|
	params: T,
	query: U,
	headers: V,
	body: W
|}> {
	const o = decoders.object(incoming);
	o.type = 'object';
	o.sub = incoming;

	return o;
}

export function endpointPUTParameters<
	T: {+[string]: *},
	U: {+[string]: *},
	V: {+[string]: *},
	W: {+[string]: *},
>(incoming: {|
	params: Decoder<T>,
	query: Decoder<U>,
	headers: Decoder<V>,
	body: Decoder<V>,
|}): Decoder<{|
	params: T,
	query: U,
	headers: V,
	body: W
|}> {
	const o = decoders.object(incoming);
	o.type = 'object';
	o.sub = incoming;

	return o;
}

export function endpointPATCHParameters<
	T: {+[string]: *},
	U: {+[string]: *},
	V: {+[string]: *},
	W: {+[string]: *},
>(incoming: {|
	params: Decoder<T>,
	query: Decoder<U>,
	headers: Decoder<V>,
	body: Decoder<V>,
|}): Decoder<{|
	params: T,
	query: U,
	headers: V,
	body: W
|}> {
	const o = decoders.object(incoming);
	o.type = 'object';
	o.sub = incoming;

	return o;
}
