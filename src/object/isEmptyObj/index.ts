type GenericObject = { [key: string]: unknown };

export const isEmptyObj = (object: GenericObject): boolean =>
	Object.keys(object).length === 0;
