export interface RecomendationMusicProps {
	fontTitle: string;
	fontDescription: string;
	config: {
		url: string;
		fields: {
			name: string;
			message: string;
		};
	};
}
