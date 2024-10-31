import { ReactNode } from 'react';
import NavLinks from "@/app/ui/nav-link";

type DefaultTemplateProps = {
    children: ReactNode;
};

function DefaultTemplate({ children }: DefaultTemplateProps) {

    return (
        <div className="flex h-full">
            <NavLinks/>
            <div className="flex-grow h-full overflow-auto">
                {children}
            </div>
        </div>
    );
}

export default DefaultTemplate;