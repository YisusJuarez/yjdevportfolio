import React from 'react';
const getSitemap = () => `<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
<url>
    <loc>https://wecode.team/</loc>
</url>
<url>
    <loc>https://wecode.team/portfolio</loc>
</url>
</urlset>`;

class Sitemap extends React.Component {
    async getInitialProps({ res }) {
        res.setHeader('Content-Type', 'text/xml');
        res.write(getSitemap());
        res.end();
    }
}

export default Sitemap;