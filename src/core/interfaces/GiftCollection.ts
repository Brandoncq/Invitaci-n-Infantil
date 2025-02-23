interface ModalData {
	name: string;
	icon: React.ReactNode  | null;
	accountData?: { type: string; number: string }[];
	locationData?: { url: string };
}

export interface GiftCollectionProps {
	fontTitle: string;
	fontDescription: string;
	modalsData: Record<string, ModalData>;
	accountData: { yapeNumber: string; bankAccounts: { type: string; number: string }[] };
	locationData: { url: string };
}
