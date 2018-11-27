// @flow strict

import type {Decoder} from 'decoders';
import type {ParameterOptions} from 'begonia/types';

export function annotate<T>(decoder: Decoder<T>, options: ParameterOptions<T>): Decoder<T> {
	decoder.value = ({name}: {name?: string}) => ({
		description: options.description,
		example: options.example,
		'default': options.required ? undefined : options._default,
		required: options.required,
		format: decoder.format ? decoder.format : undefined,
		type: decoder.type,
		name: name ? name : undefined
	});

	return decoder;
}
