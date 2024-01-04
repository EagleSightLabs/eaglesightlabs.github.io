import React, { useEffect, useState } from 'react';

const Home = () => {
    const [Header, setHeader] = useState(null);
    const [MainContent, setMainContent] = useState(null);
    const [Footer, setFooter] = useState(null);
    const themeName = process.env.NEXT_PUBLIC_THEME || 'defaultTheme';

    useEffect(() => {
        const loadComponents = async () => {
            const HeaderModule = await import(`@/src/themes/${themeName}/components/Header`);
            const MainContentModule = await import(`@/src/themes/${themeName}/components/MainContent`);
            const FooterModule = await import(`@/src/themes/${themeName}/components/Footer`);

            setHeader(() => HeaderModule.default);
            setMainContent(() => MainContentModule.default);
            setFooter(() => FooterModule.default);
        };

        loadComponents();
    }, [themeName]);

    if (!Header || !MainContent || !Footer) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    );
};

export default Home;
