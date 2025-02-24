export interface DressCodeProps {
	fontTitle: string;
	fontDescription: string;
	dressLabel: string;
	maleLabel: string;
	femaleLabel: string;
	femaleIcon: React.ReactNode;
	maleIcon: React.ReactNode;
	femaleDescription: string[];
	maleDescription: string[];
	femaleDressType: string;
	maleDressType: string;
	colorGuide?: boolean;
}
