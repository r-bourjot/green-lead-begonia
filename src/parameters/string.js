// @flow strict

import type {Decoder} from 'decoders';
import type {ParameterOptions} from 'begonia/types';

import * as decoders from 'decoders';
import {annotate} from 'begonia/utils/annotate';

export function string(options: ParameterOptions<string>): Decoder<string> {
	const d = decoders.string;
	d.type = 'string';

	return annotate(d, options);
}

export function email(options: ParameterOptions<string>): Decoder<string> {
	const d = decoders.string;
	d.type = 'string';
	d.format = 'email';

	return annotate(d, options);
}

export function url(options: ParameterOptions<string>): Decoder<string> {
	const d = decoders.string;
	d.type = 'string';
	d.format = 'url';

	return annotate(d, options);
}

const uuidRegex =
	/^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/;

export function uuid(options: ParameterOptions<string>): Decoder<string> {
	const d = decoders.regex(uuidRegex, 'Must be UUID');
	d.type = 'string';
	d.format = 'guid';

	return annotate(d, options);
}

export function regex(
	options: ParameterOptions<string>,
	reg: RegExp,
	message: string
): Decoder<string> {
	const d = decoders.regex(reg, message);
	d.type = 'string';
	d.format = reg.toString();

	return annotate(d, options);
}

export function enumString<V: {[string]: any}>(
	options: ParameterOptions<$Keys<V>>,
	values: V
): Decoder<$Keys<V>> {
	const reg = new RegExp(`^(${Object.keys(values).join('|')})$`);
	const format = `Enum(${Object.keys(values).join(', ')})`;

	const d = decoders.regex(reg, `Must be ${format}`);
	d.type = 'string';
	d.format = format;

	return annotate(d, options);
}
