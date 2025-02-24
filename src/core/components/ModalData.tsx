import { Column } from "./Column";

interface ModalDataProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const ModalData: React.FC<ModalDataProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <Column
      mainAxisAlignment="center"
      crossAxisAlignment="center"
      className={`fixed top-0 left-0 w-full ${
        isOpen ? "z-10" : "-z-10 hidden"
      } h-screen bg-[#fdfcf44a] gap-4`}
    >
      <Column
        mainAxisAlignment="center"
        crossAxisAlignment="center"
        className="relative rounded-lg bg-white shadow-[0_0_8px_rgba(0,0,0,0.47)] w-full lg:w-1/3 py-10 px-8gap-2 lg:gap-3"
      >
        <button
          className="absolute top-0 right-0 font-bold text-black w-10 h-10 p-0 border-none"
          onClick={onClose}
        >
          <span className="text-3xl">×</span>
        </button>
        {title && (
          <h2 className="retro-signature-custom text-base lg:text-2xl w-full text-center font-bold">
            {title}
          </h2>
        )}
        {/* <Lottie
					options={animationOptions}
					height={250}
					width={250}
				/> */}
        {children}
        {/* <div className="flex justify-end">
					<button
						type="button"
						onClick={onSubmit}
						className="button-enviar w-[150px]"
					>
						Cerrar
					</button>
				</div> */}
      </Column>
    </Column>
  );
};
