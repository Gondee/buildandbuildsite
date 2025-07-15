import { NextResponse } from 'next/server';

export async function GET() {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Open Graph Test</title>
    </head>
    <body>
      <h1>Open Graph Metadata Test</h1>
      <h2>Current Metadata:</h2>
      <pre>
Title: Build and Build Co - BNB Access for US Investors
Description: Institutional-grade access to Binance Smart Chain in the United States
Image: /bnb-logo.svg
Image URL (resolved): ${process.env.NEXT_PUBLIC_BASE_URL || 'https://buildandbuildsite.vercel.app'}/bnb-logo.svg
      </pre>
      
      <h2>Debug Tools:</h2>
      <ul>
        <li><a href="https://developers.facebook.com/tools/debug/" target="_blank">Facebook Sharing Debugger</a></li>
        <li><a href="https://cards-dev.twitter.com/validator" target="_blank">Twitter Card Validator</a></li>
        <li><a href="https://www.linkedin.com/post-inspector/" target="_blank">LinkedIn Post Inspector</a></li>
        <li><a href="https://metatags.io/" target="_blank">Meta Tags Preview Tool</a></li>
      </ul>
      
      <h2>Common Issues:</h2>
      <ul>
        <li>SVG format may not be supported - consider PNG/JPG</li>
        <li>Cache needs to be cleared on social platforms</li>
        <li>Image must be publicly accessible</li>
      </ul>
    </body>
    </html>
  `;
  
  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}