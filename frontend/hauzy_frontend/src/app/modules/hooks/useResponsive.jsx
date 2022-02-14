import { useEffect, useState } from "react";

const useResponsive = (screen = '(max-width:767px)') => {
    const [match, setMatch] = useState(false);

    const watchMedia = window.matchMedia(screen);
    console.log(watchMedia);

    const onResizeScreen = (e) => {
        setMatch(typeof e === 'boolean' ? e : e.matches);
    }

    useEffect(() => {
        try {
            watchMedia.addEventListener('change', onResizeScreen);
        } catch {
            watchMedia.addListener(onResizeScreen);
        }

        return () => {
            try {
                watchMedia.addEventListener('change', onResizeScreen);
            } catch {
                watchMedia.addListener(onResizeScreen);
            }
        }

    }, [watchMedia]);

    return [match, setMatch];
}

export default useResponsive;