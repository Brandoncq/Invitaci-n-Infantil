import { ModalGiftCollectionProps } from "../interfaces/ModalGiftCollection";
import { ButtonCopy } from "./ButtonCopy";
import { Column } from "./Column";

export const ModalGiftCollection = ({ fontDescription, isVisible, onClose, name, icon, accountData, locationData }: ModalGiftCollectionProps) => {
	return (
		<Column
			mainAxisAlignment="center"
			crossAxisAlignment="center"
			className={`fixed top-0 max-lg:px-4 left-0 w-full h-screen bg-[#fdfcf44a] gap-4 ${isVisible ? "z-10" : "-z-10 hidden"} transition-all duration-300 ${
				isVisible ? "opacity-100" : "opacity-0"
			} ${fontDescription}`}
		>
			<Column
				mainAxisAlignment="center"
				crossAxisAlignment="center"
				className="relative rounded-lg bg-white shadow-[0_0_8px_rgba(0,0,0,0.47)] w-full lg:w-1/3 py-10 px-8 z-20 gap-2 lg:gap-3"
			>
				<button
					className="absolute top-0 right-0 font-bold text-black w-10 h-10 p-0 border-none"
					onClick={onClose}
				>
					<span className="text-3xl">×</span>
				</button>
				{name && <h2 className="text-xl lg:text-2xl w-full text-center font-semibold">{name}</h2>}
				{icon}
				<div className="max-lg:text-base">
					<p>{name}</p>
					{accountData?.map((account, index) => (
						<div
							key={index}
							className="flex font-semibold items-center justify-center gap-2"
						>
							<p>
								{account.type}: {account.number}
							</p>
							<ButtonCopy textToCopy={account.number} />
						</div>
					))}
				</div>

				{locationData && (
					<div>
						<h2 className="text-xl lg:text-2xl w-full text-center font-semibold">Recepción de regalos</h2>
						<div className="max-lg:text-base">
							<p>------------------</p>
							<a
								href={locationData.url}
								target="_blank"
								rel="noreferrer"
								className="underline w-[150px]"
							>
								Ver ubicación
							</a>
						</div>
					</div>
				)}

				<button
					type="button"
					onClick={onClose}
					className="button-secundario w-[150px]"
				>
					Cerrar
				</button>
			</Column>
		</Column>
	);
};
