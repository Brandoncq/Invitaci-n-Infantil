import { ScheduleProps } from "../interfaces/Schedule";
import { Column } from "./Column";

export const Schedule = ({ fontTitle, fontDescription, scheduleItems }: ScheduleProps) => {
	const partSchedule = ({ time, description, icon, isUp }: { time: string; description: string; icon: React.ReactNode; isUp: boolean }) => {
		return (
			<>
				{isUp ? (
					<>
						<picture className="absolute top-1/2 lg:top-[calc(-100%-50px)] right-1/2 -translate-x-1/2 max-lg:left-[calc(100%-110px)] lg:translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 max-lg:text-end text-center">
							{icon}
							<Column>
								<p className="text-sm lg:text-base">{time}</p>
								<p className="text-sm lg:text-base text-nowrap">{description}</p>
							</Column>
						</picture>
						<span className="absolute text-base lg:text-xl flex flex-col gap-2 text-start lg:text-center top-1/2 lg:top-[calc(100%+20px)] left-[calc(100%+30px)] lg:left-1/2 max-lg:-translate-y-1/2 lg:-translate-x-1/2" />
					</>
				) : (
					<>
						<picture className="absolute top-1/2 lg:top-[calc(-100%-30px)] right-1/2 -translate-x-1/2 max-lg:left-[calc(100%-110px)] lg:translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 w-[50px] text-center" />
						<span className="absolute text-base lg:text-xl flex flex-col gap-2 text-start lg:text-center top-1/2 lg:top-[calc(100%+20px)] left-[calc(100%+30px)] lg:left-1/2 max-lg:-translate-y-1/2 lg:-translate-x-1/2">
							{icon}
							<Column>
								<p className="text-sm lg:text-base">{time}</p>
								<p className="text-sm lg:text-base text-nowrap">{description}</p>
							</Column>
						</span>
					</>
				)}
			</>
		);
	};

	return (
		<section
			className="relative flex items-center justify-center py-20 lg:pb-40 pt-36 lg:pt-[15rem] bg-[#ffffff00] flex-col drugs-trial-custom"
			data-sal="slide-up"
			data-sal-duration="1500"
		>
			<p className={`retro-signature-regular text-2xl lg:text-4xl top-10 lg:top-12 absolute text-[#000000] font-semibold ${fontTitle}`}>Itinerario</p>
			<ol className="flex max-lg:flex-col max-lg:h-[400px] lg:w-[700px] justify-between relative after:content-[''] lg:after:block lg:after:w-full lg:after:border-b-2 lg:after:border-dotted lg:after:border-blackGray after:absolute lg:after:top-1/2 lg:after:left-0 lg:after:translate-y-[-50%] top-0 after:left-1/2 max-lg:after:w-[2px] max-lg:after:h-full max-lg:after:bg-[radial-gradient(circle,_#000_1.2px,_transparent_1.2px)] max-lg:after:bg-[length:2px_8px] max-lg:after:-translate-x-1/2">
				{scheduleItems.map((item, index) => (
					<li
						key={index}
						className={`list-none relative after:content-[''] after:block after:w-[13px] after:h-[13px] after:rounded-full after:bg-blackGray after:border-2 after:border-blackGray ${fontDescription} text-blackGray`}
					>
						{partSchedule(item)}
					</li>
				))}
			</ol>
		</section>
	);
};
