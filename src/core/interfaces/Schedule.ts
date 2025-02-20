interface ScheduleItem {
	time: string;
	description: string;
	icon: React.ReactNode;
	isUp: boolean;
}

export interface ScheduleProps {
	fontTitle: string;
	fontDescription: string;
	scheduleItems: ScheduleItem[];
}
