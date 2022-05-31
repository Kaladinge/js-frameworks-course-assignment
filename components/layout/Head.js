import NextHead from "next/head";

function MyHead({ title = "" }) {
  return (
    <NextHead>
      <title>
        {title}
        {title ? " | " : ""}Create Next App
      </title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </NextHead>
  );
}

export default MyHead;
