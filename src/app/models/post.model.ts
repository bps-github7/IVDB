export interface Post {
	pushkey: string;
	loading: boolean;
	text: string;
	votes: number;
	error?: string
}