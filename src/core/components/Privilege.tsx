import { PrivilegeProps } from "../interfaces/Privilege";
import { Column } from "./Column";

export const Privilege = ({
  fontTitle,
  fontDescription,
  brideParents,
  groomParents,
  godparents,
}: PrivilegeProps) => {
  return (
    <Column
      mainAxisAlignment="center"
      crossAxisAlignment="center"
      className="honor-bg relative"
    >
      <Column crossAxisAlignment="center" className="lg:w-[25rem]">
        <Column className={`text-center gap-4 px-10 ${fontDescription}`}>
          <Column
            mainAxisAlignment="center"
            crossAxisAlignment="center"
            className="gap-2 w-full lg:w-[25rem]"
            data-sal="slide-up"
            data-sal-duration="1500"
          >
            <h2
              className={`font-semibold w-full ${fontTitle} text-xl lg:text-3xl max-lg:px-10 lg:w-[40rem] mt-4 text-[#000000]`}
            >
              Celebro este día especial con
            </h2>
            <Column className="py-5 gap-7">
              <Column className="gap-2">
                <span className="font-medium text-sm lg:text-base uppercase">
                  Mis padres
                </span>
                <Column className="text-sm lg:text-base tracking-wider gap-1 text-blackGray">
                  {brideParents.map((padre, index) => (
                    <span key={index}>{padre.name}</span>
                  ))}
                </Column>
              </Column>
              <Column className="gap-2">
                <span className="font-medium text-sm lg:text-base uppercase">
                  Mis seres queridos
                </span>
                <Column className="text-sm lg:text-base tracking-wider gap-1 text-blackGray">
                  {groomParents.map((familiar, index) => (
                    <span key={index}>{familiar.name}</span>
                  ))}
                </Column>
              </Column>
            </Column>
          </Column>
          <Column
            crossAxisAlignment="center"
            mainAxisAlignment="center"
            className="gap-2"
            data-sal="slide-up"
            data-sal-duration="1500"
          >
            <h2
              className={`font-semibold max-lg:w-[85%] ${fontTitle} text-xl max-lg:px-2 lg:text-3xl text-[#000000]`}
            >
              Acompañado de mis Padrinos
            </h2>
            <Column className="gap-2 py-5">
              <Column className="text-sm lg:text-base tracking-wider gap-1 text-blackGray">
                {godparents.map((amigo, index) => (
                  <span key={index}>{amigo.name}</span>
                ))}
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
      <div className="absolute w-full h-full flex flex-wrap justify-between">
        <div className="w-1/5">
          <img
            src="https://cdn.discordapp.com/attachments/1342238147811082242/1343432814560804946/pepega-pog-nube.png?ex=67bd40ce&is=67bbef4e&hm=17b40c9f03749b14590dfefda2b717af94939d09ae1fd1b7e8179d43b4f41216&"
            alt=""
            className="w-52 h-auto"
          />
        </div>
        <div className="w-1/5 flex justify-end items-end">
          <img
            src="https://cdn.discordapp.com/attachments/1342238147811082242/1343429120566100018/fondo-nube-estrella-2.png?ex=67bd3d5e&is=67bbebde&hm=c1f482288049ea24a1587de8978f91b1ff49871a300c2b2305fd4138fd3cf96c&"
            alt=""
            className="w-52 h-auto"
          />
        </div>
      </div>
    </Column>
  );
};
