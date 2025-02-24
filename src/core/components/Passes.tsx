import { PassesProps } from "../interfaces/Passes";
import { Column } from "./Column";

export const Passes = ({ fontDescription, colorBg, colorPasses, id, max = 5 }: PassesProps) => {
	return (
		<Column
			mainAxisAlignment="center"
			crossAxisAlignment="center"
			className={`gap-3 text-xl lg:text-3xl py-10 lg:py-14 ${fontDescription}`}
			style={{ background: colorBg }}
			data-sal="slide-up"
			data-sal-duration="1500"
		>
			Hemos reservado
			<div className="flex gap-5">
				{Array.from({ length: max }, (_, index) => (
					<Column
						key={index}
						mainAxisAlignment="center"
						crossAxisAlignment="center"
					>
						<span className="max-lg:text-sm text-base">{index + 1}</span>
						<div
							className="w-7 h-7 lg:w-10 lg:h-10 rounded-full border"
							style={{
								borderColor: colorPasses,
								backgroundColor: index < id ? colorPasses : "transparent",
							}}
						/>
					</Column>
				))}
			</div>
			Lugares en tu honor
		</Column>
	);
};
