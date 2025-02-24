export const metadata = {
  //metadataBase: new URL("https://suadoly.com"),
  title: "Invitación de cumpleaños",
  description: "Acompáñame en mi un día especial para mi",
  openGraph: {
    title: "Invitación de cumpleaños",
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
    title: "Invitación de cumpleaños",
  },
};

export default function InvitationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full min-h-lvh m-0 p-0">{children}</div>;
}
