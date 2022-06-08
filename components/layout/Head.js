import NextHead from "next/head";

function MyHead({ title = "" }) {
  return (
    <NextHead>
      <title>
        {title}
        {title ? " | " : ""}Create Next App
      </title>
      <link rel="icon" href="/favicon.ico" />

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossorigin="anonymous"
      ></link>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </NextHead>
  );
}

export default MyHead;
