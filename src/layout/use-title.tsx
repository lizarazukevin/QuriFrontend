import {useEffect, useRef} from "react";

interface UsePageTitleOptions {
    restoreOnUnmount?: boolean;
}

const DEFAULT_OPTIONS: UsePageTitleOptions = {
    restoreOnUnmount: false,
};

function usePageTitle(title: string, options: UsePageTitleOptions = DEFAULT_OPTIONS) {
    const prevTitleRef = useRef(typeof document !== "undefined" ? document.title : "");

    useEffect(() => {
        if (typeof document === "undefined") return;

        document.title = `${title} - Quri`;

        return options.restoreOnUnmount
            ? () => {
                document.title = prevTitleRef.current;
            }
            : undefined;
    }, [title, options.restoreOnUnmount]);
}

export default usePageTitle;
