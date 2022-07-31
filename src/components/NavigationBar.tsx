import type { ParentComponent } from "solid-js";
import Logo from "./Logo";

const NavigationBar: ParentComponent = () => {
    return (
        <nav class="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-cyan-50">
            <Logo/>
        </nav>
    )
}

export default NavigationBar