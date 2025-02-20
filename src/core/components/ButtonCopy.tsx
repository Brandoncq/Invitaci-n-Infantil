import { useState } from "react";
import { CheckMarkIcon } from "../icons/CheckMark";
import { ClipboardIcon } from "../icons/Clipboard";
import { CopyButtonProps } from "../interfaces/CopyButton";

export const ButtonCopy: React.FC<CopyButtonProps> = ({ textToCopy, className = "", text, icon = true, textAction }) => {
	const [copy, setCopy] = useState(true);

	const handleCopy = () => {
		navigator.clipboard.writeText(textToCopy);
		setCopy(false);
		setTimeout(() => {
			setCopy(true);
		}, 3000);
	};

	return (
		<button
			className={`flex gap-2 items-center ${className}`}
			onClick={handleCopy}
		>
			<p className={`underline ${!copy && "text-green-700 decoration-green-700"}`}>{copy ? text : textAction || text}</p>
			{icon && <>{copy ? <ClipboardIcon /> : <CheckMarkIcon />}</>}
		</button>
	);
};
