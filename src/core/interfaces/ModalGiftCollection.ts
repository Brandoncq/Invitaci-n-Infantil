interface AccountData {
	type: string;
	number: string;
}

interface LocationData {
	url: string;
}

export interface ModalGiftCollectionProps {
	fontDescription: string;
	isVisible: boolean;
	onClose: () => void;
	name: string;
	icon?: React.ReactNode;
	accountData?: AccountData[];
	locationData?: LocationData;
}
