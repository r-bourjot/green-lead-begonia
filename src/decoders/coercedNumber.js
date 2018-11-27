// @flow strict

import type {Decoder} from 'decoders';

import {integer, number, positiveInteger, positiveNumber} from 'decoders';

export const coercedInteger: Decoder<number> = (blob: any) => {
	const coerced = parseInt(blob, 10);

	return integer(coerced);
};

export const coercedPositiveInteger: Decoder<number> = (blob: any) => {
	const coerced = parseInt(blob, 10);

	return positiveInteger(coerced);
};

export const coercedNumber: Decoder<number> = (blob: any) => {
	const coerced = parseFloat(blob);

	return number(coerced);
};

export const coercedPositiveNumber: Decoder<number> = (blob: any) => {
	const coerced = parseFloat(blob);

	return positiveNumber(coerced);
};
