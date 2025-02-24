export const metadata = {
  //metadataBase: new URL("https://suadoly.com"),
  title: "Invitación de Boda",
  description: "Acompáñanos en nuestro día especial",
  openGraph: {
    title: "Invitación de Boda",
    url: "https://Suadoly.com",
    images: ["/melissa-eduardo/ME.svg"],
    siteName: "Suadoly",
    type: "website",
  },
  authors: [
    { name: "Angel Santiago", url: "https://github.com/Hestranha" },
    { name: "Davis Brandon", url: "https://github.com/Brandoncq" },
  ],
  appleWebApp: {
    title: "Invitación de Boda",
  },
};

export default function InvitationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="w-full min-h-lvh m-0 p-0">{children}</main>;
}
