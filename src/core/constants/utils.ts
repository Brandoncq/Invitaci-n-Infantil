export const generarCadenaAleatoria = (longitud: number = 4): string =>
	Array.from({ length: longitud }, () => "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(Math.random() * 62)]).join("");

export const convertTakenAtToSystemTime = (takenAt: number) => {
	if (!takenAt) return null;
	const date = new Date(takenAt * 1000);
	return date.toLocaleString();
};

export const timeAgo = (takenAt: number) => {
	const now = Math.floor(Date.now() / 1000);
	const differenceInSeconds = now - takenAt;
	if (differenceInSeconds < 0) return "Fecha en el futuro";
	const hours = Math.floor(differenceInSeconds / 3600);
	const minutes = Math.floor((differenceInSeconds % 3600) / 60);
	let result = "hace ";
	if (hours > 0) result += `${hours} hora${hours > 1 ? "s" : ""}`;
	if (hours > 0 && minutes > 0) result += " y ";
	if (minutes > 0) result += `${minutes} minuto${minutes > 1 ? "s" : ""}`;
	if (hours === 0 && minutes === 0) result = "hace menos de un minuto";
	return result;
};

export const urlBackend = "http://localhost:4000/";
export const businessName = "suadoly";
export const urlBusinessName = "https://www.instagram.com/suadoly";
