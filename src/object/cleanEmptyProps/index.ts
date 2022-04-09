/* eslint-disable @typescript-eslint/no-explicit-any */
import { isEmptyObj } from "../isEmptyObj";
type GenericObject = { [key: string]: any };

export const cleanEmptyProps = (obj: GenericObject): GenericObject => {
	const keys = Object.keys(obj);
	return keys.reduce(
		(acc, key) => {
			if (typeof obj[key] === "object") {
				if (!isEmptyObj(obj[key])) {
					const check = cleanEmptyProps(obj[key]);
					if (!isEmptyObj(check)) {
						acc[key] = check;
					}
				}
			} else {
				if (obj[key]) {
					acc[key] = obj[key];
				}
			}
			return acc;
		},
		{},
	);
};
