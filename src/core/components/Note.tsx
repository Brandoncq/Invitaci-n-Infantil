import { NoteProps } from "../interfaces/Note";

export const Note = ({ fontTitle, text }: NoteProps) => {
	return (
		<section className="bg-[#b3c79e] flex flex-col items-center justify-center py-7 lg:py-10 gap-3 lg:gap-10 w-full text-center text-[#ffffff]">
			<p className={`retro-signature-custom text-3xl lg:text-4xl w-[90%] ${fontTitle}`}>{text.textPrimary}</p>
			{text.textSecondary && (
				<div className="flex gap-5 text-base lg:text-2xl drugs-trial-italic">
					<span>@LoremIpsum</span>
					<span>@LoremIpsum</span>
				</div>
			)}
		</section>
	);
};
