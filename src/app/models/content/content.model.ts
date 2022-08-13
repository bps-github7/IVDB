import { Metadata } from "./metadata.model";
export interface Content {
	id: string,
	title ?: string,
	description ?: string,
	body ?: string,
	metadata ?: Metadata
}
