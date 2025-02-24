export interface RestrictionProps {
	fontTitle: string;
	fontDescription: string;
	restrictionConfig: RestrictionState;
}

interface RestrictionState {
	title: string;
	description: string[];
}
