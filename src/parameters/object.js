// @flow strict

import type {Decoder} from 'decoders';

import * as decoders from 'decoders';

// eslint-disable-next-line
type DecoderUnwrap = <T>(d: Decoder<T>) => T;

// XXX Shit happens when x is undefined
export function object<O: {+[string]: Decoder<any>}>(x: O): Decoder<$ObjMap<O, DecoderUnwrap>> {
	const o = decoders.object(x);
	o.type = 'object';
	o.sub = x;

	return o;
}
