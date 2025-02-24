export interface RSVPConfirmationProps {
	fontTitle: string;
	fontDescription: string;
	config: {
		url: string;
		text?: string;
		fields: {
			name: string;
			phone: string;
			confirmation: string;
			message: string;
		};
	};
}
