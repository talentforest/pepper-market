import Head from 'next/head';

interface ISeoProps {
  title: string;
  content: string;
}

export default function Seo({ title, content }: ISeoProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={content} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  );
}
