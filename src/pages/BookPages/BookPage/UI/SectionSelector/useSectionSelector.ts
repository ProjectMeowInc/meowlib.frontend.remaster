import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";


export type AvailableSections = "main" | "chapters"

export const useSectionSelector = () => {

    const router = useRouter()
    const pathname = usePathname()
    const params = useSearchParams()
    const [currentSection, setCurrentSection] = useState<AvailableSections>()

    useEffect(() => {
        const section = (params?.get("section") ?? "main") as AvailableSections
        setCurrentSection(section)
    }, [params]);

    const changeToSection = (section: AvailableSections) => {
        const currentPath = pathname ?? ""
        const params = new URLSearchParams()
        params.set("section", section)

        const query = `${currentPath}?${params.toString()}`
        router.push(query)
    }

    return {
        currentSection,
        changeToSection
    }
}