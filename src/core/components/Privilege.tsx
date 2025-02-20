import { PrivilegeProps } from "../interfaces/Privilege";
import { Column } from "./Column";

export const Privilege = ({ fontTitle, fontDescription, brideParents, groomParents, godparents }: PrivilegeProps) => {
	return (
		<Column
			mainAxisAlignment="center"
			crossAxisAlignment="center"
			className="honor-bg"
		>
			<Column
				crossAxisAlignment="center"
				className="lg:w-[25rem]"
			>
				<Column className={`text-center gap-4 px-10 ${fontDescription}`}>
					<Column
						mainAxisAlignment="center"
						crossAxisAlignment="center"
						className="gap-2 w-full lg:w-[25rem]"
						data-aos="fade-up"
						data-aos-duration="1500"
					>
						<h2 className={`font-semibold w-full ${fontTitle} text-2xl lg:text-3xl lg:w-[40rem] mt-4 text-[#000000]`}>
							Con la bendición de <br />
							nuestros padres
						</h2>
						<Column className="py-5 gap-7">
							<Column className="gap-2">
								<span className="font-medium text-sm lg:text-base uppercase">Padres de la novia</span>
								<Column className="text-sm lg:text-base tracking-wider gap-1 text-blackGray">
									{brideParents.map((padre, index) => (
										<span key={index}>{padre.name}</span>
									))}
								</Column>
							</Column>
							<Column className="gap-2">
								<span className="font-medium text-sm lg:text-base uppercase">Padres del novio</span>
								<Column className="text-sm lg:text-base tracking-wider gap-1 text-blackGray">
									{groomParents.map((padre, index) => (
										<span key={index}>{padre.name}</span>
									))}
								</Column>
							</Column>
						</Column>
					</Column>
					<Column
						crossAxisAlignment="center"
						mainAxisAlignment="center"
						className="gap-2"
						data-aos="fade-up"
						data-aos-duration="1500"
					>
						<h2 className={`font-semibold max-lg:w-[85%] ${fontTitle} text-2xl lg:text-3xl text-[#000000]`}>Junto a nuestros padrinos</h2>
						<Column className="gap-2 py-5">
							<Column className="text-sm lg:text-base tracking-wider gap-1 text-blackGray">
								{godparents.map((padrino, index) => (
									<span key={index}>{padrino.name}</span>
								))}
							</Column>
						</Column>
					</Column>
				</Column>
			</Column>
		</Column>
	);
};
