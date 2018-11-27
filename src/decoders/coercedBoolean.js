// @flow strict

import type {Decoder} from 'decoders';

import {boolean} from 'decoders';

export const coercedBoolean: Decoder<boolean> = (blob: any) => {
	const coerced =
		blob === 'true' ? true :
			blob === 'false' ? false :
				Symbol;

	return boolean(coerced);
};
