import { Column } from "@/core/components/Column";

export const HomeScreen: React.FC = () => {
  return (
    <Column
      crossAxisAlignment="center"
      className="bg-white py-5 px-5 gap-5 min-h-screen"
    >
      <p className="text-lg">Suadoly</p>
    </Column>
  );
};
