// @flow strict

import type {Decoder} from 'decoders';
import type {ParameterOptions} from 'begonia/types';

import * as decoders from 'decoders';
import * as coerced from 'begonia/decoders/coercedNumber';
import {annotate} from 'begonia/utils/annotate';

export function integer(options: ParameterOptions<number>): Decoder<number> {
	const d = decoders.integer;
	d.type = 'integer';
	d.format = 'integer';

	return annotate(d, options);
}

export function positiveInteger(options: ParameterOptions<number>): Decoder<number> {
	const d = decoders.positiveInteger;
	d.type = 'integer';
	d.format = 'postiveInteger';

	return annotate(d, options);
}

export function number(options: ParameterOptions<number>): Decoder<number> {
	const d = decoders.number;
	d.type = 'number';
	d.format = 'float';

	return annotate(d, options);
}

export function positiverNumber(options: ParameterOptions<number>): Decoder<number> {
	const d = decoders.positiveNumber;
	d.type = 'number';
	d.format = 'positiveFloat';

	return annotate(d, options);
}

export function coercedInteger(options: ParameterOptions<number>): Decoder<number> {
	const d = coerced.coercedInteger;
	d.type = 'integer';
	d.format = 'coercedInteger';

	return annotate(d, options);
}

export function coercedPositiveInteger(options: ParameterOptions<number>): Decoder<number> {
	const d = coerced.coercedPositiveInteger;
	d.type = 'integer';
	d.format = 'coercedPositiveInteger';

	return annotate(d, options);
}

export function coercedNumber(options: ParameterOptions<number>): Decoder<number> {
	const d = coerced.coercedNumber;
	d.type = 'number';
	d.format = 'coercedFloat';

	return annotate(d, options);
}

export function coercedPositiverNumber(options: ParameterOptions<number>): Decoder<number> {
	const d = coerced.coercedPositiveNumber;
	d.type = 'number';
	d.format = 'coercedPositiveFloat';

	return annotate(d, options);
}
