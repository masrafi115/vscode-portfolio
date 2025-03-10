import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Abdur Rahman Rafi is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="nitin ranganath, nitin, ranganath, web developer portfolio, nitin web developer, nitin developer, mern stack, nitin ranganath portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Abdur Rahman Rafi's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://masrafi115.github.io/vscode-portfolio" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Abdur Rahman Rafi',
};
