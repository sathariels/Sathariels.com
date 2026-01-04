import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
    title: "Contact | Sathariels",
    description: "Get in touch with me for collaborations and opportunities.",
};

export default function Page() {
    return <ContactPage />;
}
