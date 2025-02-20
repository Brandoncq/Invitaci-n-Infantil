import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Column } from "../components/Column";
import { HomeScreen } from "../../features/home/presentation/pages/HomeScreen";
import { MelissaEduardo } from "../../features/melissa-eduardo/presentation/pages/MelissaEduardo";

export const AppRouter = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route
					path="/"
					element={<HomeScreen />}
				/>
			</Route>
			<Route
				path="/melissa-eduardo"
				element={<MelissaEduardo />}
			/>
			<Route
				path="/*"
				element={<Navigate to="/" />}
			/>
		</Routes>
	);
};

const Layout: React.FC = () => {
	return (
		<Column className="bg-[#ffffff] overflow-y-auto relative max-h-screen">
			<main className="w-full min-h-screen">
				<Outlet />
			</main>
		</Column>
	);
};
