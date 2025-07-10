import { Separator } from "@/components/ui/separator";
import { usePageTitle } from "@/hooks/use-pagetitle";

import Introduction from "./sections/introduction";
import Experience from "./sections/experience";
import Awards from "./sections/awards";

export default function About() {
    usePageTitle("About Me");

    return (
        <div className="flex flex-1 flex-col items-center gap-12">
            <Introduction />
            <Experience />
            <Separator orientation="horizontal" className="max-w-5xl mt-8" />
            <Awards />
        </div>
    );
}
