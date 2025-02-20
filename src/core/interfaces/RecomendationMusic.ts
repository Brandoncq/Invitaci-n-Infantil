export interface RecomendationMusicProps {
	fontTitle: string;
	fontDescription: string;
	isMobile:boolean;
	config: {
		url: string;
		fields: {
			name: string;
			message: string;
		};
	};
}
