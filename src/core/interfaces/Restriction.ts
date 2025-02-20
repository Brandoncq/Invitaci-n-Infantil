export interface RestrictionProps {
	fontTitle: string;
	fontDescription: string;
	restrictionConfig: RestrictionState;
	isMobile:boolean;
}

interface RestrictionState {
	title: string;
	description: string[];
}
